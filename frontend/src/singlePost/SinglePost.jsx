import React,{useEffect,useState,useContext} from 'react'
import { Context } from '../context/Context'
import { Link, useLocation } from 'react-router-dom'
import "./singlepost.css"
import axios from "axios"
const SinglePost = () => {
  const location=useLocation()
  const path=location.pathname.split("/")[2]
const [post,setPost]=useState({})
const PF="https://blog-app-t4i9.onrender.com/backend/images/"
const { user } = useContext(Context);
//for updating a post
const [title, setTitle] = useState("");
const [desc, setDesc] = useState("");
const [updateMode, setUpdateMode] = useState(false);


useEffect(() => {
  const getPost = async () => {
    const res = await axios.get("https://blog-app-t4i9.onrender.com/backend/posts/" + path);
    setPost(res.data);
    setTitle(res.data.title);
    setDesc(res.data.desc);
  };
  getPost();
}, [path]);


const handleDelete = async () => {
  try {
    await axios.delete(`https://blog-app-t4i9.onrender.com/backend/posts/${post._id}`, {
      data: { username: user.username },
    });
    window.location.replace("/");
  } catch (err) {}
}; 

const handleUpdate = async () => {
  try {
    await axios.put(`https://blog-app-t4i9.onrender.com/backend/posts/${post._id}`, {
      username: user.username,
      title,
      desc,
    });
    setUpdateMode(false)
  } catch (err) {}
};




  return (
    <div className="singlePost">
    <div className="singlePostWrapper">
      {post.photo && (
        <img src={PF + post.photo} alt="" className="singlePostImg" />
      )}
      {updateMode ? (
        <input
          type="text"
          value={title}
          className="singlePostTitleInput"
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <h1 className="singlePostTitle">
          {title}
          {post.username === user?.username && (
            <div className="singlePostEdit">
              <i
                className="singlePostIcon far fa-edit"
                onClick={() => setUpdateMode(true)}
              ></i>
              <i
                className="singlePostIcon far fa-trash-alt"
                onClick={handleDelete}
              ></i>
            </div>
          )}
        </h1>
      )}
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          Author:
          <Link to={`/?user=${post.username}`} className="link">
            <b> {post.username}</b>
          </Link>
        </span>
        <span className="singlePostDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      {updateMode ? (
        <textarea
          className="singlePostDescInput"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      ) : (
        <p className="singlePostDesc">{desc}</p>
      )}
      {updateMode && (
        <button className="singlePostButton" onClick={handleUpdate}>
          Update
        </button>
      )}
    </div>
  </div>
  )
}

export default SinglePost
