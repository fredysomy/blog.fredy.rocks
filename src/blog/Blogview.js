import React,{Component,useState,useEffect} from 'react'
import superagent from 'superagent';
import './Blogview.css';
import {Link} from 'react-router-dom';
const Blogview =() =>{
    const getBlog = async () => {
    const DEV_TO_URL = `https://dev.to/api/articles/fredysomy/${window.location.pathname.slice(1)}`
    
    try {
    const blog = superagent
      .get(DEV_TO_URL)
      .then(res => {
        return res.body
        })
        return blog
        } catch (error) {
        console.log("WE HAVE FETCH POST ERROR", error)
    }
    }
    const [blog,setBlog] =useState([])
    useEffect(()=>{
            getBlog().then(data =>{
                setBlog(data);
                
                document.getElementById("blogcontents").innerHTML=data.body_html.replace(/[\r]+/gm, "" );
            })
    },[]);
    
    return(
      <div  id="blogcontents">

      </div>
    )
  

}

export default Blogview;
