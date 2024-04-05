import React from 'react'
import { Link } from 'react-router-dom'
import './Sidbar.css'
const Sidbar = () => {

 


  return (
  <>
  <div className='p-1 p-md-3 sidbar  vh-100  overflow-auto'>
    <h1 className=' h2 gap-2 d-flex align-items-center justify-content-center'><i className="fa-brands fa-asymmetrik"></i><p className='mb-0 d-none d-lg-block'>Dashbord</p></h1>
    
    <hr  />
    
    <p className='text-sidebar text-center text-md-start m-0'>main</p>
    <ul className='list-unstyled d-flex justify-content-center justify-content-md-start my-2'>
      <li className='nav-item  my-2'>

        <Link className='nav-link d-flex align-items-center' to={'/home'}>
          
          <div className='d-flex  align-items-center'><i className="fa-solid fa-house me-md-2"></i><p className='m-0 d-none d-md-block'>Home</p></div>
          
        </Link>
        </li>
    </ul>



    <p className='text-sidebar text-center text-md-start m-0'>Chart</p>
    <ul className='list-unstyled d-flex flex-column align-items-center align-items-md-start my-2'>
      <li className='nav-item  my-2'>
        <Link className='nav-link d-flex align-items-center' to={'/stats'}>
          <div className='d-flex  align-items-center'><i className="fa-solid fa-chart-bar me-md-2"></i><p className='m-0 d-none d-md-block'>Stats</p></div>
        </Link>
        </li>
      <li className='nav-item my-2'>
        <Link className='nav-link' to={'/'}>
         <div className='d-flex  align-items-center'><i className="fa-solid fa-bell me-md-2"></i><p className='m-0 d-none d-md-block'>Notifiction</p></div>
        </Link>
        </li>      
    </ul>
  

    <p className='text-sidebar text-center text-md-start m-0'>User</p>
    <ul className='list-unstyled d-flex flex-column align-items-center align-items-md-start my-2'>
      <li className='nav-item  my-2 '>
        <Link className='nav-link  d-flex align-items-center' to={'/'}>
          <div className='d-flex  align-items-center'><i className="fa-solid fa-user me-md-2"></i><p className='m-0 d-none d-md-block'>Profile</p></div>
        </Link>
        </li>
      <li className='nav-item my-2'>
        <Link className='nav-link' to={'/calendar'}>
         <div className='d-flex  align-items-center'><i className="fa-regular fa-calendar-days me-md-2"></i><p className='m-0 d-none d-md-block'>calendar</p></div>
        </Link>
        </li>
      <li className='nav-item my-2'>
        <Link className='nav-link' to={'/'}>
         <div className='d-flex  align-items-center'><i className="fa-brands fa-hire-a-helper me-md-2"></i><p className='m-0 d-none d-md-block'>Helper</p></div>
        </Link>
        </li>
       
      <li className='nav-item my-2'>
        <Link className='nav-link' to={'/'}>
         <div className='d-flex  align-items-center'><i className="fa-solid fa-right-to-bracket me-md-2"></i><p className='m-0 d-none d-md-block'>logout</p></div>
        </Link>
        </li>
       
    </ul>
  </div>
  
  </>
  )
}

export default Sidbar