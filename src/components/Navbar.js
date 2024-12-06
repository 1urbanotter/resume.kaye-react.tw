import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary text-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="text-xl font-semibold">Gregory K. Azevedo</div>
        
        {/* Desktop Navbar */}
        <ul className="hidden md:flex space-x-8">
          <li><a href="#about" className="hover:text-secondary transition">About</a></li>
          <li><a href="#education" className="hover:text-secondary transition">Education</a></li>
          <li><a href="#work-experience" className="hover:text-secondary transition">Experience</a></li>
          <li><a href="#contact" className="hover:text-secondary transition">Contact</a></li>
        </ul>

        {/* Mobile Hamburger Menu */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary text-white p-4">
          <ul className="space-y-4">
            <li><a href="#about" className="hover:text-secondary">About</a></li>
            <li><a href="#education" className="hover:text-secondary">Education</a></li>
            <li><a href="#work-experience" className="hover:text-secondary">Experience</a></li>
            <li><a href="#contact" className="hover:text-secondary">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;