import React from 'react'


const Backdrop = ({toggle}) => {
  return (
    <div className='w-full h-screen absolute top-[71px] left-0 bg-[#0000007a] blur-sm overflow-hidden' onClick={toggle}>
    </div>
  )
}

export default Backdrop
