import React from "react";
import groupicon from "./Group 16.png";
import creatIcon from "./Group 14.png";
// import { useNavigate } from "react-router-dom";
import CreateProjModal from "./CreateProjModal";
import { useState } from "react";

const LandingPage = ({ toggleEmail }) => {
  const [showCreateProj, setShowCreateProj] = useState("false");
  const handleCreateProj = () => {
    const email = localStorage.getItem("email");
    if (email === null) toggleEmail("true");
    else setShowCreateProj("true");
  };
  const handleCloseModal = () => {
    setShowCreateProj(!showCreateProj);
  };

  return (
    <div>
      <div className="zero-margin">
        <h1 className="zero-margin">Create a New Project</h1>
      </div>
      <div>
        <img src={groupicon} alt="group icon" />
      </div>
      <div>
        <p className="zero-margin">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
          porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
          purus lectus malesuada libero, sit amet commodo magna eros quis urna.
          Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.Pellentesque
          habitant malesuada fames ac turpis egestas.
        </p>
      </div>
      <div className="create-proj">
        <img
          src={creatIcon}
          alt="create icon"
          className="zero-margin"
          onClick={handleCreateProj}
        />
        {showCreateProj && <CreateProjModal onClose={handleCloseModal} />}
      </div>
    </div>
  );
};
export default LandingPage;
