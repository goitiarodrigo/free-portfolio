import { Routes, Route } from "react-router-dom"
import './App.css';
import MyProjects from "./components/MyProjects";
import NewPortfolio from "./components/NewPortfolio";
import NewProject from "./components/NewProject";
import Profile from "./components/Profile";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
       
        <Routes>
          <Route path="/"  element={<Home />} />
          <Route path="/newportfolio" element={<NewPortfolio />} />
          <Route path="/myprojects" element={<MyProjects />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/myprofile" element={<Profile />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Profile />} />
        </Routes>
      
      
    </div>
  );
}

export default App;
