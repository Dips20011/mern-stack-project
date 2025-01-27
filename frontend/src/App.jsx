import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Home from "./home/home";
import About from "./components/About";
import Courses from "./Courses/Courses";
import Contactus from "./components/Contactus";
import Contact from "./components/Contact";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route
            path="/course"
            element={authUser ? <Courses/> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
         
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/Courses" element={<Courses/>}></Route>
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
