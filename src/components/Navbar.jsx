import { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { SiSnapcraft } from "react-icons/si";
// import { SiCssdesignawards } from "react-icons/si";
const Navbar = () => {

  const [open,setOpen] = useState(false)
  
  const toggleMenu =()=>{
    setOpen(!open);
  }

  const close=()=>setOpen(false);


  const navlinks =[
    {label:"Home",path:"/"},
    {label:"About",path:"/about"},
    {label:"Services",path:"/service"},
     {label:"Contacts",path:"/contact"},
  ];

  return (
    <>
    
          <nav className=" bg-gradient-to-t from-blue-700 to-purple-500 fixed w-full z-50 shadow-2xl font-serif">
            <div className="flex text-2xl font-bold  justify-between items-center py-3">
              <div className=" ml-5 flex gap-2 items-center">
                <p className="text-white font-extrabold">{<SiSnapcraft size={30}/>}</p>
                <h1 className="font-extrabold lg:ml-25 lg:text-3xl text-white">  SkillCraft</h1>
              </div>
              <ul className="text-xl font-semibold flex mr-5 items-center gap-5 max-sm:hidden lg:mr-20 text-white">
                 {navlinks.map((link)=>(
                  <li
                  key={link.path}>
                  <Link
                     to={link.path}
                     className="  transition-colors duration-200"
                  >
                    {link.label}
                    </Link>
                  </li>
                 ))}
                 <Link to="/service">
                  <button className="bg-transparent border-1 px-3 py-1 rounded-xl hover:bg-white hover:text-purple-700 ">Get Started</button>
                  </Link>
              </ul>
              {/* hambar menu */}
              <div className="sm:hidden mr-5 text-white font-extrabold">
                 
              <button
              className="transition-all cursor-pointer"
               onClick={toggleMenu} aria-label="Toggle Menu">
                {open ? <IoClose size={32}/> : <CgMenuRightAlt size={32}/>}
              </button>
              </div>
            </div>
            {/* mobile menu */}
              <div className={`sm:hidden overflow-hidden transition-all ease-in-out duration-200 ${open ?"max-h-96" :"max-h-0 opacity-0"}`}>
                   <ul className="text-xl font-semibold flex  flex-col py-4  justify-center  items-center gap-5 text-white">
                   {navlinks.map((link)=>(
                      <li
                      onClick={close}
                       key={link.path}
                      className="hover:bg-white hover:text-black py-3 w-[50%] rounded-2xl  text-center">
                    <Link to={link.path}
                    className="hover:text-black transition-colors duration-200 ">
                    
                    {link.label}

                      </Link>
                      </li>

                   ))}
                   <Link to="/service">
                   <button className="bg-transparent border-1 border-white px-3 py-2 rounded-xl hover:bg-white hover:text-purple-700 ">Get Started</button>
                   </Link>
                   </ul>
              </div>
          </nav>

    </>
  )
}

export default Navbar