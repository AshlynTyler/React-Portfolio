import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect
} from 'react-router-dom';
import NavBar from "./components/NavBar";
import './App.css';
import {useState} from 'react';
import ProjectsPage from './components/pages/ProjectsPage';
import AboutPage from './components/pages/AboutPage';

function App() {
  const[pages, setPages] = useState([
    {
      name: 'Projects',
      path: '/',
      component: <ProjectsPage />
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
        
        <Route path='/' element={<ProjectsPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
