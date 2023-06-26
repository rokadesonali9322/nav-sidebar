import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Compoents/Navbar'
import Home from './Compoents/Home'
import Information from './Compoents/Information'
import Guide from './Compoents/Guide'
import Contact from './Compoents/Contact'

function App() {
  return (
    <BrowserRouter>
      <div id="content-area">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/information" element={<Information />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
