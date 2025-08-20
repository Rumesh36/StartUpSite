import React from 'react'

const Footer = () => {
  return (
     <footer className="bg-neutral-900 text-white py-8 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} SkillCraft. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-purple-400">LinkedIn</a>
          <a href="#" className="hover:text-purple-400">GitHub</a>
          <a href="#" className="hover:text-purple-400">Twitter</a>
        </div>
      </footer>
  )
}

export default Footer