import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import ErrorPage from './Pages/ErrorPage'
import AppLayout from './Layouts/AppLayout'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Service from './Pages/Service'

const App = () => {
  return (
    <>
    <BrowserRouter>
          <Routes>
            
            <Route pat="*" element={<ErrorPage/>}/>

            <Route element={<AppLayout/>}>
            <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/service" element={<Service/>}/>
            </Route>
          </Routes>


   </BrowserRouter> 
   
    </>
  )
}

export default App