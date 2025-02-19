import React from 'react'
import HeroBanner from '../assets/images/hero-banner.svg'
import { motion, useAnimation } from 'framer-motion';
import { useScroll, useTransform } from 'framer-motion';


const Hero = () => {
  
      // Control animations
      const controlsLeft = useAnimation();
      const controlsRight = useAnimation();
  
      // Use scroll to determine the scroll position
      const { scrollY } = useScroll();
      
      // Transform the scroll position to control the animations
      const xLeft = useTransform(scrollY, [0, 700], [0, -500]); // Move left element back
      const xRight = useTransform(scrollY, [0, 700], [0, 500]); // Move right element back
  
      // Start animations on mount
      React.useEffect(() => {
          controlsLeft.start({ opacity: 1, x: 0 });
          controlsRight.start({ opacity: 1, x: 0 });
      }, [controlsLeft, controlsRight]);
  
  return (
    <>
      <section>
        <div className="min-h-screen grid md:grid-cols-2 gap-5 md:gap-0 lg:gap-4 place-content-center place-items-center p-6 overflow-hidden">

        <motion.div
                className="text-4xl font-bold"
                initial={{ opacity: 0, x: -200 }} // Start from the left
                animate={controlsLeft}
                style={{ x: xLeft }} // Bind scroll position to x
                transition={{ duration: 0.5 }}
            >
            <div className=" flex justify-center text-center md:text-left flex-col">
                <h2 className='text-3xl md:text-5xl xl:text-6xl text-secondary font-pally'>Hi there <div className="animate-wave inline-block p-0">✋</div> I'm</h2>
                <h4 className='text-4xl md:text-6xl xl:text-8xl font-bold text-primary font-satoshi mt-3'>Saifur Ramhan Shihab</h4>
                <h4 className='text-2xl md:text-4xl xl:text-5xl text-secondary font-roboto mt-3'>I'm a Web Developer</h4>
                <p className='text-secondary mt-4 text-sm md:text-lg xl:text-xl'>Curious and motivated developer passionate about the world of web development.</p>
                <div className=" mt-2 flex gap-2 justify-center items-center">
                  <a href="https://www.facebook.com/saifurrahman.shihab.5/" target='_blank' className='p-2 shadow-xl drop-shadow-xl rounded-md bg-dark hover:scale-110'>
                    {/* <i className='fa fa-facebook text-xl md:text-4xl xl:text-5xl text-white'></i> */}
                    {/* <i class="fa-brands fa-square-facebook text-xl md:text-4xl xl:text-5xl text-white"></i> */}
                    <i class="fa-brands fa-facebook text-xl md:text-4xl xl:text-5xl text-white"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/saifur-rahman-shihab/" target='_blank' className='p-2 shadow-xl drop-shadow-xl rounded-md bg-dark hover:scale-110'>
                    <i className='fa fa-linkedin text-xl md:text-4xl xl:text-5xl text-white'></i>
                  </a>
                  <a href="https://github.com/thecodemaster12" target='_blank' className='p-2 shadow-xl drop-shadow-xl rounded-md bg-dark hover:scale-110'>
                    <i className='fa fa-github text-xl md:text-4xl xl:text-5xl text-white'></i>
                  </a>
                </div>
            </div>
            </motion.div>

            <motion.div
                className="text-4xl font-bold"
                initial={{ opacity: 0, x: 200 }} // Start from the right
                animate={controlsRight}
                style={{ x: xRight }} // Bind scroll position to x
                transition={{ duration: 0.5 }}
            >
              <div className="">
                  <img className='h-80 md:h-full' src={HeroBanner} alt="" />
              </div>
            </motion.div>
        </div>
      </section>
    </>
  )
}

export default Hero