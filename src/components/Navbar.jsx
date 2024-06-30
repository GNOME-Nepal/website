import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">GNOME NEPAL</Link>
        </div>

        <div className="space-x-4">
          <Link to="/" className='text-white hover:text-gray-400'>Home</Link>
          <Link to="/aboutus" className='text-white hover:text-gray-400'>About Us</Link>
          <Link to="/contributors" className='text-white hover:text-gray-400'>Contributors</Link>
          <Link to="/events" className='text-white hover:text-gray-400'>Events</Link>
          <Link to="/faq" className='text-white hover:text-gray-400'>FAQ</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar