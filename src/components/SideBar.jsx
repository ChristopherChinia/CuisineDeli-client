import React from 'react'
import './sidebar.css';
import { FaTh,FaBars, FaUserAlt,FaCommentAlt, FaShoppingBag}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  const menuItem=[
    {
        path:"/",
        name:"Home",
        icon:<FaTh/>
    },
    {
        path:"/product",
        name:"Product",
        icon:<FaShoppingBag/>
    },
    {
        path:"/comment",
        name:"Comment",
        icon:<FaCommentAlt/>
    },
    {
        path:"/about",
        name:"About",
        icon:<FaUserAlt/>
    }
]
  return (
    <div>SideBar</div>
  )
}

export default SideBar