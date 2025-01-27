

import React from "react";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Aboutus from "./aboutus";

function About() {
  
  return (
    <>
        <Navbar></Navbar>
<div className='min-h-screen'><Aboutus></Aboutus></div>
    
    <Footer></Footer></>
   
  );
}

export default About;
