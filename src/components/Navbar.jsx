import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-3 py-6 top-0 sticky bg-transparent backdrop-blur-lg rounded-md shadow-lg z-50'>
        <div className="text-2xl">
            <h2>Logo</h2>
        </div>

        <ul className='hidden md:flex gap-4 '>
            <li><a className='text-lg' href="#hero">Home</a></li>
            <li><a className='text-lg' href="#about">About</a></li>
            <li><a className='text-lg' href="#skills">Skills</a></li>
            <li><a className='text-lg' href="#projects">Projects</a></li>
        </ul>

        <div className="">
            <button>Button</button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden block">
            Mobile Menu
        </div>
    </nav>
  )
}

export default Navbar