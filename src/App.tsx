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
          <Route path="Portfolio/" element={<Home />} />
          <Route path="Portfolio/about" element={<AboutMe />} />
          <Route path="Portfolio/contact" element={<ContactMe />} />
          <Route path="Portfolio/work" element={<Work />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
