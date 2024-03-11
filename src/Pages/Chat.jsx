import React, { useState, useEffect } from 'react';



const Chat = ({ pseudoname, joined, socket }) => {
  const [ currentMessage, setCurrentMessage ] = useState('');
  const [ messagesList, setMessageList ] = useState([]);
  const [ joinedMessage, setJoinedMessage ] = useState(null);


  // const getMessages = async () => {
  //       const res = await fetch('http://localhost:4000/api/messages')
  //       const data = await res.json()
  //       setMessageList(data)
  // }


  const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                content: currentMessage,
                author: pseudoname
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
        // getMessages()
    }, [socket, joined])


  
  return (
    <div className='shadow-2xl w-5/12 h-96 m-auto mt-20 flex flex-col items-center justify-between'>
        <div>
            {joinedMessage ? <h1>{joinedMessage}</h1> : ''}
            {messagesList.map((m, index) => {
                return <h1 key={index}>{m.content}</h1>
            })}
        </div>
        <div className='pb-5'>
            <input type="text" placeholder='chat...' className='w-80 p-3 m-auto mt-4 mr-3' value={currentMessage} onChange={(e) => setCurrentMessage(e.target.value)} />
            <button className='bg-lime-500 text-white px-2 w-14 rounded-lg py-2 m-auto mt-20' onClick={sendMessage}>Send</button>
        </div>
    </div>
  )
}

export default Chat