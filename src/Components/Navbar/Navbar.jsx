import React, { useEffect, useRef, useState } from 'react'
import logo from '../../asset/images/alii.jpg'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { MenuItem,useHover, useMenuState, ControlledMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

const Navbar = ({ toogle, show }) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [menuState1, toggle1] = useMenuState({ transition: true });
  const [menuState2, toggle2] = useMenuState({ transition: true });

  const { anchorProps:anchorProps1, hoverProps:hoverProps1 } = useHover(menuState1.state, toggle1);
  const { anchorProps:anchorProps2, hoverProps:hoverProps2 } = useHover(menuState2.state, toggle2);





  const getStorageMood = () => {
    let mood = ''
    if (localStorage.getItem('mood') != null) {
      mood = localStorage.getItem('mood')
    } else {
      mood = 'light'
    }
    return mood
  }

  const [dark_light, setdark_light] = useState(getStorageMood())

  function toggleMood() {

    dark_light === 'light' ? setdark_light('dark') : setdark_light('light')

  }

  useEffect(() => {
    document.querySelector('body').setAttribute('data-mood', dark_light)
    localStorage.setItem('mood', dark_light)
  }, [dark_light])




  
  return (
    <>

      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex gap-2 justify-content-sm-between justify-content-center">
          <div className='d-flex align-items-center gap-3'>
            {show ?
              <i className="fa-solid fa-arrow-left pointer-cursor" onClick={toogle}></i>

              : <i className="fa-solid fa-arrow-right pointer-cursor" onClick={toogle}></i>
            }
            <form role="search">
              <input className="form-control " type="search" placeholder="Search" aria-label="Search" />
            </form>
          </div>

          <div className='d-flex align-items-center '>
            <div>


              <div ref={ref1} {...anchorProps1}>
                <i class="fa-solid fa-bell fs-6 text-main pointer-cursor"></i>
              </div>

              <ControlledMenu
                {...hoverProps1}
                {...menuState1}
                anchorRef={ref1}
                onClose={() => toggle1(false)}
                arrow={'true'}
                align='center'
              >
                <MenuItem className={'hov'}>notification 1</MenuItem>
                <MenuItem className={'hov'}> notification 2</MenuItem>
                <MenuItem className={'hov'}>notification 3</MenuItem>
              </ControlledMenu>

            </div>
            <div className='pointer-cursor mx-3' onClick={toggleMood} >
              {dark_light === 'dark' ? <>
                <div className='div-light d-flex justify-content-center align-items-center'>
                  <i className="fa-solid fa-sun"></i>
                </div>

              </> : <>
                <div className='div-dark d-flex justify-content-center align-items-center'>
                  <i className="fa-solid fa-moon text-light"></i>
                </div>
              </>}

            </div>

           
            <div>
            <div ref={ref2} {...anchorProps2}>
            <img src={logo} alt="stevejobs" height={30} className='rounded-circle pointer-cursor' />
              </div>

              <ControlledMenu
                {...hoverProps2}
                {...menuState2}
                anchorRef={ref2}
                onClose={() => toggle2(false)}
                arrow={'true'}
                align='center'
              >
                <MenuItem className={'hov'}>
                <li><Link className="nav-link" to="/"><i className="fa-solid fa-user me-2"></i>Profile</Link></li>
               
                </MenuItem>
                <MenuItem className={'hov'}> 
                <li><Link className="nav-link" to="/"><i className="fa-solid fa-gear me-2"></i>Setting</Link></li>              
                </MenuItem>
                <MenuItem className={'hov'}>
                <li><Link className="nav-link" to="/"><i className="fa-solid fa-right-to-bracket me-2"></i>Logout</Link></li>

                  </MenuItem>
              </ControlledMenu>
            </div>
           
           
            
           






          </div>

        </div>
      </nav>


    </>
  )
}

export default Navbar