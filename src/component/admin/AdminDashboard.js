import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import { connect } from "react-redux";

const AdminDashboard = ({getToken,getAdmin}) =>{

    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);

    useEffect(() =>{
        axios.get(
            "http://localhost:3030/admin/getemployees",
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
        axios.delete(`http://localhost:3030/admin/delete/${id}`,
        {
            headers:{
                "Content-Type": "application/json",
                "auth-token":getToken
            }
        })
    };

    return(
        <>
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
        <div>
          <Link to="/" style={{ color: "blue" }}>
            Home
          </Link>
        </div>
        <h1>Admin Dashboard</h1>
        <h2>All Employees</h2>
        {employees.length === 0 && <p>No Employees</p>}
        {employees.length > 0 && (
          <div className="employee-details">
            <h3>
              <strong>First Name</strong>
            </h3>
            <h3>
              <strong>Last Name</strong>
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
              Edit
            </div>
            <div
              className="delete"
              onClick={() => {
                deleteEmployee(employee._id);
              }}
            >
              Delete
            </div>
          </div>
        ))}
        <div>
          <Link to="/admin/addemployee" style={{ color: "blue" }}>
            Add Employee
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
