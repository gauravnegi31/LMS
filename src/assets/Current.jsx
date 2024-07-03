import React, { useContext } from 'react'
import { Context } from './Context';




const Current = () => {

  let {input} = useContext(Context);


  return (
    <>
     <div className='flex gap-6 flex-wrap mt-4'>
     {input.map((val) => {
          return (
            <>
            <div className='flex gap-6 flex-wrap mt-9'>
                 <div className="w-[300px] rounded-2xl border shadow-md border-t-8 border-blue-900">
      <div className="p-4">
        <h1 className="font-semibold text-blue-800"> </h1>
        <p className="mt-3 text-sm font-semibold text-gray-600"><i class="fa-solid fa-graduation-cap"></i>  {val.course} </p>
        <p className="mt-3 text-sm font-semibold text-gray-600"><i class="fa-solid fa-user"></i>  {val.name}</p>
        <p className="mt-3 text-sm  font-semibold text-gray-600"><i class="fa-solid fa-calendar-days"></i>  {val.date}</p>
        <p className="mt-3 text-sm font-semibold text-gray-600"> <i class="fa-solid fa-business-time"></i>  {val.time}</p>
        <p className='border mt-3 border-dashed'></p>
        <button
          type="button"
          className="mt-4 rounded bg-blue-950 px-3 py-2 text-[11px] font-semibold text-white shadow-sm "
        >
          View Details
        </button>
      </div>
    </div>
    </div>
            </>
          );
        })}

        </div> 
    </>
  )
}

export default Current
