import React, { useState, useEffect } from 'react';
import { BsFillSendFill } from "react-icons/bs";
import Message from '../components/Message';



const Chat = ({ pseudoname, joined, socket }) => {
  const [ currentMessage, setCurrentMessage ] = useState('');
  const [ messagesList, setMessageList ] = useState([]);
  const [ joinedMessage, setJoinedMessage ] = useState(null);


  const getMessages = async () => {
        const res = await fetch('http://localhost:4000/api/messages')
        const data = await res.json()
        setMessageList(data)
  }


  const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                content: currentMessage,
                author: pseudoname,
                createdAt: new Date(Date.now())
            }
            await socket.emit('send_message', messageData)
            setMessageList((list) => [...list, messageData])
            setCurrentMessage('')
        }
    }


    useEffect(() => {
        socket.on('recieve_message', (data) => {
            setMessageList((list) => [...list, data])
        })
        socket.on('user_joined', (pseudoname) => {
            setJoinedMessage(`${pseudoname} joined`)
        })
        getMessages()
    }, [socket, joined])


  
  return (
    <div className='shadow-2xl w-8/12 h-full m-auto mt-10 flex flex-col items-center justify-between pt-5'>
        <div className='w-11/12 flex flex-col max-h-96 overflow-y-auto pt-4 rounded-lg'>
            {joinedMessage ? <h1>{joinedMessage}</h1> : ''}
            {messagesList.map((m, index) => {
                return <Message key={index} content={m.content} author={m.author} createdAt={m.createdAt} pseudoname={pseudoname} />
            })}
        </div>
        <div className='pb-5'>
            <input type="text" placeholder='chat...' className='w-96 p-3 m-auto mt-4 mr-3 pl-5 border rounded-lg' value={currentMessage} onChange={(e) => setCurrentMessage(e.target.value)} />
            <button className='bg-buttonColor text-white px-2 py-4 w-12 rounded-lg m-auto mt-20' onClick={sendMessage}>
              <BsFillSendFill className='m-auto text-lg' />
            </button>
        </div>
    </div>
  )
}

export default Chat