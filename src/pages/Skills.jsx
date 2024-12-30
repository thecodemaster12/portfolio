import React from 'react'
import MuiCard from '../components/mui/MuiCard'
import Marquee from 'react-fast-marquee'
import skills from '../assets/js/skills'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaLaravel } from "react-icons/fa";



const Skills = () => {
  return (
    <>
        <section id="skills">
            <div className="min-h-screen">
                <div className="mb-8 text-center">
                    <h2 className='text-6xl text-secondary font-pally'>My Skills <div className="inline-block p-0">🧑‍💻</div></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                </div>
          

            </div>
        </section>
    </>
  )
}

export default Skills