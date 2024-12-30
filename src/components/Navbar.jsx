import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center px-3 py-6 top-0 sticky bg-transparent backdrop-blur-lg rounded-md shadow-lg z-50'>
        <div className="">
            <a href="#hero">
                <h2 className='text-4xl text-primary font-pally font-bold tracking-wider'>Shihab</h2>
            </a>
        </div>

        <ul className='hidden md:flex gap-4 text-secondary text-xl font-bold'>
            <li><a className='underline-animation hover:text-primary transition-all duration-300 ease-in-out' href="#hero">Home</a></li>
            <li><a className='underline-animation hover:text-primary transition-all duration-300 ease-in-out' href="#about">About</a></li>
            <li><a className='underline-animation hover:text-primary transition-all duration-300 ease-in-out' href="#skills">Skills</a></li>
            <li><a className='underline-animation hover:text-primary transition-all duration-300 ease-in-out' href="#projects">Projects</a></li>
            
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