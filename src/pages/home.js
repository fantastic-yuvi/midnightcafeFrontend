import React, { useRef, useEffect } from "react";
import intro from '../images/heropage.mp4';
import img from '../images/bgimage.png';
import smallbg1 from '../images/bg3.png';
import smallbg2 from '../images/bg2.png';
import smallbg3 from '../images/burgerbg.png';
import smallbg4 from '../images/fastbg.png';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
export const Home = () => {
  const vidRef=useRef();
  useEffect(() => { vidRef.current.play(); },[]);
  return (
    <div >
      <div className="flex flex-col items-center justify-center w-full h-screen">
      <video
        ref={vidRef}
        src={intro}
        autoPlay
        loop
        muted
        className="object-cover h-full w-full absolute -z-10"
      />
      <h1 className="text-7xl ">Midnight Cafe</h1>
      <button className="px-20 mt-8 py-2  border-4 border-black rounded-full hover:bg-black/40 hover:text-white">Get Started</button>
      </div>

      <div className="flex flex-row h-screen w-full">
        <div className="flex flex-col justify-center">
          <h1 className="text-7xl text-red-600 font-[Raleway] px-8">Its not just food</h1>
          <h1 className="text-7xl text-black  font-[Raleway] px-8 " >its an experience</h1>
          <div className="flex flex-row space-x-4 justify-start px-12">
            <button className="bg-red-600 px-10 mt-6 py-2 rounded-full  text-black hover:scale-105 duration-300 hover:bg-black hover:text-white ">View Menu</button>
            <button className="bg-black px-10 mt-6 py-2 rounded-full text-white hover:scale-105 duration-300 hover:bg-red-500 hover:text-black">Book Table</button>
            
          </div>
          <div className="flex flex-row space-x-4 py-8 px-12">
              <img src={smallbg1} className="w-72 h-72 " />
              <img src={smallbg2} className="w-72 h-72 " />
              
            </div>  
         
        </div>
        <div className="w-3/5">
          <img src={img}  className="h-full w-full object-cover object-center "/>
        </div>

      </div>


      <div className="bg-cover bg-center bg-fixed bgfront h-screen">
        <div className="w-1/2 h-screen ">
          <div className="flex flex-col  justify-center ">
            <h1 className="text-black font-[Lobster] text-7xl px-8 mt-40"> Don't Starve</h1>
            <h1 className="text-black font-[Lobster] text-7xl px-8">Just Order</h1>
            <p className="text-sm px-8 mt-2">Just Some Random test we wil need to enter ther correctjdf and some other text here ythis is only  testing putpke i think it is enough for noe</p>
            <div className="flex flex-row space-x-4 justify-start px-12">
              <button className="border-2 border-black px-10 mt-6 py-2 rounded-full  text-black hover:scale-105 duration-300 hover:bg-black hover:text-white ">Order Now</button>
              <button className="bg-black px-10 mt-6 py-2 rounded-full text-white hover:scale-105 duration-300  hover:bg-transparent hover:border-2 border-black">Top Deals</button>

            </div>
            <div className="flex flex-row space-x-4">
            <img src={smallbg3} className="w-96 h-96 " />
            </div>
            
          </div>
        </div>
        
      </div>

    </div>
  )
}
