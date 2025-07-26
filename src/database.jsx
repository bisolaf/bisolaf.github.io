function Database() {
    return (
        <div className="checkout-container"> 
          <h1>Database Entry</h1>
          <div className="horizontal-images-container">
            <img src='/data1.png' alt="Data 1" className="horizontal-image" />
            <img src='/data2.png' alt="Data 2" className="horizontal-image" />
        </div>
          <p className="horizontal-description">This project focused on utilizing Spring Boot RESTAPI to create a POSTGRESQL Database Management System that creates, updates, and deletes client data. This project is backend focused and was created in JAVA.</p>
          <div className="button-center-wrapper"> 
            <a href="https://github.com/bisolaf/Database-entry" target="_blank" rel="noopener noreferrer">
             <button className="horizontal-button">GitHub Repo</button>
            </a>
          </div>
        </div>
      );
        
      
      }
      
      export default Database;