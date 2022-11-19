
import { useEffect, useContext } from 'react';
import './App.css';
import { UserContext } from './context/UserContext';
import Navigation from "./routes/Navigation";

const App = () => {

    const { verifyToken, signOut } = useContext(UserContext)
    
    const checkToken = async () => {
       const response =  await verifyToken(window.sessionStorage.getItem('token')!)
       if (!response.success) signOut()
    } 
    useEffect(() => {
        if ( window.sessionStorage.getItem('token') ) {
            checkToken()
        }
    }, [])

    return (
        <div className="App">
            <Navigation />
        </div>
  );
}

export default App;
