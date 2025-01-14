import React from 'react'
import Button from '@mui/material/Button';
import MuiMobileMenu from './mui/MuiMobileMenu';


const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-4 top-0 sticky bg-transparent backdrop-blur-lg rounded-md shadow-lg z-50'>
        <div className="">
            <a href="#top">
                <h2 className='text-4xl text-primary font-pally font-bold tracking-wider'>Shihab</h2>
            </a>
        </div>

        <ul className='hidden md:flex gap-4 text-secondary text-xl font-bold'>
            <li><a className='underline-animation hover:text-primary transition-all duration-300 ease-in-out' href="#top">Home</a></li>
            <li><a className='underline-animation hover:text-primary transition-all duration-300 ease-in-out' href="#about">About</a></li>
            <li><a className='underline-animation hover:text-primary transition-all duration-300 ease-in-out' href="#skills">Skills</a></li>
            <li><a className='underline-animation hover:text-primary transition-all duration-300 ease-in-out' href="#projects">Projects</a></li>
            <li><a className='underline-animation hover:text-primary transition-all duration-300 ease-in-out' href="#contact">Contact</a></li>
            
        </ul>

        <div className="hidden md:block">
            <a href="https://drive.google.com/file/d/1hBFS6GCW1Scz8FX65ibFRq1Em4Y_zkxg/view?usp=sharing" target="_blank" rel="noreferrer">
                <Button variant="contained" className='bg-primary text-white'> <i className="fa fa-eye"></i> &nbsp; View Resume</Button>
            </a>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden block">
            <MuiMobileMenu />
        </div>
    </nav>
  )
}

export default Navbar