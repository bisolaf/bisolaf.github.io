import { Routes, Route, useNavigate } from 'react-router-dom';
import Projects from './mywork';
import Decision from './decisiontree';
import Planner from './travelplanner';
import Contact from './contactme';
import About from './aboutme.';
import Checkout from './checkout';
import Snake from './snake';
import Database from './database';
import Tester from './vuln-tester';
import './App.css'; 

function Home() {
  const navigate = useNavigate();
  const handleSelectChange = (event) => {
    const selectedPath = event.target.value;
    if (selectedPath) {
      navigate(selectedPath);
    }
  };

  return (
    <div className="home-container"> 
      <nav className="top-nav"> 
        <span className="nav-name">Adedoyin (Bisola) Folarin</span> 
        <div className="nav-links"> 
          <a href="/projects">Projects</a>
          <a href="https://github.com/bisolaf" target="_blank" rel="noopener noreferrer">Git</a> 
          <a href="https://www.linkedin.com/in/bisola-folarin-3a6051231/" target="_blank" rel="noopener noreferrer">LinkedIn</a> 
          <a href="/contact">Contact</a>
        </div>
      </nav>

      <div className="hero-section"> 
        <div className="hero-left"> 
          <img
            src='/Profile.png' 
            alt="Adedoyin Bisola Folarin Profile"
            className="hero-profile-image" 
          />
        </div>
        <div className="hero-right">
          <h1 className="hero-main-heading">
            Rising Senior at Brown University pursuing a Bachelors Degree in Computer Science & International & Public Affairs with interests in Cybersecurity, Fashion Tech, International Affairs, Systems and Software Engineering.
          </h1>
        </div>
      </div>

      
      <div className="intro-section">
        <h2 className="intro-heading">About Me</h2>
        <p className="intro-text">I am from Lagos, Nigeria and went to High School in Dilijan, Armenia.</p>
      </div>
    </div>
  );
}


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
      <Route path="/snake" element={<Snake />} />
      <Route path="/database" element={<Database />} />
      <Route path="/tester" element={<Tester />} />
      {/* <Route path="/media" element={<Media />} /> */}
      {/* <Route path="/resume" element={<Resume />} /> */}
      {/* <Route path="/resources" element={<Resources />} /> */}
    </Routes>
  );
}

export default App;
