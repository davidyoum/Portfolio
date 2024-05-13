import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import ContactMe from './pages/ContactMe'
import Work from './pages/Work'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
