import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Service from './components/Service.jsx';
import Contact from './components/contact.jsx';
import Newsletter from './components/newsletter.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/subscribe' element={<Newsletter/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>,
)
