import React from 'react'
import ChangingProgressProvider from './ChangingProgressProvider'
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  import style from './Featured.module.css'

const Featured = () => {
  return (
    <>
    <div className='div-circle'>
      <div className='d-flex justify-content-between align-items-center'>
        <p className='my-2'>Total Revenue</p>
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
    
      <div className={`m-auto ${style.wimg}`}>
       <ChangingProgressProvider values={[0,10, 20,30, 40,50, 60,70, 80]} >
        {percentage => (
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={7}
            styles={buildStyles({
              pathTransitionDuration: 0.95,
              trailColor:"#82ca9d",
              pathColor:'white',
              textSize:17,
              textColor:'#82ca9d',
            })}
          />
        )}
       </ChangingProgressProvider>
      </div>

      <div className='text-center'>
              <p className='m-0 mt-3 fs-5'>Total sales made today</p>
              <p className='my-2 fs-1'>$2042.50k</p>
              <p className='fs-6 '>Previous transactions</p>
      </div>

      <div className='mt-2 d-flex justify-content-around align-items-center'>
         <div className='text-center'>
          <p>target</p>
          <p className='text-danger '><i class="fa-solid fa-chevron-down me-1"></i> $19.4k</p>
         </div>
         <div className='text-center'>
          <p>last week</p>
          <p className='text-success  '><i class="fa-solid fa-chevron-down me-1"></i> $60.4k</p>
         </div>
         <div className='text-center'>
          <p>last month</p>
          <p className='text-danger '><i class="fa-solid fa-chevron-down me-1"></i> $73.4k</p>
         </div>
      </div>


   </div>
    
    
    </>
  )
}

export default Featured