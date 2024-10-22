import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped} from "react-typed";
import pic from "../../public/rajan.jpg"



const Home = () => {
  return (
    <>  
    <div
    name="Home"
     className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      {/* {left right both section} */}
      <div className='flex flex-col md:flex-row'>

        {/* {left section} */}
      <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
      <span>Welcome In My Feed</span>
      <div className='flex space-x-1 text-2xl md:text-4xl'>
      <h1>Hello, I'm a </h1>
      {/* <span className='text-red-700 font-bold'>Devloper</span> */}
      <ReactTyped
          className='text-red-700 font-bold'
          strings={["Devloper", "Programmer", "Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
      </div>
      <br />

      <p className='text-sm md:text-md text-justify'>
      As a dedicated MERN stack developer, I create smooth web experiences using MongoDB, Express.js, React, and Node.js. I turn ideas into user-friendly, scalable web applications. My focus is on delivering high-quality, responsive solutions that help businesses grow. With a blend of creativity and technical skills, I build modern web apps that perform well and are easy to use. I ensure each project is robust and meets unique needs from start to finish.
      </p>
      <br />
             {/* {social media icon} */}
     <div className='flex flex-col items-center md:flex-row  justify-between space-y-6 md:space-y-0'>
         <div className='space-y-2'>
        <h1 className='font-bold'>Available on</h1>
        <ul className='flex space-x-5'>
        <li>
          <a href="https://www.facebook.com/" target='blank'>
         <FaSquareFacebook className='text-2xl cursor-pointer'/>
         </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/feed/" target='blank'>
        <FaLinkedin className='text-2xl cursor-pointer'/>
        </a>
        </li>
       <li>
        <a href="https://www.instagram.com/" target='blank'>
       <FaSquareInstagram className='text-2xl cursor-pointer'/>
       </a>
       </li>
        <li>
          <a href="https://github.com/session" target='blank'>
        <FaGithub className='text-2xl cursor-pointer'/>
        </a>
        </li>
        </ul>
      </div>
     

      {/* {skills section} */}
       <div className='space-y-2'>
       <h1 className='font-bold'>Currently Working On</h1>
        <div className='flex space-x-5'>
        <DiMongodb className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
        <SiExpress className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
        <FaReact className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
        <FaNodeJs className='text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
        </div>
      </div>
    </div>

     </div>
      {/* {right section} */}
      <div className='md:w-1/2 ml-48 mt-20 order-1'>
      <img src={pic} className='rounded-full md:w-[450px] md:h-[450px]' alt="" />
      </div>
      </div>

      </div>
  
      <hr />
    </>
  )
}

export default Home
