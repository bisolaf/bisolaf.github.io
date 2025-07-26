function Tester() {
    return (
        <div className="checkout-container"> 
          <h1>Vulnerability Tester</h1>
          <div className="horizontal-images-container">   
              <img src='/test1.png' alt="Tester 1" className="horizontal-image" />
              <img src='/test2.png' alt="Tester 2" className="horizontal-image" />
            </div>
          <p className="horizontal-description">This Python based application is a cybersecurity tool to test devices and log attempts on a network/server. It uses the Nmap module to ensure that no corrupted devices are in circulation on a shared network.</p>
          <div className="button-center-wrapper"> 
            <a href="https://github.com/bisolaf/Vulnerability-Test" target="_blank" rel="noopener noreferrer">
             <button className="horizontal-button">GitHub Repo</button>
            </a>
          </div>
        </div>
      );
        
      
      }
      
      export default Tester;