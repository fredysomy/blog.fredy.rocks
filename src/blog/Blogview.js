import React,{Component} from 'react'

import {Link} from 'react-router-dom';
const Blogview =() =>{


    return(
      <div>
 {this.props.match.params.id}
      </div>
    )
  

}

export default Blogview;