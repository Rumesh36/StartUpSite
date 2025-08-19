import React from 'react'

const FeatureCard = ({ logo, title, description }) => {
  return (
    <div className="bg-white shadow-lg border border-gray-200 w-[350px] rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300">
      {/* Logo + Title */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-xl rounded-xl">
          {logo}
        </div>
        <h1 className="text-gray-900 font-bold text-2xl">{title}</h1>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-base leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default FeatureCard
