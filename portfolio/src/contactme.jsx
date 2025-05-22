function Contact() {
      return (
        <div className="contact-container"> {/* Main container for the Contact page */}
          <h1 className="contact-heading">Contact Me</h1> {/* Add a class for the heading */}
          
          <div className="contact-content"> {/* New div to center image and button */}
            <img
              src='/Profile.jpg' // Your main profile image
              alt="Adedoyin Bisola Folarin Profile"
              className="contact-profile-image" // A specific class for this image on Contact page
            />
            
            <a href="mailto:adedoyin_folarin@brown.edu" className="contact-email-link"> {/* Add a class to the <a> tag */}
              <button className="contact-button"> Email </button>
            </a>
          </div>
        </div>
      );
    }
  
  export default Contact;