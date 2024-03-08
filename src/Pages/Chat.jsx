import React, { useEffect, useState } from 'react';
import Input from "../components/Input.jsx";
import Button from '../components/Button.jsx'
import socketIo from "socket.io-client";

const socket = socketIo.connect('http://localhost:4000')

const Chat = () => {
    const [ joined, setJoined ] = useState(false)
    const [ pseudoname, setPseudoname ] = useState('')
    const [ room, setRoom ] = useState('')
    const [ currentMessage, setCurrentMessage ] = useState('')
    const [ messagesList, setMessageList ] = useState([]);

    const joinRoom = () => {
        if (pseudoname !== "" && room !== "") {
            const data = {room, pseudoname}
            setJoined(true)
            socket.emit('join_room', data)
        }
    }

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                message: currentMessage,
                room
            }
            await socket.emit('send_message', messageData)
            setMessageList((list) => [...list, messageData])
        }
    }

    useEffect(() => {
        socket.on('recieve_message', (data) => {
            setMessageList((list) => [...list, data])
        })
    }, [socket])

    console.log("list", messagesList);


    return (
        <>
            {!joined ? (
                <div className='flex flex-col m-auto'>
                    <input className='w-2/6 py-4 m-auto mt-4' type="text" placeholder="Pseudoname" value={pseudoname} onChange={(e) => setPseudoname(e.target.value)} />
                    <input className='w-2/6 py-4 m-auto mt-4' type="text" placeholder="Room" value={room} onChange={(e) => setRoom(e.target.value)} />
                    <button className='bg-lime-500 text-white px-2 w-14 rounded-lg py-2 m-auto mt-4' onClick={joinRoom}>Join</button>
                </div>
            ) : (
                <div className='bg-slate-400 w-5/12 h-96 m-auto mt-20 flex flex-col items-center'>
                    <h1>Room: {room}</h1>
                    <div>
                        {messagesList.map((m, index) => {
                            return (
                                <h1 key={index}>{m.message} </h1>
                            )
                        })}
                    </div>
                    <div>
                        <input type="text" placeholder='chat...' className='w-64 py-2 m-auto mt-4 mr-3' value={currentMessage} onChange={(e) => setCurrentMessage(e.target.value)} />
                        <button className='bg-lime-500 text-white px-2 w-14 rounded-lg py-2 m-auto mt-20' onClick={sendMessage}>Send</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Chat
