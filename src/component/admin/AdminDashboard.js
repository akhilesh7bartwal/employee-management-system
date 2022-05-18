import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import { connect } from "react-redux";
import Header from "../header/Header";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const AdminDashboard = ({getToken,getAdmin}) =>{

    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);

    useEffect(() =>{
        axios.get(
            "https://employee-management-system-backend-chi.vercel.app/admin/getemployees",
            {
                headers:{
                    "Content-Type": "application/json",
                    "auth-token":getToken
                },
            }
        ).then((response)=> {
            setEmployees(response.data)
        });
    });

    const deleteEmployee =(id) =>{
        axios.delete(`https://employee-management-system-backend-chi.vercel.app/admin/delete/${id}`,
        {
            headers:{
                "Content-Type": "application/json",
                "auth-token":getToken
            }
        })
    };

    return(
        <>
      <div>
          <Header/>
      </div>
     <div className="admin-dashboard">
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div>
            <div>Admin</div>
            <div>
              {getAdmin.name} 
            </div>
            <div>{getAdmin.email}</div>
          </div>
        </div>
        <h1>Admin Dashboard</h1>
        <h2>All Employees</h2>
        {employees.length === 0 && <p>No Employees</p>}
        {employees.length > 0 && (
          <div className="employee-details">
            <h3>
              <strong>Name</strong>
            </h3>
            <h3>
              <strong>Address</strong>
            </h3>
            <h3>
              <strong>Email</strong>
            </h3>
          </div>
        )}
        {employees.map((employee) => (
          <div key={employee._id} className="employee">
            <div>{employee.name}</div>
            <div>{employee.address}</div>
            <div>{employee.email}</div>
            <div
              className="edit"
              onClick={() => {
                navigate(`/admin/edit/${employee._id}`);
              }}
            >
              <Button variant="outlined" startIcon={<EditIcon/>}>Edit</Button>
            </div>
            <div
              className="delete"
              onClick={() => {
                deleteEmployee(employee._id);
              }}
            >
              <Button variant="outlined" color="error" startIcon={<DeleteIcon/>}>Delete</Button>             
            </div>
            <br/>
          </div>
        ))}
        <br/>
        <div>
          <Link to="/admin/addemployee" style={{ color: "blue" }}>
            <Button variant="contained" style={{ textDecoration: 'none' }}>Add Employee</Button>
          </Link>
        </div>
      </div>
        </>
    )
}

const mapStateToProps = (state) =>{
    return{
        getToken:state.signin.token,
        getAdmin:state.signin.admin
    }
}

export default connect(mapStateToProps,null)(AdminDashboard)
