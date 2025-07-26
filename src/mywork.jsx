import { Routes, Route, useNavigate } from 'react-router-dom';
import Decision from './decisiontree';
import Planner from './travelplanner';
import Checkout from './checkout';
import Snake from './snake';
import Database from './database';
import Tester from './vuln-tester';

function Projects() {
    const navigate = useNavigate();
    return (
        <div className="projects-container"> 
            <div className="contact-content"> 
            <img
              src='Profile.png' 
              alt="Adedoyin Bisola Folarin Profile"
              className="contact-profile-image" 
            />
            </div>
            <h1 className="projects-heading-left-aligned">My Projects</h1> 
            <h1 className="projects-heading-left-aligned">Languages: C, Java, Python, JavaScript</h1> 
            <h2>Project Areas: Cybersecurity, Software Engineering (Frontend), API Development (Backend), Data Structures & Algorithm (Backend)</h2> 
            <div className="project-buttons-container"> 
                <button className="project-button" onClick={() => navigate('/decision')}>Decision Generator</button>
                <button className="project-button" onClick={() => navigate('/planner')}>Travel Planner</button>
                <button className="project-button" onClick={() => navigate('/checkout')}>Farfetch Checkout</button>
                <button className="project-button" onClick={() => navigate('/snake')}>Snake Game</button>
                <button className="project-button" onClick={() => navigate('/database')}>Database Entry</button>
                <button className="project-button" onClick={() => navigate('/tester')}>Vulnerability Tester</button>
            </div>
        
        <Routes>
            <Route path="/decision" element={<Decision />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/snake" element={<Snake />} />
            <Route path="/database" element={<Database />} />
            <Route path="/tester" element={<Tester />} />
        </Routes>
    </div>
    );
    }
  
  
  export default Projects;
