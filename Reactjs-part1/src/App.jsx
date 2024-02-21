import React, { useState } from 'react'
import Dnyanesh from './Dnyanesh'

const App = () => {
 const [count,setCount]= useState(0);
  return (
    <>
    <div className='w-full h-screen bg-zinc-700 text-white p-2' >{count}
    <button className='w-100 h-500 bg-red-700 rounded-md text-black' onClick={()=>setCount(count+1)} > click</button>
    <Dnyanesh name="dnyanesh" age="21" />
    </div>
    
   
    </>
  )
}

export default App