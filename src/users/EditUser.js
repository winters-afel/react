import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditUser() {

    let navigate = useNavigate()

    const {id} = useParams()

    const [user,setUser] = useState({
        name:"",
        username:"",
        email:""
    });


    const{name,username,email}=user
    const inInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    useEffect(() =>{
        loadUser();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`,user)
        navigate("/")

    };

    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }



  return (
    <div>
        <div className="row">
            <div className="col-md-6 offset-md-3 rounded p-4 mt-2 shadow">
                <h2>Edit User</h2>
               <form onSubmit={(e)=>onSubmit(e)}>
                <div className="mb-3">
                  <label for="" className="form-label">Name</label>
                  <input type={"text"} className="form-control" value={name} name="name" onChange={(e)=>inInputChange(e)}  placeholder="Enter Name" />
                  <label for="" className="form-label">username</label>
                  <input type={"text"} className="form-control" name="username" value={username} onChange={(e)=>inInputChange(e)} placeholder="Enter username" />
                  <label for="" className="form-label">Email</label>
                  <input type={"text"} className="form-control" name="email" value={email} onChange={(e)=>inInputChange(e)} placeholder="Enter Email" />
                  <button type="submit" className="btn btn-outline-primary mt-2">Submit</button>
                  <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}
