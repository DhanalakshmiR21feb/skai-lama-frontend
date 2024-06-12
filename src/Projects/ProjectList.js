import React, { useEffect, useState } from "react";
import creatIcon from "./Group 14.png";
import CreateProjModal from "./CreateProjModal";

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
      <CreateProjModal />
    </div>
  );
};

export default ProjectList;
