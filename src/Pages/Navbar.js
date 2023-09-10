import React from 'react';
import{Link,NavLink} from "react-router-dom";
const Navbar = () => {
  return (
    <div className='navbar'>
        <NavLink to={"/"}> Home </NavLink>
        <NavLink to={"/about"}> About </NavLink>
        <NavLink to={"/contacts"}> Contact </NavLink>
        <NavLink to={"/blog"}> Blog </NavLink>


    </div>
  )
}

export default Navbar