import React from 'react'

const AboutCard = ({ img, title, description }) => {
  return (
    <div className="bg-white shadow-lg border border-gray-200 max-md:w-[350px] md:max-w-[450px] rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300">
   
      <div className="flex items-center gap-4 mb-4">
        <h1 className="text-gray-900 font-bold text-2xl">{title}</h1>
      </div>
      <div className="w-full flex items-center justify-center  font-bold text-xl rounded-xl">
          <img 
          className='rounded-xl mb-5'
          src={img}  />
        </div>
      <p className="text-gray-600 text-base leading-relaxed">
        {description}
      </p>
      
    </div>
  )
}

export default AboutCard
