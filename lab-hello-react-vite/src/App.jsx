import { useState } from 'react'
import viteLogo from '/vite.svg'
import "./App.css"
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx"
import Button from "./components/Button.jsx";
import Gallery from "./components/Gallery.jsx";


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Header/>

      <Button/>


    <Gallery/>

    </div>
  )
}

export default App
