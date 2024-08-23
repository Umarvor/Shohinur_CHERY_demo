import React from 'react'
import './App.css'
import Slayder1 from './Slayder1/Slayder1'
import Navbar from './Navbar/Navbar'
import Slayder2 from '../src/Slayder2/Slayder2'
import Rasm1 from './Rang1/Rang1'
import Slayder3 from './Slayder3/Slayder3'
import Footer from './Footer/Footer'
import Page4 from './Page4/Page4'
import Vidio from './Vidio/Vidio'
import Page5 from './Page5/Page5'
function App() {
  return (
    <>
      <div className='Container'>
        <Navbar />
        <Slayder1 />
        <div className='Container2'>
        
        <Slayder2 />
        <Rasm1 />
        
        </div>
        <Slayder3/>
        <Page4/>
        <Vidio/>
        <Page5/>
        <Footer />
      </div>
    </>
  )
}

export default App