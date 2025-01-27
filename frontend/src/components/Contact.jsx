import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import Contactus from './Contactus'


function Contact() {
  return (
    <>
    <Navbar></Navbar>
<div className='min-h-screen'><Contactus/></div>
    
    <Footer></Footer></>
  )
}

export default Contact