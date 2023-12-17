import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
export const Login = () => {
  const navigate= useNavigate();
  const [username,setUsername]=useState("");
  const [password,setPassword]= useState("");
  const handleSubmit=async(event)=>{
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/authLogin",{
        username,password
      });
      if(response.data.message=="300") return alert("User Not Found");
      if(response.data.message=="301") return alert("Password Not Correct");
      alert("Successfully Logged In");
      navigate("/");
      
    } catch (error) {
      alert("Error");
    }
  };

  return (
    <div className='bg-black/50'>
      <div className='container mx-auto flex items-center h-screen'>
        <div className='mx-auto flex h-[550px] w-[1140px]  overflow-hidden shadow-black shadow-2xl rounded-lg'>
          <div className='flex flex-row h-full w-1/2 justify-center items-center bg-center bg-cover bg-no-repeat login'>
          
            <div className='flex justify-center space-x-4 items-end h-full mb-20 md:w-[75%] my-6'>
            <FaFacebookSquare  size={20} className='fill-white' />
            <FaInstagram size={20} className='fill-white'/>
            <FaTwitterSquare size={20} className='fill-white'/>
            <FaGithubSquare size={20} className='fill-white'/>
            <FaDribbbleSquare size={20} className='fill-white' />
            </div>
            </div>
          
          <div className='flex flex-row h-full w-1/2 justify-center bg-white'>
          <div className='flex flex-col '> 
              <h1 className='text-4xl py-16  text-center'>L O G I N</h1>
              <div className='flex flex-col py-6 space-y-10 place-items-center'>
                <input onChange={(event)=>{setUsername(event.target.value)}}  className=" w-96 p-2 text-center font-semibold bg-black rounded-full  text-white" placeholder='Username' value={username}/>
                <input onChange={(event)=>{setPassword(event.target.value)}} className=" w-96 p-2 text-center font-semibold bg-black  rounded-full text-white " placeholder='Password' value={password}/>
              </div>
              <p className='text-sm text-center '>By Clicking Signup you agree to our terms of use and Privacy Policy</p>
              <div className='flex justify-center w-full'>
              <button onClick={handleSubmit} className='hover:shadow-lg shadow-black hover:scale-105 duration-300 shadow-lg hover:shadow-rose-400 p-2 mt-8 bg-red-500 w-48 rounded-full text-xl font-semibold' >Login</button>
              </div>
              <div className='flex items-end mt-16 justify-end'>
              <span> If not Have a Account |  <Link to="http://localhost:3000/signup" className='text-cyan-600'> Create  here</Link></span>
              </div>
            </div>
           
      
          </div>
        </div>
      </div>
    </div>
  )
};
