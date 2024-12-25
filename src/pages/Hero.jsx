import React from 'react'
import HeroBanner from '../assets/images/hero-banner.svg'

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="min-h-screen grid md:grid-cols-2 gap-4 place-content-center place-items-center">

            <div className="flex justify-center flex-col">
                <h2 className='text-4xl md:text-6xl text-secondary font-pally'>Hi there <div className="animate-wave inline-block p-0">✋</div> I'm</h2>
                <h4 className='text-6xl md:text-8xl font-bold text-primary font-satoshi'>Saifur Ramhan Shihab</h4>
                <h4 className='text-3xl md:text-5xl text-secondary font-roboto'>I'm a Web Developer</h4>
                <p className='text-secondary mt-8 md:text-lg '>Curious and motivated developer passionate about the world of web development.</p>
            </div>

            <div className="hidden md:block">
                <img className='animate-' src={HeroBanner} alt="" />
            </div>
        </div>
      </section>
    </>
  )
}

export default Hero