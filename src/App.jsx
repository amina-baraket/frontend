import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Listarticles from './components/articles/Listarticles'
import Listcategorie from './components/categories/Listcategorie'
import Listscategorie from './components/scategories/Listscategorie'
import Menu from './components/Menu'

function App() {

  return (
    <>
    <h1>Bienvenue dans notre site</h1>
    <Router>
      <Menu/>
      <Routes>
        <Route path="/articles" element={<Listarticles/>}/>
        <Route path="/categories" element={<Listcategorie/>}/>
        <Route path="/scategories" element={<Listscategorie/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
