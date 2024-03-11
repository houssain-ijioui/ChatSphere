import React, { useEffect, useState } from 'react';
import Input from "../components/Input.jsx";
import Button from '../components/Button.jsx'
import socketIo from "socket.io-client";
import Chat from "./Chat.jsx";
import { ToastContainer } from 'react-toastify';

const socket = socketIo.connect('http://localhost:4000')

const Join = () => {
    const [ joined, setJoined ] = useState(false)
    const [ pseudoname, setPseudoname ] = useState('')
    

    const joinRoom = () => {
        if (pseudoname !== "") {
            const data = {pseudoname}
            setJoined(true)
            socket.emit('join_room', data)
        }
    }

    

    return (
        <>
            {!joined ? (
                <div className='flex flex-col m-auto shadow-2xl w-2/4 mt-40 py-10'>
                    <h2 className='m-auto font-semibold'>Enter You Pseudoname :</h2>
                    <input className='w-3/6 py-4 m-auto mt-4 pl-5 rounded-lg' type="text" placeholder="Pseudoname" value={pseudoname} onChange={(e) => setPseudoname(e.target.value)} />
                    <button className='bg-firstOrange text-white px-2 w-2/4 rounded-2xl py-2 m-auto mt-4 shadow-2xl' onClick={joinRoom}>Join</button>
                </div>
            ) : (
                <Chat pseudoname={pseudoname} joined={joined} socket={socket} />
            )}
            <ToastContainer />
        </>
    )
}

export default Join;
