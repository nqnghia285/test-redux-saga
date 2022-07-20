import { Routes, Route } from 'react-router-dom'
import Home from './features/home'
import Login from './features/login'

function App() {
   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/login' element={<Login />} />
      </Routes>
   )
}

export default App
