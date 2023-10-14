import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
