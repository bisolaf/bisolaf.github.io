function Planner() {
    return (
           <div className="travel-planner-container">
            <h1 className="travel-planner-heading">Travel Planner</h1>
            <img
                src="/travel planner.png" 
                alt="Travel Planner Diagram"
                className="travel-planner-image"
            />
            <p className="travel-planner-description">
                This uses the BFS, DFS and Dijkstra algorithms to choose best routes for travel
            </p>
            <a href="https://github.com/bisolaf/Travel-Planner" target="_blank" rel="noopener noreferrer">
                <button className="repo-button">GitHub Repo</button>
            </a>
            </div>
    
    );
  }
  
  export default Planner;