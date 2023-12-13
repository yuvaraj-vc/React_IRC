import React from 'react'
import '../Assets/Testimonial.css'

import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div >
     <div class="login-box">
 
 <form>
   <div class="user-box">
     <input type="text" name="" required=""/>
     <label>Name</label>
   </div>
   <div class="user-box">
     <input type="text" name="" required=""/>
     <label>Username</label>
   </div>
   <div class="user-box">
     <input type="password" name="" required=""/>
     <label>Password</label>
   </div>
   <div class="user-box">
     <input type="password" name="" required=""/>
     <label>Confirm Password</label>
   </div>
   <Link to="/Login"><center>
    <a href="#">
           Sign Up
           
       <span></span>
    </a></center> </Link>
  
 </form>
</div>
    </div>
  )
}

export default Footer;