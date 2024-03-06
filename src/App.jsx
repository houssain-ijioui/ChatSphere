import './App.css';
import { Routes, Route } from 'react-router-dom';
import Chat from './Pages/Chat';
import Join from './Pages/Join';
import Main from './Pages/Main';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/join' element={<Join />} />
      <Route path='/chat' element={<Chat />} />
    </Routes>
  )
}

export default App