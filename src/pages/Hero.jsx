import React from 'react'
import HeroBanner from '../assets/images/hero-banner.svg'

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="min-h-screen grid md:grid-cols-2 gap-16 md:gap-0 lg:gap-4 place-content-center place-items-center p-6">

            <div className=" flex justify-center text-center md:text-left flex-col">
                <h2 className='text-4xl md:text-5xl xl:text-6xl text-secondary font-pally'>Hi there <div className="animate-wave inline-block p-0">✋</div> I'm</h2>
                <h4 className='text-6xl md:text-6xl xl:text-8xl font-bold text-primary font-satoshi mt-4'>Saifur Ramhan Shihab</h4>
                <h4 className='text-3xl md:text-4xl xl:text-5xl text-secondary font-roboto mt-4'>I'm a Web Developer</h4>
                <p className='text-secondary mt-8 md:text-lg xl:text-xl'>Curious and motivated developer passionate about the world of web development.</p>
            </div>

            <div className="">
                <img className='h-80 md:h-full' src={HeroBanner} alt="" />
            </div>
        </div>
      </section>
    </>
  )
}

export default Hero