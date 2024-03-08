import './App.css';
import { Routes, Route } from 'react-router-dom';
import Chat from './Pages/Chat';
import Main from './Pages/Main';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/chat' element={<Chat />} />
    </Routes>
  )
}

export default App