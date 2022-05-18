import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import './Signup.style.css'

import axios from 'axios';

  const Signup = () =>{

    const [employeeData, setEmployeeData] = useState({
        name:"",
        email:"",
        address:"",
        password:"",
        confirmPassword:""
    });

    const handleChange= (event)=>{
        const {name,value} =event.target;
        setEmployeeData({...employeeData, [name]:value})
        //console.log(employeeData)
    };

    const handleSubmit = (event) =>{
        event.preventDefault();

        axios.post("http://localhost:3030/employee/signup",{
          name: employeeData.name,
          email: employeeData.email,
          address: employeeData.address,
          password: employeeData.password
        })
        .then(response => {
          console.log(response.data)
          alert("SignUp successfully.")
        })
        .catch(error => console.log(error))
    };

    return (
      
        <>
        <Header/>
         <form style={{border:"1px solid #ccc"}}>
        <div className="container">
          <h1>Sign Up</h1>

          <div>
          <label className="label">Name</label>
          <input type="text" name="name" placeholder="Enter Name" className="name" value={employeeData.name} onChange={handleChange} required/>
          </div>

          <div>
          <label className="label">Email</label>
          <input type="text" name="email" placeholder="Enter Email" className="email" value={employeeData.email} onChange={handleChange} required/>
          </div>

          <div>
          <label className="label">Address</label>
          <input type="text" name="address" placeholder="Enter Address" className="address" value={employeeData.address} onChange={handleChange} required/>
          </div>

          <div>
          <label htmlFor="psw">Password</label>
          <input type="password" name="password" placeholder="Enter Password" className="psw" value={employeeData.password} onChange={handleChange} required/>
          </div>

          <div>
          <label htmlFor="psw-repeat">Confirm Password</label>
          <input type="password" name="confirmPassword" placeholder="Confirm Password" className="psw-repeat" value={employeeData.confirmPassword} onChange={handleChange} required/>
          </div>


          <div className="clearfix">
            <button type="submit" className="signupbtn" onClick={handleSubmit}>Sign Up</button>
          </div>
        </div>
      </form>  
      <span align="center">
        Already have an account? <Link to="/signin">Signin</Link>
      </span>             
        </>
    )

  }

  export default Signup