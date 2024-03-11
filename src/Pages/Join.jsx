import React, { useEffect, useState } from 'react';
import Input from "../components/Input.jsx";
import Button from '../components/Button.jsx'
import socketIo from "socket.io-client";
import Chat from "./Chat.jsx";

const socket = socketIo.connect('http://localhost:4000')

const Join = () => {
    const [ joined, setJoined ] = useState(false)
    const [ pseudoname, setPseudoname ] = useState('')
    const [ currentMessage, setCurrentMessage ] = useState('')
    const [ room, setRoom ] = useState('12')
    

    // const getMessages = async () => {
    //     const res = await fetch('http://localhost:4000/api/messages')
    //     const data = await res.json()
    //     setMessageList(data)
    // }



    const joinRoom = () => {
        if (pseudoname !== "") {
            const data = {pseudoname}
            setJoined(true)
            socket.emit('join_room', data)
            // getMessages()
        }
    }

    

    return (
        <>
            {!joined ? (
                <div className='flex flex-col m-auto shadow-2xl w-2/4 mt-40 py-10'>
                    <h2 className='m-auto font-light'>Enter You Pseudoname :</h2>
                    <input className='w-3/6 py-4 m-auto mt-4' type="text" placeholder="Pseudoname" value={pseudoname} onChange={(e) => setPseudoname(e.target.value)} />
                    <button className='bg-lime-500 text-white px-2 w-2/4 rounded-2xl py-2 m-auto mt-4' onClick={joinRoom}>Join</button>
                </div>
            ) : (
                <Chat pseudoname={pseudoname} joined={joined} socket={socket} />
            )}
        </>
    )
}

export default Join;
