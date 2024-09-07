import React from 'react'
import './App.css'
import Modal from '../src/Modal/Modal'
import Navbardom from './Navbardom/Navbardom'
import Rang1 from '../src/Rang1/Rang1'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Modal />}>
      <Route index element={<Navbardom />} />
      <Route path='*' element={<Rang1/>} />

    </Route>
  )
);
function App() {
  return (
    <>
      <div className='Container'>
        <RouterProvider router={routes} />


      </div>
    </>
  )
}

export default App