import React from 'react'
import { NavLink } from 'react-router-dom'

const Leftbar = () => {
  return (
    <>
      <div className='flex-col p-1 bg-white  w-1/6 h-[85%] fixed top-20 left-4 ' >
      
      <NavLink to="/Module"><div className='text-left  rounded m-1  cursor-pointer p-2 hover:bg-blue-950 hover:text-white'><i className="fa-solid fa-server"></i>  Module </div></NavLink>
      
      <NavLink to="/Batch"><div className='text-left  rounded m-1  cursor-pointer p-2 hover:bg-blue-950 hover:text-white'><i className="fa-regular fa-address-card"></i>  Batch</div></NavLink>
      
      <NavLink to="/Testmodule">  <div className='text-left  rounded m-1  cursor-pointer p-2 hover:bg-blue-950 hover:text-white'><i className="fa-regular fa-paste"></i>  Test Module</div></NavLink>

      <NavLink to="/Resources">  <div className='text-left  rounded m-1  cursor-pointer p-2 hover:bg-blue-950 hover:text-white'> <i className="fa-regular fa-calendar"></i> Resources</div></NavLink>
      </div>
    </>
  )
}

export default Leftbar
