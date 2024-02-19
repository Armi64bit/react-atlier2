import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <NavigationBar />

    <App />
  </BrowserRouter>
);

