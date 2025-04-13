import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Nav from "./Components/Nav/NavBar"
import Home from "./Components/Home/Home"
import About from "./Components/AboutUs/About"
import Work from "./Components/Works/Work"
import Service from "./Components/Services/Service"
import Contact from "./Components/Contacts/Contact"

const App = () => {
  return (
    <>
    <Nav />
    <Home />
    <About />
    <Work />
    <Service />
    <Contact />
    </>
  )
}

export default App