import React, { useState } from 'react'
import Sidbar from '../Sidbar/Sidbar'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

const Layout = () => {
const [showBtnTop, setshowBtnTop] = useState(false)
const [show, setshow] = useState(true)

document.addEventListener('scroll',()=>{
  document.documentElement.scrollTop>200?setshowBtnTop(true):setshowBtnTop(false)
})


function top() {
  document.documentElement.scrollTop=0

}
function toogle() {
  setshow(!show)
}

  return (
<>
<div className='row g-0'>

{show&&
  <div className='col-2 fixed-top '>
    <Sidbar />
  </div>}
{show&&<div className='col-2 vh-100 '> </div>}


<div className='col'>
    <Navbar toogle={toogle} show={show}/>
    <div className='px-3 py-2'>
        <Outlet></Outlet>

    </div>
</div>
</div>



<div onClick={top} className={`upToTop  position-fixed pointer-cursor  justify-content-center align-items-center shadow-lg ${showBtnTop?'d-flex':'d-none'}`}>
<i class="fa-solid fa-angle-up"></i></div>

</>  )
}

export default Layout