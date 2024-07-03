import React from 'react'

const Resources = () => {
  return (
    <>
     <div className='w-[80%] h-[85%]  bg-white  py-3 px-7 fixed top-20 right-2 overflow-y-scroll '>

      <div className='flex justify-between'>
        <div><p className='font-bold text-slate-500'>All Resources</p></div>
        <div><button className='border border-blue-800 rounded py-1 px-5 text-sm text-blue-900 font-semibold  hover:bg-blue-950 hover:text-white focus:bg-blue-950 focus:text-white'> Add Resources</button></div>
      </div>

      <div className='w-[100%] h-[90%] flex justify-center items-center text-center'>
        <div>
      <p className='text-sm font-semibold text-slate-500'>No Resources Available</p>
      <p className='text-slate-500'><i class="fa-regular fa-file-lines"></i></p>
      </div>
      </div>
      </div> 
    </>
  )
}

export default Resources
