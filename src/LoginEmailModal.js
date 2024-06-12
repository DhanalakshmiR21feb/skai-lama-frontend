import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "./config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./modal.css";
const LoginEmailModal = ({ onClose }) => {
  //   const navigate=useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "abc",
  });
  const { username, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    console.log("Inside login email");
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const body = JSON.stringify(formData);
      const res = await axios.post(
        `${API_BASE_URL}/auth/register`,
        body,
        config
      );
      console.log(res.data.user._id);
      console.log("registerd the user");
      const body1 = JSON.stringify(formData);
      const res1 = await axios.post(`${API_BASE_URL}/auth/login`,body1,config);
      console.log("46", res1);
      const { token,_id} = res1.data;
      console.log("Logged in successfully", token,_id);
      localStorage.setItem("token", token);
      localStorage.setItem("userId",_id);
      localStorage.setItem("email", email);
      alert("Logged in successfully");
      onClose();
      //    navigate("/home");
    } catch (err) {
      console.error("Login failed");
      alert("Login creation failed");
    }
  };
  return (
    <div className="modal-background">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
          <div>
            <label>Enter your Name</label>
          </div>
          <div>
            {" "}
            <input
              type="text"
              placeholder="Type your name here"
              name="username"
              value={username}
              onChange={onChange}
              required
            />
          </div>
          <div>
            <label>Enter your Email</label>
          </div>
          <div>
            <input
              type="email"
              placeholder="Type your email here"
              name="email"
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <button type="submit"> Email</button>
        </form>
      </div>
    </div>
  );
};

export default LoginEmailModal;
