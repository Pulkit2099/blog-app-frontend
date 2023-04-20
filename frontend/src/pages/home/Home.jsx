import React, { useEffect } from 'react'
import Header from '../../Header/Header'
import "./home.css"
import Posts from '../../posts/Posts'
import Sidebar from '../../sidebar/Sidebar'
import  axios  from "axios"
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
  
  const {search}=useLocation()
  const [posts ,setPosts]=useState([])
  useEffect(()=>{
    const fetchPosts=async()=>{
    //returning a response   
  const res= await axios.get("/posts"+search)
  
  setPosts(res.data)

    }
    fetchPosts()

  },[search])

  
  
  return (
  
   
      
  
  
  <>



    <Header/>
   <div className="home">
    {/* sendings posts from usestate and pass it as props */}
<Posts posts={posts} />
{/* after that we are sendinf it to our posts comp  */}
<Sidebar/>
   </div>
   </>
  )
}

export default Home
