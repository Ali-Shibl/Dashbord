import React from 'react'
import style from './Home.module.css'
import Featured from '../../Components/Featured/Featured'
import Chart from '../../Components/Chart/Chart'

const Home = () => {

  return (
    <>

   <div className="row g-3">
    <div className='col-lg-3 col-md-6'>
    <div className={`${style.bgmain} shadow rounded-2`}>
        <div className='d-flex justify-content-between align-items-center'>
          <p className='m-0 text-uppercase'>Customers</p>
          <p className={`m-0 ${style.number}`}><i class="fa-solid fa-chevron-down me-1"></i> 20%</p>
        </div>
        <p className='my-3 fs-2'>100</p>
        <div className='d-flex justify-content-between align-items-center'>
          <a className='m-0 text-main text-decoration-none border-1 border-bottom pb-1'>See details</a>
          <p className={`m-0 d-flex justify-content-center align-items-center rounded-2 ${style.icon} ${style.icon1}`}><i class="fa-solid fa-user"></i></p>
        </div>
      </div>
    </div>
    <div className='col-lg-3 col-md-6'>
    <div className={`${style.bgmain} shadow rounded-2`}>
        <div className='d-flex justify-content-between align-items-center'>
          <p className='m-0 text-uppercase'>orders</p>
          <p className={`m-0 ${style.number}`}><i class="fa-solid fa-chevron-down me-1"></i> 20%</p>
        </div>
        <p className='my-3 fs-2'>100</p>
        <div className='d-flex justify-content-between align-items-center'>
          <a className='m-0 text-main text-decoration-none border-1 border-bottom pb-1'>View all orders</a>
          <p className={`m-0 d-flex justify-content-center align-items-center rounded-2 ${style.icon} ${style.icon2}`}><i class="fa-solid fa-cart-shopping"></i></p>
        </div>
      </div>
    </div>
    <div className='col-lg-3 col-md-6'>
    <div className={`${style.bgmain} shadow rounded-2`}>
        <div className='d-flex justify-content-between align-items-center'>
          <p className='m-0 text-uppercase'>total earnings</p>
          <p className={`m-0 ${style.number}`}><i class="fa-solid fa-chevron-down me-1"></i> 20%</p>
        </div>
        <p className='my-3 fs-2'>$ 100</p>
        <div className='d-flex justify-content-between align-items-center'>
          <a className='m-0 text-main text-decoration-none border-1 brmingsorder-bottom pb-1'>View net ea</a>
          <p className={`m-0 d-flex justify-content-center align-items-center rounded-2 ${style.icon} ${style.icon3}`}><i class="fa-solid fa-hand-holding-dollar"></i></p>
        </div>
      </div>
    </div>
    <div className='col-lg-3 col-md-6'>
    <div className={`${style.bgmain} shadow rounded-2`}>
        <div className='d-flex justify-content-between align-items-center'>
          <p className='m-0 text-uppercase'>my balance</p>
          <p className={`m-0 ${style.number}`}><i class="fa-solid fa-chevron-down me-1"></i> 20%</p>
        </div>
        <p className='my-3 fs-2'>$ 100</p>
        <div className='d-flex justify-content-between align-items-center'>
          <a className='m-0 text-main text-decoration-none border-1 border-bottom pb-1'>Withdraw money</a>
          <p className={`m-0 d-flex justify-content-center align-items-center rounded-2 ${style.icon} ${style.icon4}`}><i class="fa-solid fa-scale-unbalanced"></i></p>
        </div>
      </div>
    </div>
   </div>
  
   <div className="row g-3 py-3">

    <div className='col-lg-4 col-md-5'>
      <div className={`${style.bgmain} shadow rounded-2`}>
        <Featured/>
      </div>
    </div>

    <div className='col-lg-8 col-md-7'>
      <div className={`${style.bgmain} shadow rounded-2`}>
        <p className=' m-0 my-2'>Last 6 Months (Revenue)</p>

         <Chart/>

        
      </div>
    </div>
    
  
   </div>

   
    
    </>
  )
}

export default Home