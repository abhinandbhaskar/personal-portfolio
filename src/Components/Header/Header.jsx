import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div>
            <header className="h-[80px] w-full bg-gray-800 shadow-lg flex items-center justify-between px-6 md:px-16">
        <div className="text-2xl font-bold text-green-500">Portfolio</div>
        <nav className="flex space-x-6">
          <button className="relative text-gray-300 hover:text-green-500 font-medium px-2 py-1">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 hover:w-full"></span>
          </button>
          <button className="relative text-gray-300 hover:text-green-500 font-medium px-2 py-1">
            About Me
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 hover:w-full"></span>
          </button>
          <button className="relative text-gray-300 hover:text-green-500 font-medium px-2 py-1">
            Portfolio
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 hover:w-full"></span>
          </button>
          <button className="relative text-gray-300 hover:text-green-500 font-medium px-2 py-1">
            Skills
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 hover:w-full"></span>
          </button>
          <button className="relative text-gray-300 hover:text-green-500 font-medium px-2 py-1">
            Contact Me
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-green-500 transition-all duration-300 hover:w-full"></span>
          </button>
        </nav>
      </header>
    </div>
  )
}

export default Header
