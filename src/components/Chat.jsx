import { list } from 'postcss';
import React, { useEffect, useState } from 'react'

function Chat({ socket, room, pseudoname }) {
    const [ currentMessage, setCurrentMessage ] = useState('');
    const [ messages, setMessages ] = useState([]);

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room,
                author: pseudoname,
                date: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes() + ":" + new Date(Date.now()).getSeconds(),
                message: currentMessage
            }

            await socket.emit('send_message', messageData)
            setMessages((list) => [...list, messageData])
        }
    }


    console.log("Before", messages);

    useEffect(() => {
        socket.on('recieve_message', (data) => {
            setMessages((list) => [...list, data])
        })

        

    }, [socket])

    console.log("After", messages);

    return (
        <div className='m-auto'>
            <div className="">
                <p className='text-center'>Live Chat</p>
            </div>
            <div className="text-center">
                {messages.map((m, index) => {
                    return (<h1 key={index}>{m.message}</h1>)
                })}
            </div>
            <div className="text-center">
                <input type="text" placeholder='Hey' value={currentMessage} onChange={(e) => setCurrentMessage(e.target.value)} />
                <button onClick={sendMessage} className='border w-9'>&#9658;</button>
            </div>
        </div>
    )
}

export default Chat;