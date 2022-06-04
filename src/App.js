import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import NavBar from "./components/NavBar";
import './App.css';
import useState from 'react';

function App() {
  const[pages, setPages] = useState([
    {
      name: 'Portfolio',
      path: '/',
      component: <PortfolioPage />
    },
    {
      name: 'About',
      path: '/about',
      component: <AboutPage />
    },
  ])
  return (
    <Router>
      <NavBar pages={pages} />
    </Router>
  );
}

export default App;
