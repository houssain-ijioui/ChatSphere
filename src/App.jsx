import './App.css';
import { Routes, Route } from 'react-router-dom';
import Join from './Pages/Join';
import Main from './Pages/Main';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/chat' element={<Join />} />
    </Routes>
  )
}

export default App