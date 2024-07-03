import Batchbutton from './Batchbutton'
import { Outlet } from 'react-router-dom'
import { Context } from './Context';
import React, { useContext, useState } from 'react'
import { useRef } from 'react'  
import Current from './Current';
import Batchsearch from './Batchsearch';



const Batch = () => {

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
    <div className='w-[80%] h-[85%]  bg-white  py-3 px-7 fixed top-20 right-2 overflow-y-scroll '>
       <Batchsearch/> 
        <Batchbutton/>
        <Outlet/>
    
      
    </div>
      
    </>
  )
}

export default Batch
