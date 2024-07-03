import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Leftbar from './assets/Leftbar'
import Navbar from './assets/Navbar'
import Module from './assets/Module'
import Batch from './assets/Batch'
import Testmodule from './assets/Testmodule'
import Resources from './assets/Resources'
import { useState } from 'react'
import Modal from './assets/Modal'
// import Display from './assets/Display'
import BatchUpcoming from './assets/BatchUpcoming'
import BatchCompleted from './assets/BatchCompleted'
import Current from './assets/Current'


function App() {

  const [toggle,setToggle] = useState(false);
 
  const ToggleModal =() =>{
    setToggle(!toggle);
    
  }

  return ( 
    <BrowserRouter>
      <div className='bg-gray-200 w-full h-screen'>
        <Navbar toggle={ToggleModal}/>

        <Leftbar/>
        <Routes>
          <Route index element={<Module/>}></Route>
          <Route path='/Module' element={<Module/>}></Route>
          <Route path='/Batch' element={<Batch/>}>
          
          <Route index element={<Current/>}></Route>
           <Route path='Current' element={<Current/>}></Route>
           <Route path='Upcoming' element={<BatchUpcoming/>}></Route>
           <Route path='Completed' element={<BatchCompleted/>}></Route>
          
          </Route>
          <Route path='/Testmodule' element={<Testmodule/>}></Route>
          <Route path='/Resources' element={<Resources/>}></Route>
          <Route path='*' element={<span>No Such Page Exists</span>}></Route>
        </Routes>
        </div>
        
        {toggle && <Modal toggle={ToggleModal}/>}
        </BrowserRouter>
  )
}

export default App
