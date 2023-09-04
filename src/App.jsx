import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


import Footer from "./components/common/Footer"
import Header from "./components/common/Header"

import Home from "./components/Home"
import Characters from "./components/characters/characters"

import { useLocation } from "react-router-dom"

import "./App.css"

function App() {



  return (
    <>
          <main>
            <Header/>
            <Routes>
              <Route path="/characters" element={<Characters/>}/>
              <Route path="/regions" element={<Home path="regions/index"/>}/>
              <Route path="/" element={<Home path={undefined}/>}/>
              <Route path={`${useLocation().pathname}`} element={<Home path={location.pathname}/>}/>
            </Routes>
            <Footer/>
          </main>
    </>
  )

}

export default App
