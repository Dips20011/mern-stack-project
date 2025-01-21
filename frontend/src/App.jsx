import React from 'react'
import Home from './components/Home'

import{ Route, Routes } from "react-router-dom"
import Courses from './Courses/Courses'
import Signup from './components/Signup'


function App() {
  return (
   <div>
   <>
   <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/course' element={<Courses/>}></Route>
          <Route path="/signup" element={<Signup/>} />
        </Routes>
        
      </div></>
  
   </div>
  )
}

export default App