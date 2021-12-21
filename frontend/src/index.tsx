import ReactDOM from 'react-dom';
import App from './App';
import PanelAdmin from './components/PanelAdmin';
import { BrowserRouter } from "react-router-dom"
import { UserProvider } from './context/UserProvider';



ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <PanelAdmin />
      <App />
      </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

