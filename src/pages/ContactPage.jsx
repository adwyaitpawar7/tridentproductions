import React from 'react';
import Contact from '../components/sections/Contact';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">Get In Touch</h1>
          <p className="page-hero__subtitle">
            Ready to bring your vision to life? Let's discuss your project and explore how we can help you create exceptional content.
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;

