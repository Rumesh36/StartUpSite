import React from 'react'
import AboutCard from '../components/AboutCard'
import Companypic from '../assets/img/Companypic.webp'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <>
    <div className="pt-20 bg-gradient-to-br from-blue-700 to-purple-500 text-white  pb-35 font-serif">
      {/* text */}
      <div className='mt-10 ml-5 md:w-[65%] '>
        <h1 className='text-4xl font-extrabold md:text-5xl'>About Us</h1>
        <p className='text-sm mt-5 md:text-lg font-semibold text-gray-300'>At SkillCraft, we build innovative digital solutions with expertise in frontend, backend, DevOps, and UI/UX design. We create seamless, scalable, and engaging products that help your business grow and succeed.</p>
      </div>
    </div>
    
    <div className='flex justify-center pb-10 -mt-20'>
      <AboutCard
         title="Who We Are"
         description={"SkillCraft is a forward-thinking technology company dedicated to delivering innovative digital solutions. We specialize in creating scalable software, intuitive user experiences, and reliable systems that empower businesses to grow. Our team combines creativity, technical expertise, and strategic thinking to turn ideas into impactful products that make a difference."}
         img={Companypic}
      />
    </div>
     <div className=" bg-gradient-to-br from-gray-600 to-black text-white font-serif font-extrabold pb-15">
          <h1 className="text-center text-4xl pt-5">Contact Us</h1>
          <div className="flex items-center justify-center pt-5">
             <Link to='/contact'>
             <button className="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black">About Us</button>
             </Link>
          </div>
        </div>
    
    </>
  )
}

export default About