import React, { useState } from 'react'

const Testmodule = () => {
  const [accordianOpen, setaccordianOpen] = useState(false);
  const [accordianOpen1, setaccordianOpen1] = useState(false);
  const [accordianOpen2, setaccordianOpen2] = useState(false);
  return (
    <>
    <div className='w-[80%] h-[85%]  bg-white  py-3 px-7 fixed top-20 right-2 overflow-y-scroll '>
    <div className='mt-4'>
          <button className='border border-blue-800 rounded py-1 px-5 text-sm text-blue-900 font-semibold hover:bg-blue-950 hover:text-white focus:bg-blue-950 focus:text-white'>  All Tests</button> &nbsp;
          <button className='border border-blue-800 rounded py-1 px-5 text-sm text-blue-900 font-semibold  hover:bg-blue-950 hover:text-white focus:bg-blue-950 focus:text-white'>  Create Test</button> &nbsp;
          <button className='border border-blue-800 rounded py-1 px-5 text-sm text-blue-900 font-semibold  hover:bg-blue-950 hover:text-white focus:bg-blue-950 focus:text-white'>  Test Results</button>
        </div>

        <div className='flex gap-6 flex-wrap mt-9 '>

<div className="w-[400px] h-[350px] rounded-lg border shadow-md shadow-slate-400 p-1">
<div className="px-4 py-2 text-center">
 <h1 className="text-gray-500 font-bold text-xl ">Frontend Development</h1>
</div>
<div onClick={() =>setaccordianOpen(!accordianOpen)} className='mt-2 cursor-pointer'>
  <div  className='flex justify-between px-3 '>
  <h5 className='text-blue-900 font-bold text-sm'>HTML , CSS</h5>
  {accordianOpen ?  <i class="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
  
  </div>
  <div className={`transition-all duration-300 ease-in-out ${
    accordianOpen ? 'block' : 'hidden'
  }`}>
    <p className='border mt-4'></p>
    <div className='mt-2 px-3 flex justify-between'>
      <p className='text-gray-800 font-bold text-sm'>HTML CSS <br/> <span>Assessment</span></p>
      <div className='flex gap-2 items-center'>
        <div className='text-sm'><i className="fa-regular fa-id-card"></i></div>
        <div className='text-sm'><i class="fa-regular fa-eye"></i></div>
        <div className='text-red-500 text-sm'><i class="fa-regular fa-trash-can"></i></div>
        <select  className='border p-1 font-bold text-sm border-gray-400 rounded' name="Actions" id="">
          <option value="Select Action">Select Action</option>
        </select>
      </div>
    </div>
  </div>
  <p className='border mt-4'></p>
  </div>

  <div onClick={() =>setaccordianOpen1(!accordianOpen1)} className='mt-2 cursor-pointer'>
  <div  className='flex justify-between px-3 '>
  <h5 className='text-blue-900 font-bold'>Javascript , React.Js</h5>
  {accordianOpen1 ?  <i class="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
  
  </div>
  <div className={`transition-all duration-300 ease-in-out ${
    accordianOpen1 ? 'block' : 'hidden'
  }`}>
    <p className='border mt-4'></p>
    <div className='mt-2 px-3 flex justify-between'>
      <p className='text-gray-800 font-bold'>React+Js</p>
      <div className='flex gap-2 items-center'>
        <div className='text-sm'><i className="fa-regular fa-id-card"></i></div>
        <div className='text-sm'><i class="fa-regular fa-eye"></i></div>
        <div className='text-red-500 text-sm'><i class="fa-regular fa-trash-can"></i></div>
        <select  className='border p-1 font-bold text-sm border-gray-400 rounded' name="Actions" id="">
          <option value="Select Action">Select Action</option>
        </select>
      </div>
    </div>
  </div>
  <p className='border mt-4'></p>
  </div>

</div>

<div className="w-[400px] h-[350px] rounded-lg border shadow-md shadow-slate-400 px-1">
<div className="px-4 py-2 text-center">
 <h1 className="text-gray-500 font-bold text-xl ">MERN STACK </h1>
</div>
<div onClick={() =>setaccordianOpen2(!accordianOpen2)} className='mt-2 cursor-pointer'>
  <div  className='flex justify-between px-3 '>
  <h5 className='text-blue-900 font-bold'>Javascript</h5>
  {accordianOpen2 ?  <i class="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
  
  </div>
  <div className={`transition-all duration-300 ease-in-out ${
    accordianOpen2 ? 'block' : 'hidden'
  }`}>
    <p className='border mt-4'></p>
    <div className='mt-2 px-3 flex justify-between'>
      <p className='text-gray-800 font-bold'>Javascript</p>
      <div className='flex gap-2 items-center'>
        <div className='text-sm'><i className="fa-regular fa-id-card"></i></div>
        <div className='text-sm'><i class="fa-regular fa-eye"></i></div>
        <div className='text-red-500 text-sm'><i class="fa-regular fa-trash-can"></i></div>
        <select  className='border p-1 font-bold text-sm border-gray-400 rounded' name="Actions" id="">
          <option value="Select Action">Select Action</option>
        </select>
      </div>
    </div>
  </div>
  <p className='border mt-4'></p>
  </div>
  <div>hello</div>
</div>

</div>
    </div>
    </>
  )
}

export default Testmodule
