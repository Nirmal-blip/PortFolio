import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaEnvelope, FaBars, FaTimes, FaDollarSign, FaSignInAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#2A1A40] backdrop-blur-md border-b-2 border-white text-white md:p-4 sm:py-2 fixed w-full top-0 left-0 z-50">
      <div className="container  flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex items-center group">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ffff] via-[#ffff] to-[#5f5e5e] rounded-lg opacity-25 group-hover:opacity-50 blur transition duration-300" />
            <img
              src="/logo.jpeg"
              alt="logo"
              className="relative h-12 mr-3 hover:opacity-90 transition-opacity rounded-lg"
            />
          </div>
          <h1 className="font-bold m-x-auto text-2xl bg-gradient-to-r from-[#ffff] via-[#ffff] to-[#5f5e5e] bg-clip-text text-transparent">
            NIRMAL-JOSHI
          </h1>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-2 items-center text-base">
          {[ 
            { href: '/', label: 'Explore', icon: <FaHome className="h-5 w-5" /> },
            { href: '#', label: 'Contact Us', icon: <FaEnvelope className="h-5 w-5" /> },
           
          ].map((link, idx) => (
            <li key={idx} className="group relative">
              <Link
                to={link.href}
                className="flex items-center text-white/80 font-medium py-2 px-3 rounded-lg hover:bg-white/5 hover:text-gradient-to-r from-[#ffff] via-[#ffff] to-[#5f5e5e] transition-all duration-300"
              >
                <span className="mr-2 group-hover:scale-110 transition-transform">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gradient-to-r from-[#2c2b2b] via-[#ffff] to-[#5f5e5e] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-white hover:bg-white/10 p-2 rounded-lg transition-colors border border-white/20"
          >
            {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 mt-4 bg-black/50 backdrop-blur-xl rounded-xl p-4 border border-white/10">
            {[ 
              { href: '#', label: 'Home' },
          
              { href: '#', label: 'Contact Us' },
              
            ].map((link, idx) => (
              <li key={idx} className="group relative w-full">
                <Link
                  to={link.href}
                  className="block w-full text-white/80 font-medium py-3 px-6 rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  {link.label}
                </Link>
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-0.5 w-3/4 bg-gradient-to-r from-[#ffff] via-[#ffff] to-[#5f5e5e] scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
