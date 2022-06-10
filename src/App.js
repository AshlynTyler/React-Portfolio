import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect
} from 'react-router-dom';
import NavBar from "./components/NavBar";
import './App.css';
import {useState} from 'react';
import PortfolioPage from './components/pages/PortfolioPage';
import AboutPage from './components/pages/AboutPage';

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
      <Routes>
        <Route path='/about' element={<AboutPage />}/>
        
        <Route path='/' element={<PortfolioPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
