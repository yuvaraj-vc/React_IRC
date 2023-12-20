import React,{useState} from 'react'
import '../Assets/css/core.css'
import {useNavigate, navigate} from 'react-router-dom'
import { addUser } from '../Services/api';
function Adduser() {
  const navigate=useNavigate()
  const[data,setData]=useState({
    username:'',
    password:''
  })
  const handleChange=(e)=>
  {
      setData({...data,[e.target.id]:e.target.value})
  }
  const handleSubmit=async(e)=>
  {
     e.preventDefault();
     try{
     
       const res=await addUser(data)
       if(res.status==201)
       alert('user added')
      }
      catch(e){

        console.log(e)
      }
  }
  
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' id='username' placeholder='username' onchnage={handleChange}/>
            <input type='password' id='password' placeholder='password' onchnage={handleChange}/>
            <button type='submit' >Add</button>
        </form>
    </div>
  )
}

export default Adduser