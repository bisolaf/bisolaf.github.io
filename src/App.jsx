import { Routes, Route, useNavigate } from 'react-router-dom';
import Projects from './mywork';
import Decision from './decisiontree';
import Planner from './travelplanner';
import Contact from './contactme';
import About from './aboutme.';
import Checkout from './checkout';
import './App.css'; // Correct way to import CSS

// Home component definition
function Home() {
  const navigate = useNavigate();
  const handleSelectChange = (event) => {
    const selectedPath = event.target.value;
    if (selectedPath) {
      navigate(selectedPath);
    }
  };

  return (
    <div className="home-container"> {/* Main container for the Home page, sets blue background */}
      <nav className="top-nav"> {/* Top fixed navigation bar */}
        <span className="nav-name">Adedoyin (Bisola) Folarin</span> {/* Your name on the left */}
        <div className="nav-links"> {/* Navigation links on the right */}
          <a href="/projects">Projects</a>
          <a href="https://github.com/bisolaf" target="_blank" rel="noopener noreferrer">Git</a> {/* Example GitHub link */}
          <a href="https://linkedin.com/in/bisolafolarin" target="_blank" rel="noopener noreferrer">LinkedIn</a> {/* Example LinkedIn link */}
          <a href="/contact">Contact</a>
        </div>
      </nav>

      <div className="hero-section"> {/* The main two-column layout section */}
        <div className="hero-left"> {/* Left column for image and camera icon */}
          <img
            src='/Profile.jpg' // Your main profile image
            alt="Adedoyin Bisola Folarin Profile"
            className="hero-profile-image" // Class for large circular image
          />
        </div>
        <div className="hero-right">
          <h1 className="hero-main-heading">
            Rising Senior at Brown University pursuing a Bachelors Degree in Computer Science & International & Public Affairs with interests in Cybersecurity, Fashion Tech, International Affairs, Systems and Software Engineering.
          </h1>
        </div>
      </div>

      {/* Intro Section - "I was born and raised..." text */}
      <div className="intro-section">
        <h2 className="intro-heading">About Me</h2>
        <p className="intro-text">I am from Lagos, Nigeria and went to High School in Dilijan, Armenia.</p>
      </div>
    </div>
  );
}

// Main App component - this is the one that should be exported
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/decision" element={<Decision />} />
      <Route path="/planner" element={<Planner />} />
      <Route path="/checkout" element={<Checkout />} />
      {/* Add routes for any new nav links here if they are new components */}
      {/* <Route path="/media" element={<Media />} /> */}
      {/* <Route path="/resume" element={<Resume />} /> */}
      {/* <Route path="/resources" element={<Resources />} /> */}
    </Routes>
  );
}

export default App;
