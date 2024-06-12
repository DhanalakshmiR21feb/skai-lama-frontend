import { useState, useEffect } from "react";
import homeIcon from "./home.png";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import LoginEmailModal from "./LoginEmailModal";
import LandingPage from "./LandingPage";

const Home = () => {
  const [showLoginEmail, setShowLoginEmail] = useState(false);
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email === null) {
      setShowLoginEmail("true");
    } else {
      setShowLoginEmail("false");
      const proj = localStorage.getItem("projName");
      if (proj !== null) {

      }
    }
  }, []);
  const toggleEmail = () => {
    setShowLoginEmail(!showLoginEmail);
  };

  return (
    <div className="App">
      <div className="app-header">
        <Navbar />
        <div className="content">
          <div className="home">
            <div className="homeNav">
              {" "}
              <img src={homeIcon} alt="Home icon" />
              <span className="backtohome">Back to Home</span>
            </div>
          </div>
          <div>
            <LandingPage toggleEmail={toggleEmail} />
          </div>
          {showLoginEmail && <LoginEmailModal onClose={toggleEmail} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
