import React,{Component} from 'react'
import './Header.css'
import {Link} from 'react-router-dom';

export default class Header extends Component{

  render(){
    return(
      <div>
        <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a id="Head" class="navbar-brand" href="#">
   <img src="https://www.dropbox.com/s/3h2o5hlee2f912f/20201230_220327_0000-removebg-preview.png?dl=1" width="40" height="40" alt="" />
<font color="cyan">Fredy Somy</font></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
     
      <li id="abc" class="nav-item">
        <a href="https://fredy.rocks/" class="nav-link">About</a>
      </li>

     
      <li  id="abc" class="nav-item">
        <a href="https://projects.fredy.rocks/" class="nav-link">Projects</a>
      </li>
      
      <Link to="/downloads">
       <li id="abc" class="nav-item">
        <a class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">Downloads</a>
      </li>
      </Link>
       <li id="abc" class="nav-item">
        <a class="nav-link" data-toggle="collapse" data-target=".navbar-collapse.show">Contact</a>
      </li>
      
    </ul>
  
  </div>
</nav>
      </div>
    )
  }

}