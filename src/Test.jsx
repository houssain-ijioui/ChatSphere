import { useEffect, useState } from "react";
import socketIo from "socket.io-client";
import Chat from "./components/Chat";

const socket = socketIo.connect('http://localhost:4000')


function App() {
  const [ pseudoname, setPseudoname ] = useState('');
  const [ room, setRoom ] = useState('');
  const [ joined, setJoined ] = useState(false)

  const joinRoom = () => {
    if (pseudoname !== "" && room !== "") {
      socket.emit('join_room', room)
      setJoined(true)
    }
  }


  return (
    <div className="App">
      {!joined ? (
        <>
          <h1 className="text-center">Chat App with React Node SocketIo</h1>
          <div className="flex flex-col mb-6">
            <input className="w-1/4 p-2 m-auto mt-4" type="text" placeholder="your pseudoname" onChange={(e) => setPseudoname(e.target.value)} />
            <input className="w-1/4 p-2 m-auto mt-4" type="text" placeholder="Room Id" onChange={(e) => setRoom(e.target.value)} />
            <button className="w-1/4 p-2 bg-slate-500 m-auto mt-4" onClick={joinRoom}>Join</button>
          </div>
        </>
      ) : (
        <Chat socket={socket} pseudoname={pseudoname} room={room} />
      )}
      
    </div>
  )
}

export default App
