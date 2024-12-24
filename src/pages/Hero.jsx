import React from 'react'
import HeroBanner from '../assets/images/hero-banner.svg'

const Hero = () => {
  return (
    <>
        <div className="min-h-screen grid grid-cols-2 gap-4 place-content-center">
            <div className="flex justify-center flex-col">
                <h2 className='text-6xl font-pally'>Hi there <div className="animate-wave inline-block p-0">✋</div> I'm</h2>
                <h4 className='text-8xl font-bold text-primary font-satoshi'>Saifur Ramhan Shihab</h4>
                <h4 className='text-5xl text-secondary font-roboto'>I'm a Web Developer</h4>
                <p className='mt-8 text-lg '>Curious and motivated developer passionate about the world of web development.</p>
            </div>
            <div className="">
                <img className='animate-hero_banner' src={HeroBanner} alt="" />
            </div>
        </div>
    </>
  )
}

export default Hero