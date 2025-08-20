import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
     <footer className="bg-neutral-900 text-white py-8 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} SkillCraft. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <Link to="https://github.com/Rumesh36" target='_blank' className="hover:text-purple-400">Github</Link>
           <Link to="https://www.linkedin.com/in/gandham-rumesh-50b73a258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' className="hover:text-purple-400">LinkedIn</Link>
          <a href="#" className="hover:text-purple-400">Twitter</a>
        </div>
      </footer>
  )
}

export default Footer