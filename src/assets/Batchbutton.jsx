import React from 'react'
import { NavLink } from 'react-router-dom'

const Batchbutton = () => {
  return (
    <>
      <div className='mt-9'>
        <NavLink to="Current">
          <button className='border border-blue-800 rounded py-1 px-5 text-sm hover:bg-blue-950 hover:text-white focus:bg-blue-950 focus:text-white'><i class="fa-regular fa-calendar"></i>  Current</button> &nbsp;
        </NavLink>

        <NavLink to="Upcoming">
          <button className='border border-blue-800 rounded py-1 px-5 text-sm hover:bg-blue-950 hover:text-white focus:bg-blue-950 focus:text-white'><i class="fa-regular fa-calendar-plus"></i>  Upcoming</button> &nbsp;
          </NavLink>

          <NavLink to="Completed">   
          <button className='border border-blue-800 rounded py-1 px-5 text-sm hover:bg-blue-950 hover:text-white focus:bg-blue-950 focus:text-white'><i class="fa-regular fa-calendar-check"></i>  Completed</button>
          </NavLink>

        </div>

    </>
  )
}

export default Batchbutton
