function Checkout() {
// In Checkout.jsx or wherever this code resides
return (
    <div className="checkout-container"> {/* Add a class to the main container */}
      <h1>Farfetch Shopping Cart</h1>
      <div className="horizontal-images-container">
        <img src='/Farfetch1.png' alt="Farfetch Example 1" className="horizontal-image" />
        <img src='/Farfetch2.png' alt="Farfetch Example 2" className="horizontal-image" />
        <img src='/Farfetch3.png' alt="Farfetch Example 3" className="horizontal-image" />
      </div>
      <p className="horizontal-description">This integrates Stripe in the Frontend and allows a new accessible checkout platform with user personalization</p>
      {/* Wrap button in a container or directly style the main div */}
      <div className="button-center-wrapper"> {/* New wrapper for centering */}
        <a href="https://github.com/bisolaf/Shopping-Cart-Checkout/tree/main" target="_blank" rel="noopener noreferrer">
         <button className="horizontal-button">GitHub Repo</button>
        </a>
      </div>
    </div>
  );
    
  
  }
  
  export default Checkout;