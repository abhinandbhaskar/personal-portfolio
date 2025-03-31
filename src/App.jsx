import React from 'react'
import "./App.css"
import Home from './Pages/Home/Home'
import Header from './Components/Header/Header'
import AboutMe from './Pages/AboutMe/AboutMe'
import Technologies from './Components/Technologies/Technologies'
import ContactMe from './Pages/ContactMe/ContactMe'
const App = () => {
  return (
    <div>
    <Header/>
    <Home/>
    <AboutMe/>
    <Technologies/>
    <ContactMe/>
    </div>
  )
}

export default App
