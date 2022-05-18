
import axios from "axios";
import React, { useState } from "react";
import Header from "../header/Header";

import './Signin.css'

import {connect} from 'react-redux'

import { useNavigate } from "react-router-dom";

import {displayEmployee} from '../../redux/signin/signin.action' 

const Signin= ({sendEmployee}) => {

    const navigate = useNavigate();

    const [allValues,setAllValues] = useState({
      email:"",
      password:""
    });

    const handleChange = (event) =>{
      console.log(allValues)
      const {name,value} = event.target;
      setAllValues({...allValues, [name]:value});
    };

    const submitHandler = async (event) => {
      event.preventDefault();
      await axios
        .post("http://localhost:3030/employee/signin", {
          email: allValues.email,
          password: allValues.password,
        })
        .then((response) => {
          sendEmployee(response.data);

          if(response.data){
            console.log(response.data);
            alert("Signin Successfull");
            navigate('/employee/display')
          }
          else{
            response.send("Wrong details.")
          }


        })
        .catch((error) => console.log(error));
    };
    
    return(
        <>
        <Header/>
        <form style={{border:"1px solid #ccc"}}>
          <div className="container">
            <h1>Sign In</h1>


            <div>
            <label className="label">Email</label>
            <input type="text" name="email"  placeholder="Enter Email" className="email" value={allValues.email} onChange={handleChange}  required/>
            </div>


            <div>
            <label htmlFor="psw">Password</label>
            <input type="password" name="password" placeholder="Enter Password"  className="psw" value={allValues.password} onChange={handleChange} required/>
            </div>


            <div className="clearfix">
              <button type="submit" className="signinbtn" onClick={submitHandler}>Sign In</button>
            </div>
          </div>
        </form>              
        </>
    )
    
}

const mapDispatchToProps =dispatch =>({
  sendEmployee:employee =>dispatch(displayEmployee(employee))
})

export default connect(null, mapDispatchToProps)(Signin);
