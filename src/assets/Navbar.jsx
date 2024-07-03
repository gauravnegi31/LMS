import React from 'react'
import img1 from "./logo.png"

const Navbar = ({toggle}) => {
  return (
    <>
      <div className=' w-full fixed top-0  left-0'> 
        <div className='flex bg-white items-center py-3 px-11 justify-between '>
            <div><img className='w-24' src={img1} alt="" /></div>
            <div className='flex items-center gap-6'>
            <div><i className="fa-solid fa-bell"></i></div>
            <div className='flex items-center gap-2 cursor-pointer ' onClick={toggle}>
            <div className='bg-blue-950 text-white px-2.5 py-1.5 rounded-full'><i className="fa-solid fa-g"></i></div>
            <div className='font-bold text-gray-700'>Hi, Gaurav <i className="fa-solid fa-angle-down"></i></div>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
