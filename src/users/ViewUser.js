import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import BlogList from './BlogList';



export default function ViewUser() {

    const [value, setValue] = useState(1);
    const [blogs, setBlogs] = useState(null);

    const [user, setUser] = useState({
        name:"",
        username:"",
        email:""
    });
    const {id} = useParams()

    useEffect(() => {
      loadUser();
    }, [])

    useEffect(() => {
        fetch("https://dummyjson.com/products").then(res => {
            return res.json();
        }).then((data) => {
            console.log(data['products']);
            
            setBlogs(data['products']);
        })
    },[])
    
    const loadUser = async()=>{
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    }
   
    const callValue = ()=>{
        setValue(
        <>
           <p>Naomba kuona matokeo</p>
        </>
        );
    }


    //andika hapa zingine
  



  return (
    <div>
         <div className="row">
            <div className="col-md-10 offset-md-1 mt-4">
                <h5>View User</h5>
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <tbody>
                            <tr >
                                <td>Name</td>
                                <td>{user.name}</td>
                            </tr>
                            <tr >
                                <td>Username</td>
                                <td>{user.username}</td>
                            </tr>
                            <tr >
                                <td>Email</td>
                                <td>{user.email}</td>
                            </tr>
                            <tr >
                                <td colSpan={2}>
                                    <Link className="btn btn-success mx-2" to="/">Back</Link>
                                    <Link className="btn btn-info mx-2" to="/" >Back</Link>
                                    <button className="btn btn-warning mx-2" onClick={callValue} >Test Value</button>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>{value}</td>
                            </tr>
                           
                        </tbody>
                    </table>
                </div>
                
            </div>
         </div>


         <div className="row">
           { blogs && <BlogList blogs={blogs}/>}
         </div>
    </div>
  )
}
