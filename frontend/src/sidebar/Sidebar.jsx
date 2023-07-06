import React from 'react'
import { useState ,useEffect} from 'react'
import axios from 'axios'
 import { Link } from 'react-router-dom'
import "./sidebar.css"
import logo from "../omg/what_is_a_blog_used_for-f_mobile.png"




const Sidebar = () => {

 const [cats,setCats]=useState([])
  

 useEffect(()=>{

   const getCats =async()=> {
    const res=await axios.get("https://blog-app-t4i9.onrender.com/backend/categories")
    setCats(res.data)
  }
 
         getCats()
 },[])




  return (
    <div className="sidebar">
    <div className="sidebarItem">
      <span className="sidebarTitle">ABOUT ME</span>
    <img
     src={logo}
     alt=""/>
      <p>
        Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
        amet ex esse.Sunt eu ut nostrud id quis proident.
      </p>
    </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
      {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
     
      </ul>
    </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
        <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>
        <i className="sidebarIcon fab fa-pinterest-square"></i>
        <i className="sidebarIcon fab fa-twitter-square"></i>
      </div>
    </div>
  </div>
  )
}

export default Sidebar
