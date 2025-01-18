import React from 'react';
import { FaLocationArrow, FaPhoneAlt, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";
import { FaLocationDot } from "react-icons/fa6";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_fewi78f', // Replace with EmailJS service ID
        'template_v3mt8sf', // Replace with EmailJS template ID
        form.current,
        'ioJRtI-c_kD5a6Ile' // Replace with EmailJS user ID
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          console.log(result.text);
        },
        (error) => {
          alert('Failed to send message. Please try again.');
          console.error(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id='contact'>
    <div className="contact-container">
      <h1 className="contact-heading">CONTACT US</h1>
      <div className="contact-box">
        {/* Left Section */}
        <div className="contact-details">
          <div className="detail-item">
            <FaLocationDot className="icon" />
            <div>
              <h3>Location:</h3>
              <p>
                MCT's Rajiv Gandhi Institute Of Technology,<br />
                Juhu Versova Link Rd,<br />
                Versova, Andheri West,<br />
                Mumbai - 400053
              </p>
            </div>
          </div>

          <div className="detail-item">
            <FaPhoneAlt className="icon" />
            <div>
              <h3>Contact Info:</h3>
              <p>Chairperson: +91 9920485637</p>
              <div className="social-icons">
                <FaInstagram className="social-icon" onClick={() => window.open('https://instagram.com/person1')} />
                <FaLinkedin className="social-icon" onClick={() => window.open('https://linkedin.com/in/person1')} />
                <SiGmail className="social-icon" onClick={() => window.open('mailto:person1@gmail.com')} />
              </div>
              <p>General Secretary: +91 8767855711</p>
              <div className="social-icons">
                <FaInstagram className="social-icon" onClick={() => window.open('https://instagram.com/person2')} />
                <FaLinkedin className="social-icon" onClick={() => window.open('https://linkedin.com/in/person2')} />
                <SiGmail className="social-icon" onClick={() => window.open('mailto:person2@gmail.com')} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="contact-form">
          <h2>Drop a Message</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="tel" name="mobile" placeholder="Mobile No" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;
