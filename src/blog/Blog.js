import React,{Component} from 'react'

import {Link} from 'react-router-dom';
import axios from 'axios';
export default class Blog extends Component{
 state={
     blog:[]
 }
 componentWillMount() {
    axios.get('https://dev.to/api/articles/me/published',{ headers :{ "api-key":"e7wq9EdnLxhWvMGzP75kLAYD"},})
    .then(res =>{
        console.log(res)
    })
 }
  render(){
    return(
      <div>
      <Link to="/asd">Hiii</Link>
      
      </div>
    )
  }

}
