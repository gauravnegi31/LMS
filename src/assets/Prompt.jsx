import React from 'react'

const Prompt = () => {
  return (
    <div className='w-full z-10 absolute top-[68px] flex justify-end'>

      <div className=' bg-white border rounded-xl  px-4 py-9  '>
        <div className='border rounded-lg border-slate-200 shadow-sm px-20 py-6 text-center'>
          <div className='flex justify-center'>
        <div className='flex justify-center items-center bg-blue-950 w-14 h-14 rounded-full text-white text-2xl mt-[-70px]'>
          <i class="fa-solid fa-g"></i></div></div>
        <h2 className='text-blue-950 font-bold text-2xl '>gaurav negi</h2>
        <p className='text-sm text-slate-500 font-extralight'>gauravnegi000123@gmail.com</p>
        <p className='text-sm text-slate-500 font-extralight'>8433238317</p>
        </div>

        
        <div className='mt-2 mb-3'>
          <div className='border rounded-lg border-slate-200 shadow-sm p-3 font-semibold text-base text-gray-800 flex justify-between cursor-pointer'>
            <div className='flex gap-4'>
            <div className='text-green-600'><i class="fa-regular fa-comments"></i></div>
              <p>Chat support</p>
              </div>
              <div><i class="fa-solid fa-angle-right"></i></div>
              </div>

              <div className='border rounded-lg border-slate-200 shadow-sm p-3 font-semibold text-base text-gray-800 flex justify-between mt-2 cursor-pointer'>
            <div className='flex gap-5'>
            <div className='text-cyan-600'><i class="fa-solid fa-circle-question"></i></div>
              <p>Help Desk</p>
              </div>
              <div><i class="fa-solid fa-angle-right"></i></div>
              </div>

              <div className='border rounded-lg border-slate-200 shadow-sm p-3 font-semibold text-base text-gray-800 flex justify-between mt-2 cursor-pointer'>
            <div className='flex gap-5'>
            <div className='text-black-400'><i class="fa-solid fa-arrow-right-from-bracket"></i></div>
              <p>Logout </p>
              </div>
              <div><i class="fa-solid fa-angle-right"></i></div>
              </div>    
    
        </div>

      </div>
    </div>
  )
}

export default Prompt
