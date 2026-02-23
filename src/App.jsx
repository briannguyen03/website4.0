import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { MatrixProvider } from './context/MatrixContext'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Projects from './components/Pages/Projects'
import Contact from './components/Pages/Contact'
import MatrixBackground from './components/UI/MatrixBackground'
import './styles/global.css'

function App() {
  return (
    <ThemeProvider>
      <MatrixProvider>
        <Router basename="/website4.0">
          <div className="min-h-screen flex flex-col bg-primary relative">
            <MatrixBackground />
            <div className="relative z-10">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </div>
        </Router>
      </MatrixProvider>
    </ThemeProvider>
  )
}

export default App