import React from 'react'
import {  RouterProvider, createHashRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Pages/Home/Home'
import Stats from './Pages/Stats/Stats'
import Calendarmy from './Pages/Calendarmy/Calendarmy'

const App = () => {

let router=createHashRouter([
  {path:"",element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'home',element:<Home/>},
    {path:'stats',element:<Stats/>},
    {path:'calendar',element:<Calendarmy/>},
  ]}
])


  return (
<>
<RouterProvider router={router}/>
</>  )
}

export default App