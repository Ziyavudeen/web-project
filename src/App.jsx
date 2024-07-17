import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import AboutPage from './Pages/AboutPage/AboutPage'
import CoursePage from './Pages/ProjectPage/CoursePage'
import ContactPage from './Pages/ContactPage/ContactPage'
import HeaderComp from './Component/HeaderComponent/HeaderComponent'

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComp/>
          <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/about' element={<AboutPage/>}></Route>
            <Route path='/Course/' element={<CoursePage/>}></Route>
            <Route path='/Contact' element={<ContactPage/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
