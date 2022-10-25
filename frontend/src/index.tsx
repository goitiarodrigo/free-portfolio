import ReactDOM from 'react-dom/client';
import App from './App';
import PanelAdmin from './components/PanelAdmin';
import { BrowserRouter } from "react-router-dom"
import { UserProvider } from './context/UserProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter>
    <UserProvider>
      <PanelAdmin />
      <App />
      </UserProvider>
  </BrowserRouter>,
);

