import React, {useState,useEffect} from 'react'
import axios from 'axios';
import "./Table.css"

const Table = () => {

    const [users,setUsers]=useState([]);

    useEffect(()=>{
        const getdata=async()=>{
          const response= await axios.get('http://localhost:4040/api/data') 
            setUsers(response.data);
         users && console.log(users);
        }

        getdata();
     // eslint-disable-next-line
    },[])

   
  return (
    <div>
        <h2 className='heading'> User Table</h2>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                  users?.map((user)=>{
                    return <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                    </tr>
                  })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table