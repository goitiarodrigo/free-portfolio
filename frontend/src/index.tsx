import ReactDOM from 'react-dom';
import App from './App';
import PanelAdmin from './components/PanelAdmin';
import { BrowserRouter } from "react-router-dom"


ReactDOM.render(
  <BrowserRouter>
    <PanelAdmin />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

