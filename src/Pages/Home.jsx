import React from 'react'
import FeatureCard from '../components/FeatureCard'
import ProjectCard from '../components/ProjectCard'
import project1 from '../assets/img/project1.webp'
import project2 from '../assets/img/project2.webp'
import { Rocket, ShieldCheck, Zap } from "lucide-react"; // for feature icons
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
      {/* 🌟 Hero Section */}
      <div className='pt-20 bg-gradient-to-br from-blue-700 to-purple-500 text-white font-serif pb-10'>
        <div>
          <div className='text-left text-3xl ml-5 sm:w-[65%] sm:ml-13 md:text-5xl font-bold'>
            <h1>
              We build powerful apps that turn your business dreams into reality
              and shape the future of your success 
            </h1>
          </div>
          <div className='text-md text-gray-200 text-left ml-6 mt-5 sm:w-[65%] sm:ml-13 font-semibold'>
            <p>
              We specialize in building custom, future-ready apps that bring
              your business ideas to life. From concept to launch.
            </p>
          </div>
        </div>
        <div className='mt-8 ml-10 lg:ml-13 flex gap-6'>
          <Link to="/service">
          <button className='bg-gradient-to-r from-purple-600 to-blue-600 font-extrabold font-sans border-purple-600 border px-6 py-3 rounded-3xl hover:border-white'>
            Get Started
          </button>
          </Link>
          <Link to="/contact">
          <button className='border-white border px-6 py-3 rounded-3xl font-extrabold font-sans hover:bg-white hover:text-purple-700'>
            Contact Us
          </button>
          </Link>
        </div>
      </div>

      {/* ⚡ Features Section */}
      <div id="features" className='bg-neutral-100 pt-10'>
        <h1 className='text-black text-2xl font-extrabold text-center mb-5'>
          Our Features
        </h1>
        <div className='flex flex-col gap-5 items-center md:flex-row lg:justify-center'>
          <FeatureCard
            logo={<Zap size={40} className="text-white" />}
            title="Innovation"
            description="We bring fresh ideas and creative solutions to every project, ensuring your apps stand out with modern design and cutting-edge technology."
          />
          <FeatureCard
            logo={<Rocket size={40} className="text-white" />}
            title="Speed"
            description="From concept to launch, we deliver fast and efficient development without compromising on quality, so your business gets ahead quicker."
          />
          <FeatureCard
            logo={<ShieldCheck size={40} className="text-white" />}
            title="Reliable"
            description="Our apps are built to be secure, scalable, and dependable — giving you peace of mind and a strong foundation for future growth."
          />
        </div>

        {/* 🖼 Projects Section */}
        <h1 className='text-black text-2xl font-extrabold text-center mt-10'>
          Our Work
        </h1>
        <div className='bg-white flex flex-col gap-7 items-center md:flex-row lg:justify-center mt-10 pb-10'>
          <ProjectCard img={project1} link="https://cinemax-beryl.vercel.app/" />
          <ProjectCard img={project2} link="https://skill-scape-bay.vercel.app/" />
          <ProjectCard img={project1} link="https://cinemax-beryl.vercel.app/" />
        </div>
      </div>

      <div className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">
          Ready to build your dream app?
        </h2>
        <p className="mb-8 text-lg">
          Let’s bring your business ideas to life with powerful digital solutions.
        </p>
        <button className="px-8 py-3 bg-white text-purple-700 font-bold rounded-3xl shadow-md hover:scale-105 transition">
          Contact Us
        </button>
      </div>


      {/* 🦶 Footer */}
     <Footer/>
    </>
  )
}

export default Home
