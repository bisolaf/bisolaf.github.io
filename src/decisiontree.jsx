function Decision() {
    return (
      <div className="travel-planner-container">
        <h1 className="travel-planner-heading">Decision Tree</h1>
        <p className="travel-planner-description">This algorithim helps use ordering to streamline attributes/nodes to determine a final decision!</p>
        <img
        src='/College Admissions Decision Tree.png'
        alt="College Admissions Decision Tree" 
        className="travel-planner-image"
      />
       <a href="https://github.com/bisolaf/Decison-Generator" target="_blank" rel="noopener noreferrer">
        <button className="repo-button">GitHub Repo</button>
        </a>
      </div>
    );
  }
  
  export default Decision;