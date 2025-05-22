import { Routes, Route, useNavigate } from 'react-router-dom';
import Decision from './decisiontree';
import Planner from './travelplanner';
import Checkout from './checkout';

function Projects() {
    const navigate = useNavigate();
    return (
        <div className="projects-container"> {/* Back to a single container */}
            <div className="contact-content"> {/* New div to center image and button */}
            <img
              src='/Profile.jpg' // Your main profile image
              alt="Adedoyin Bisola Folarin Profile"
              className="contact-profile-image" // A specific class for this image on Contact page
            />
            </div>
            <h1 className="projects-heading-left-aligned">My Projects</h1> {/* Left-aligned heading */}
            <div className="project-buttons-container"> {/* Left-aligned buttons */}
                <button className="project-button" onClick={() => navigate('/decision')}>Decision Generator</button>
                <button className="project-button" onClick={() => navigate('/planner')}>Travel Planner</button>
                <button className="project-button" onClick={() => navigate('/checkout')}>Farfetch Checkout</button>
            </div>
        
        <Routes>
            <Route path="/decision" element={<Decision />} />
            <Route path="/planner" element={<Planner />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
    </div>
    );
    }
  
  
  export default Projects;
