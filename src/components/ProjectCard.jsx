import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ img, link, bgColor = "bg-white" }) => {
  return (
    <div className={`${bgColor} rounded-2xl shadow-md hover:shadow-xl transition duration-300 w-[350px] overflow-hidden`}>
      
      {/* Inner Content Div */}
      <div className="flex flex-col items-center p-4">
        
        {/* Image Container */}
        <div className="w-full h-52 rounded-xl overflow-hidden mb-4">
          <img
            src={img}
            alt="project"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Button */}
        <Link to={link}>
          <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 transition">
            View Project
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
