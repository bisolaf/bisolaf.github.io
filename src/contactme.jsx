function Contact() {
      return (
        <div className="contact-container"> 
          <h1 className="contact-heading">Contact Me</h1> 
          
          <div className="contact-content"> 
            <img
              src='Profile.png' 
              alt="Adedoyin Bisola Folarin Profile"
              className="contact-profile-image"
            />
            
            <a href="mailto:adedoyin_folarin@brown.edu" className="contact-email-link"> 
              <button className="contact-button"> Email </button>
            </a>
          </div>
        </div>
      );
    }
  
  export default Contact;