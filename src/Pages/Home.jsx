import React from 'react'
import FeatureCard from '../components/FeatureCard'
import ProjectCard from '../components/ProjectCard'
import project1 from '../assets/img/project1.webp'
import project2 from '../assets/img/project2.webp'

const Home = () => {
  return (
    <>
    <div className=' pt-20   bg-gradient-to-b from-blue-700 to-purple-500 text-white font-serif pb-10' >
      <div>
      <div className='  text-left text-4xl ml-5  mt-15 sm:w-[65%]   sm:ml-13  md:text-5xl font-bold   '>
        <h1>We build powerful apps that turn your business dreams into reality and shape the future of your success</h1>
      </div>
      <div className='text-lg text-left ml-6  mt-5 sm:text-lg sm:mt-5 sm:w-[65%] sm:ml-13 font-semibold'>
        <p>We specialize in building custom, future-ready apps that bring your business ideas to life. From concept to launch, we create innovative digital solutions designed to help you grow and succeed</p>
      </div>
      </div>
      <div className='mt-8 ml-13 flex gap-6'>
        <button className='bg-gradient-to-r from-purple-600  to-blue-600 font-extrabold font-sans border-purple-600 border px-6 py-3 rounded-3xl hover:border-white'>Get Started</button>
        <button className=' border-white border px-6 py-3 rounded-3xl font-extrabold font-sans hover:bg-white hover:text-purple-700'>Our work</button>
      </div>
    </div>
    {/* features card */}
    <div className='bg-neutral-100 pt-10 '>
      <h1 className='text-black text-2xl font-extrabold ml-13 mb-5 mr-15 text-center'>Our Features</h1>
      <div className='flex flex-col gap-5 items-center  md:flex-row md:items-start lg:flex-row lg:justify-start lg:ml-13 xl:justify-center'>
        <FeatureCard
          logo="ghg"
          title="Innovation"
          description={"We bring fresh ideas and creative solutions to every project, ensuring your apps stand out with modern design and cutting-edge technology"}
        />
        <FeatureCard
          logo=""
          title="Speed"
          description={"From concept to launch, we deliver fast and efficient development without compromising on quality, so your business gets ahead quicker"}
        />
        <FeatureCard
          logo=""
          title="Reliable"
          description={"Our apps are built to be secure, scalable, and dependable — giving you peace of mind and a strong foundation for future growth"}
        />
      </div>
      {/* projecr cards */}
     <h1 className='text-black text-2xl font-extrabold ml-13 mt-5 mr-15 text-center'>Our Work</h1>
      <div className='bg-white flex flex-col gap-7 items-center  md:flex-row md:items-start lg:flex-row lg:justify-start lg:ml-13 xl:justify-center mt-10 pb-10'>
        <ProjectCard
          img={project1}
          link="https://cinemax-beryl.vercel.app/"
          
        />
        <ProjectCard
          img={project2}
          link="https://skill-scape-bay.vercel.app/"
        />
         <ProjectCard
          img={project1}
          link="https://cinemax-beryl.vercel.app/"
        />
      </div>
    </div>
    </>
  )
}

export default Home
