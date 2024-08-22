import React from 'react'
import './App.css'
import Slayder1 from './Slayder1/Slayder1'
import Navbar from './Navbar/Navbar'
import Slayder2 from '../src/Slayder2/Slayder2'
import Rasm1 from './Rang1/Rang1'
import Slayder3 from './Slayder3/Slayder3'
import Footer from './Footer/Footer'
function App() {
  return (
    <>
      <div className='Container'>
        <Navbar />
        <Slayder1 />
        <Slayder2 />
        <Rasm1 />
        <Slayder3/>
        <Footer />
      </div>
    </>
  )
}

export default App