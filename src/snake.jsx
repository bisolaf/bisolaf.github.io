function Snake() {
    return (
        <div className="checkout-container"> 
          <h1>Snake Game</h1>
          <div className="horizontal-images-container">
            <img src='/snake1.png' alt="Snake 1" className="horizontal-image" />
            <img src='/snake2.png' alt="Snake 2" className="horizontal-image" />
            <img src='/snake3.png' alt="Snake 3" className="horizontal-image" />
        </div>
          <p className="horizontal-description">A Systems based approach to the Popular game, Snake. This was created in C and the application created focuses on a backend rendition which is pictured above!</p>
          <div className="button-center-wrapper"> 
            <a href="https://github.com/bisolaf/Snake" target="_blank" rel="noopener noreferrer">
             <button className="horizontal-button">GitHub Repo</button>
            </a>
          </div>
        </div>
      );
        
      
      }
      
      export default Snake;