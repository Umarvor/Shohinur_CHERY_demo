import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
function Modal() {
  return (
    <div>
        <header><Navbar/></header>
        <main><Outlet/></main>
        <footer><Footer/></footer>
    </div>
  )
}

export default Modal