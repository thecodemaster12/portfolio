import React from 'react'

const About = () => {
  return (
    <>
        <section id="about">
            <div className="min-h-screen grid place-items-center place-content-center gap-6 grid-cols-2">
                <div className="col-span-2 mb-8">
                    <h2 className='text-6xl text-secondary font-pally'>About Me <div className="inline-block p-0">🧑‍💻</div></h2>
                </div>

                <div className="">
                    <img className='rounded-md' src="https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>

                <div className="">
                    <div className="mt-12">
                        <h4 className='text-2xl text-primary font-roboto mb-2'>👋 Hi, I’m Saifur Rahman Shihab!</h4>
                        <p className='text-justify text-secondary pl-12'>A motivated Junior Web Developer with hands-on experience in PHP, Laravel, and modern frontend technologies. I specialize in crafting responsive, user-friendly web applications and have a proven track record of delivering scalable and efficient full-stack solutions.</p>
                    </div>
                    <div className="mt-12">
                        <h4 className='text-2xl text-primary font-roboto mb-2'>✨ What Drives Me</h4>
                        <p className='text-justify text-secondary pl-12'>I’m passionate about creating innovative digital experiences and continuously learning new technologies to stay ahead in the ever-evolving tech landscape.</p>
                    </div>
                    <div className="mt-12">
                        <h4 className='text-2xl text-primary font-roboto mb-2'>🌟 What I Bring to the Table</h4>
                        <ul className='text-secondary'>
                            <li className='pl-12'><i className=''></i>Expertise in HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS for building pixel-perfect designs.</li>
                            <li className='pl-12'><i className=''></i>Backend development skills with PHP and Laravel, ensuring robust and scalable applications.</li>
                            <li className='pl-12'><i className=''></i>Proficiency in tools like Git and Postman for efficient development workflows.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default About