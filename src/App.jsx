import { useState } from 'react';
import './index.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
//import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Explore from './components/Explore';
//import Hero from './components/Hero';
import Home from './components/Home';
//import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skill from './components/Skill';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <Routes>
        <Route path="/" element={<><Explore /><Footer/> </>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="/home" element={<><Navbar /><Home/><Projects/><Skill/><Footer/></>} />
        <Route path="/projects" element={<><Projects/></>} />
      </Routes>
    </>
  );
}

export default App;
