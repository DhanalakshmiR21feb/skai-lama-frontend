import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "./config";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import "./modal.css";
import creatIcon from "./Group 14.png";

const CreateProjModal = ({ onClose }) => {
  // const navigate=useNavigate();
  const [formData, setFormData] = useState({
    projname: ""
    });
  const { projname } = formData;
  const onChange = e => {
    console.log(e.target.value)
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async(e) => {
    e.preventDefault();
    try{
    const token = localStorage.getItem("token");
    if (!token) {
      console.error('Token not found');
      return;
    }
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const body = JSON.stringify(formData);
    console.log(body);
    const res = await axios.post(
      `${API_BASE_URL}/projects/`,
      body,
      config
    );
    console.log("projects Created Successfully",res.data);
    alert("projects Created Successfully");
    onClose();   
    //  navigate("/dashboard");
  } catch (err) {
    console.error("projects creation failed");
    alert("projects creation failed");
  }
};
  return (
    <div className="modal-background">
      <div className="modal-content">
        <form onSubmit={onSubmit}>
          <div className="flexcolumn flexcenter">
            <div>
              <span className="close" onClick={onClose}>
                &times;
              </span>
              <h2>Create Project1</h2>
            </div>
            <div className="flexstart">
              <label className="flexstart">Enter Project Name</label>
            </div>
            <div>
              {" "}
              <input
                type="text"
                placeholder="Type Here"
                name="projname"
                value={formData.projname}
                onChange={onChange}
                required
                
              />
            </div>
            <div className="flexend">
              <div>
                <button onClick={onClose}>Cancel</button>
              </div>
              <div>
                <button type="submit">Create</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const ProjectList = ({ projList }) => {
  //   const [projects, setProjects] = useState([
  //     { id: 1, name: "Project 1" },
  //     { id: 2, name: "Project 2" },
  //   ]);
  const [showCreateProj, setShowCreateProj] = useState(false);
  const handleCreateProj = () => {
    setShowCreateProj("true");
  };
  const handleCloseModal = () => {
    setShowCreateProj("false");
  };

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projList.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
      <div className="create-proj">
        <img
          src={creatIcon}
          alt="create icon"
          className="zero-margin"
          onClick={handleCreateProj}
        />
        {showCreateProj && <CreateProjModal onClose={handleCloseModal} />}
      </div>
      {/* <CreateProjModal /> */}
    </div>
  );
};
export default CreateProjModal;
