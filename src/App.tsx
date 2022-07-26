import React from 'react'
import {BrowserRouter,Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Film from './pages/film/film'
import Home from './pages/home/Home'
 
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
 <Routes>
 <Route  path='/' element={<Home />} />
<Route path="/:id" element={<Film/>}/>
  </Routes>
    </BrowserRouter>
   
   
  )
}

export default App

