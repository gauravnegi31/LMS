import React, { useContext, useState } from 'react'
import { useRef } from 'react'
import { Outlet } from 'react-router-dom';
import Batchbutton from './Batchbutton';
import Current from './Current';
import { Context } from './Context';

const Batchsearch = () => {

  const searchval = useContext(Context);
  // console.log(searchval);
  
  let [value, setValue] = useState(searchval.OBJ);


  const inputValue = useRef(); 
  const getValue = () => {
    value = inputValue.current.value.toLowerCase();
    // console.log(value)

    let item = searchval.OBJ.filter((elem) => {
      let keys = Object.keys(elem);
      // console.log(keys);

      for (let i = 0; i < keys.length; i++) {
        let v = keys[i];
        // console.log(v);  

        if (String(elem[v]).toLowerCase().includes(value)) {
          return elem;
        }
      }
    });

    setValue(item);
  };

  return (
    <>
      <div className='border w-[30%] rounded-2xl py-2 px-3 text-sm'>
        <input className='w-[90%] outline-0'  type="text" placeholder='Search Here...' ref={inputValue} onChange={getValue}/> 
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        
        
    </>
  )
}

export default Batchsearch
