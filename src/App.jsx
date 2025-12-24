import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddForm from './components/Addform'
import Edit from './components/Edit'
import List from './components/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/list" element={<List />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/add" element={<AddForm/>} />
        </Routes>
      </BrowserRouter>


      </>
  )
}

export default App
