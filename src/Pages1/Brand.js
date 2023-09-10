import React from 'react'
import { Outlet,useNavigate } from 'react-router-dom'
const Brand = () => {
  let navigate=useNavigate()
  return (
    <div>Brand
      <button onClick={()=>navigate("")}>Apple</button>
      <button onClick={()=>navigate("nokia")}>Nokia</button>
      <button onClick={()=>navigate("samsung")}>Samsung</button>
<br/>
    <Outlet />
    </div>
  )
}

export default Brand