import React from "react";
import ServiceCards from "../components/ServiceCards";
import { Link } from "react-router-dom";


const Service = () => {
  return (
    <>
      <div className="pt-20 bg-gradient-to-br from-blue-700 to-purple-500 text-white  pb-35 font-serif">
        {/* highlited text */}
        <div className="mt-10 ml-5 md:w-[65%] ">
          <h1 className="text-4xl font-extrabold md:text-5xl">Our services</h1>
          <p className="text-sm mt-5 md:text-lg font-semibold text-gray-300">
            We specialize in modern web development, powerful frontend & backend
            solutions, seamless DevOps, and engaging UI/UX design — delivering
            tailored digital products that help your business grow
          </p>
        </div>
         </div>
        {/* service cards... */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 -mt-20 place-items-center max-w-5xl mx-auto px-4 py-5">
          <ServiceCards
            logo="💻"
            title="Web Development"
            description="Building responsive, scalable, and secure web apps with modern frameworks and best practices."
          />
          <ServiceCards
            logo="🎨"
            title="UI/UX Design"
            description="Crafting intuitive, user-friendly designs that deliver seamless digital experiences."
          />
          <ServiceCards
            logo="⚙️"
            title="Backend Development"
            description="Developing robust APIs and server-side solutions with Node.js, Express, and databases."
          />
          <ServiceCards
            logo="☁️"
            title="DevOps"
            description="Streamlining deployment, automation, and cloud infrastructure for high availability and performance."
          />
        </div>

        <div className=" bg-gradient-to-br from-gray-600 to-black text-white font-serif font-extrabold pb-15">
          <h1 className="text-center text-4xl pt-5">Know About Us</h1>
          <div className="flex items-center justify-center pt-5">
             <Link to='/about'>
             <button className="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black">About Us</button>
             </Link>
          </div>
        </div>
    
    </>
  );
};

export default Service;
