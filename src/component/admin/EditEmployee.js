import { useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

import { connect } from "react-redux";

const EditEmployee = ({ getToken }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState({ name: "", address: "" });
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .put(
        `http://localhost:3030/admin/edit/${id}`,
        input,
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
  };
  return (
    <>
      <div className="edit-employee">
        <h1>Edit Employee</h1>
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
            placeholder="Address"
            onChange={inputHandler}
          />
          <button>Update</button>
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

export default connect(mapStateToProps, null)(EditEmployee);