import React from 'react'
import '../Assets/Testimonial.css'
import { Link } from 'react-router-dom';
function Testimonial () {
  return (
    <div className>
     <div class="login-box">
 
 <form>
   <div class="user-box">
     <input type="text" name="" required=""/>
     <label>Username</label>
   </div>
   <div class="user-box">
     <input type="password" name="" required=""/>
     <label>Password</label>
   </div>
   
   <Link to="/About"> <center>
   <a href="#">
           Login
       <span></span>
    </a></center></Link>
    
  
 </form>
</div>
    </div>
  )
}

export default Testimonial;