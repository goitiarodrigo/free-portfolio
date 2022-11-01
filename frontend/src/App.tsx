import { Routes, Route } from "react-router-dom"
import './App.css';
import MyProjects from "./components/MyProjects";
import NewPortfolio from "./components/NewPortfolio";
import NewProject from "./components/NewProject";
import Profile from "./components/Profile";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import { LinkedInCallback } from 'react-linkedin-login-oauth2';
import SignUp from "./pages/SignUp";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import Navigation from "./routes/Navigation";

const App = () => {

  const { userState } = useContext(UserContext)
  const { token } = userState

  return (
    <div className="App">
        <Navigation />
    </div>
  );
}

export default App;
