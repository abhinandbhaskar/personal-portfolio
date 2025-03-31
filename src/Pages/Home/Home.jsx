import React from 'react'
import "./Home.css"
import profile from "../../assets/profile.jpg"
const Home = () => {
  return (
    <div className="h-screen w-screen bg-gray-900 text-gray-200">
      <main className='flex flex-col md:flex-row items-center justify-center h-full px-6 md:px-20 space-y-6 md:space-x-10'>
        <div className='md:w-1/2 text-center md:text-left'>
         <h3 className='text-lg text-green-500 mb-2'>Hello, I'm</h3>
         <h1 className='text-4xl md:text-6xl font-bold mb-4'>Abhinand Bhaskar</h1>
         <h2 className='text-2xl md:text-3xl font-medium text-gray-400 mb-6'>Full-Stack Developer</h2>
          <p className='text-gray-400 leading-relaxed'>
          I am passionate about building modern and efficient web applications.
            With expertise in frontend and backend technologies, I strive to
            deliver elegant and user-friendly solutions. Let’s create something
            amazing together.
          </p>
          <div className="flex flex-row items-center m-4">
<button className="bg-green-500 px-3 py-2 rounded-xl m-2">Download CV</button>
           <div className="flex gap-2">
           <div className="h-8 w-8 bg-gray-800 flex justify-center items-center rounded-full border-2 border-blue-100 hover:bg-gray-600"><i class="fa-brands fa-facebook"></i></div>
           <div  className="h-8 w-8 bg-gray-800 flex justify-center items-center rounded-full border-2 border-blue-100 hover:bg-gray-600"><i class="fa-brands fa-twitter"></i></div>
           <div  className="h-8 w-8 bg-gray-800 flex justify-center items-center rounded-full border-2 border-blue-100 hover:bg-gray-600"><i class="fa-brands fa-instagram"></i></div>
           <div  className="h-8 w-8 bg-gray-800 flex justify-center items-center rounded-full border-2 border-blue-100 hover:bg-gray-600"><i class="fa-brands fa-linkedin-in"></i></div>
          </div>
</div>
        </div>

      <div className='md:w-1/2 flex justify-center items-center'>
        <div className='h-[250px] w-[250px] md:h-[300px] md:w-[300px] rounded-full bg-gray-800 shadow-xl flex items-center justify-center'>
          <img src={profile} alt="Profile" className='h-[230px] w-[230px] md:h-[280px] md:w-[280px] rounded-full object-cover border-4 border-green-500'/>
          
        </div>
      </div>

      </main>
    </div>
  )
}

export default Home
