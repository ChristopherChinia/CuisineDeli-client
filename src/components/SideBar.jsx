import React,{useState} from 'react'
import './sidebar.css';
import { FaTh, FaBars, FaUserAlt, FaCommentAlt, FaShoppingBag}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const SideBar = ({extension}) => {
  const[isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
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
<div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Menu</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{extension}</main>
        </div>
    );
}

export default SideBar