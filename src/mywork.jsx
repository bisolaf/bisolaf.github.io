import { Routes, Route, useNavigate } from 'react-router-dom';
import Decision from './decisiontree';
import Planner from './travelplanner';
import Checkout from './checkout';
import Snake from './snake';
import Database from './database';

function Projects() {
    const navigate = useNavigate();
    return (
        <div className="projects-container"> 
            <div className="contact-content"> 
            <img
              src='/Profile.jpg' 
              alt="Adedoyin Bisola Folarin Profile"
              className="contact-profile-image" 
            />
            </div>
            <h1 className="projects-heading-left-aligned">My Projects</h1> 
            <div className="project-buttons-container"> 
                <button className="project-button" onClick={() => navigate('/decision')}>Decision Generator</button>
                <button className="project-button" onClick={() => navigate('/planner')}>Travel Planner</button>
                <button className="project-button" onClick={() => navigate('/checkout')}>Farfetch Checkout</button>
                <button className="project-button" onClick={() => navigate('/snake')}>Snake Game</button>
                <button className="project-button" onClick={() => navigate('/database')}>Database Entry</button>
            </div>
        
        <Routes>
            <Route path="/decision" element={<Decision />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/snake" element={<Snake />} />
            <Route path="/database" element={<Database />} />
        </Routes>
    </div>
    );
    }
  
  
  export default Projects;
