import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      
       <div className="committee-contact">
        <h2>Committee Contact</h2>
        
 
        <div className="social-links">
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i> Email
          </a>
          <a href="https://www.instagram.com/committee" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://www.linkedin.com/company/committee" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>

      
      <div className="contact-details">
        <h2>Chairperson</h2>
        <p>Name: </p>
        <p>Email:</p>
        <p>Phone: </p>
      </div>

   
      <div className="contact-details">
        <h2>Secretary</h2>
        <p>Name: </p>
        <p>Email:</p>
        <p>Phone: </p>
      </div>

    </div>
  );
}

export default Contact;



