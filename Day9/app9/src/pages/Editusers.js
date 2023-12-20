import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { getUserId } from '../Services/api'
import { editUser } from '../Services/api'
function Editusers() {
  const{id}=useParams()
  console.log(id)
  const navigate=useNavigate()
  const[data,setData]=useState({
    username:'',
    password:''
  })
  const fetchUser=async()=>
  {
    try{

      const res=await getUserId(id)
      setData(res.data)
    }
    catch(e)
    {
      console.log(e)
    }
  }
  const handleChange=(e)=>
  {
      setData({...data,[e.target.id]:e.target.value})
  }
  const handleSubmit= async(e)=>
  {
     e.preventDefault();
     try{
      const res2=await editUser(id,data)
      console.log(res2.status)
      if(res2.status === 200) 
      {
        alert('Update Saved')
      }
     }
     catch(e)
     {
      console.log(e)
     }
     
  }
  useEffect(()=>{
    fetchUser()
  },[])
  console.log(data)
  return (
    <div>
         <div>
        <form onSubmit={handleSubmit}>
            <input type='text' id='username' placeholder='username' onChange={handleChange}/>
            <input type='text' id='text' placeholder='password' onChange={handleChange}/>
            <button type='submit' >Save</button>
        </form>
    </div>
    </div>
  )
}

export default Editusers