import{useState} from 'react'
import'../Assets/Nav.css'
const Nav=()=>
{
 const[data,setData]=useState(
    {
        username:'',
        password:''
    }
 )
const handleChange=(e)=>
{
     setData({...data,[e.target.id]:e.target.value})
     console.log(data)
    }
    const handleSubmit=(e)=>
    {
        e.preventDefault()
        console.log("final Data")
        console.log(data)
      alert('submitted')
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
         <input type="text" placeholder="Username" id="username" onChange={handleChange}/>
         <input type="password" placeholder="Password" id="password" onChange={handleChange}/>
         <input type="submit" value="Login"/>

        </form>
        </>
    )
}
export default Nav;