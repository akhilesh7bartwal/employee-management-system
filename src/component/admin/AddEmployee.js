import axios from "axios";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import Header from "../header/Header";

const AddEmployee = ({ getToken }) => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    address: "",
    email: "",
    password: "",
  });
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (employee.password.length >= 5) {
      axios
        .post(
          "https://employee-management-system-backend-chi.vercel.app/admin/add",
          employee,
          {
            headers: {
              "Content-Type": "application/json",
              "auth-token": getToken,
            },
          }
        )
        .then((response) => {
          navigate("/admin/dashboard");
        });
    } else {
      alert("Password length must be more than 5 characters");
    }
  };
  return (
    <>
      <div>
          <Header/>
      </div>
      <div className="add-employee">
        <h1>Add Employee</h1>
        <form onSubmit={submitHandler}>
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={inputHandler}
          />
          <input
            name="address"
            type="text"
            placeholder="Last Name"
            onChange={inputHandler}
          />
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={inputHandler}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={inputHandler}
          />
          <button>Add Employee</button>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    getToken: state.signin.token,
  };
};

export default connect(mapStateToProps, null)(AddEmployee);