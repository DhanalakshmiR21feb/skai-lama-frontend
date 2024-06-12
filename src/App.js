import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ProjectList from "./Projects/ProjectList";
function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route exact path="/" Component={Home} />
          <Route exact path="/projects" Component={ProjectList} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
