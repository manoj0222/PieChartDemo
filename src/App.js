

import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Error from './Components/Error'
import Main from './Components/Main'
import Navigation from './Components/Navigation'

export default function App() {
  return (
    <>
      <Navigation/>
     <Routes>    
        <Route path="/" element = { <Home/>} />
        <Route path="/" elemnt ={<Home/>}/>
        <Route path ="/main" element={<Main/>}/>
        <Route path='*' element={<Error/>}/>
     </Routes>
    </>
  )
}
