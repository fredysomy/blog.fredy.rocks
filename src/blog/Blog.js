import React,{Component,useEffect,useState} from 'react'
import superagent from 'superagent';
import {Link} from 'react-router-dom';
import axios from 'axios';
const Blog =()=> {
    const getPosts = async () => {
  const DEV_TO_URL = "https://o6ippn.deta.dev/id"

  try {
    const result = superagent
      .get(DEV_TO_URL)
      
      .then(res => {
        return res.body
      })
    return result
  } catch (error) {
    console.log("WE HAVE FETCH POST ERROR", error)
  }
}
  const [posts ,setPosts]=useState([]);
  const [loading ,setLoading] =useState(false);

    useEffect(()=> {
    getPosts().then(data=>{
        setPosts(data)
    })
    
 },[]);

    return(
      <div>
     {posts.map(data => {
         return(
             <div>
         <h5>{data.title}</h5>
     <Link params={data.id} to={`/${data.id}`}>{data.id}</Link>
         </div>
         )
     })}
      
      </div>
    );
  };
export default Blog;
