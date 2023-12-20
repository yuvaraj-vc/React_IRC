import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { getUser ,setUser,deleteUser} from '../Services/api'
import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
function Users() {
  const [user, setUser] = useState([])
const handleEdit=(id)=>
{
  Navigate(`/edit/${id}`)
}
  const fetchData = async () => {
    try {
      const res = await getUser()
      setUser(res.data)
    }
    catch (e) {
      console.log(e)
    }
  }
  const handleDelete = async(id)=>
  {
    try{
     const res=deleteUser(id)
     if(res.status===200)
     {
      alert('deleted')
     }
     
    }
    catch(e)
    {
      console.log(e)
    }
  }
  console.log(user)
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <div>
        <h2>User Table</h2>
        <table>
          <thead>
            <tr>
              <th>UserName</th>
              <th>Password</th>
              <th>Add</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>
                  <Link to='/add'>
                    <button>Add</button>
                  </Link>
                </td>
                <td>
                  
                    <button onClick={()=> handleDelete(user.id)}>Delete</button>
                 
                </td>
                <td>
                  <Link to='/edit'>
                    <button onClick={()=> handleEdit(user.id)}>Edit</button>
                  </Link>
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users