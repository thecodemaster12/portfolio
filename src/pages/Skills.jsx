import React from 'react'
import MuiCard from '../components/mui/MuiCard'
import Marquee from 'react-fast-marquee'

const Skills = () => {
  return (
    <>
        <section id="skills">
            <div className="min-h-screen flex flex-col justify-center items-center">
                <div className="col-span-2 mb-8">
                    <h2 className='text-6xl text-secondary font-pally'>My Skills <div className="inline-block p-0">🧑‍💻</div></h2>
                </div>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <MuiCard title="HTML" />
                    <MuiCard title="HTML" />
                    <MuiCard title="HTML" />
                    <MuiCard title="HTML" />
                    <MuiCard title="HTML" />
                    <MuiCard title="HTML" />
                    <MuiCard title="HTML" />
                    <MuiCard title="HTML" />
                    <MuiCard title="HTML" />
                    <MuiCard title="HTML" />
                    </div> */}

                    <MuiCard title="HTML" />

            </div>
        </section>
    </>
  )
}

export default Skills