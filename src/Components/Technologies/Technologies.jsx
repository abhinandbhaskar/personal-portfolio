import React from 'react'
import { SiReact, SiDjango, SiJavascript, SiTailwindcss, SiFirebase, SiPostgresql } from "react-icons/si";
const Technologies = () => {
  return (
    <div className='bg-gray-800 text-gray-200 py-12 px-6 md:px-20'>

        <h2 className='text-3xl md:text-4xl font-bold text-center mb-8'>Technologies</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-items-center'>

            <button className='flex flex-col items-center justify-center bg-gray-700 hover:bg-gray-600 p-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400'>
            <SiReact className='text-4xl text-blue-400 mb-2'/>
                <span className='text-sm font-medium'>React</span>
            </button>

            <button className='flex flex-col items-center justify-center bg-gray-700 hover:bg-gray-600 p-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400'>
            <SiDjango className='text-4xl text-blue-400 mb-2'/>
                <span className='text-sm font-medium'>React</span>
            </button>

            <button className='flex flex-col items-center justify-center bg-gray-700 hover:bg-gray-600 p-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400'>
            <SiJavascript className='text-4xl text-blue-400 mb-2'/>
                <span className='text-sm font-medium'>React</span>
            </button>

            <button className='flex flex-col items-center justify-center bg-gray-700 hover:bg-gray-600 p-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400'>
            <SiTailwindcss className='text-4xl text-blue-400 mb-2'/>
                <span className='text-sm font-medium'>React</span>
            </button>

            <button className='flex flex-col items-center justify-center bg-gray-700 hover:bg-gray-600 p-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400'>
            <SiFirebase className='text-4xl text-blue-400 mb-2'/>
                <span className='text-sm font-medium'>React</span>
            </button>

            <button className='flex flex-col items-center justify-center bg-gray-700 hover:bg-gray-600 p-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400'>
            <SiPostgresql className='text-4xl text-blue-400 mb-2'/>
                <span className='text-sm font-medium'>React</span>
            </button>

        </div>
      
    </div>
  )
}

export default Technologies
