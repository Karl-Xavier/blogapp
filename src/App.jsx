import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Blog from './pages/Blog/Blog'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Error from './pages/Error/Error'

const App = () => {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="*" element={<Error/>} />
        </Routes>
        <footer style={{padding: "4%"}}>
          <p style={{fontWeight: "bold", textAlign: "center"}}>&copy; Copyright Emeka Bruno {new Date().getFullYear()}</p>
        </footer>
      </Router>
    </div>
  )
}

export default App