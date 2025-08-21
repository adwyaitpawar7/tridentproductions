import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Contact.css';

const Contact = () => {
  const { state, dispatch } = useApp();
  const [ref, isIntersecting, hasIntersected] = useIntersectionObserver({
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '', phone: '' });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="container">
        <div className="contact__header">
          <h2 className={`contact__title ${hasIntersected ? 'animate-in' : ''}`}>
            Contact Us
          </h2>
          <p className={`contact__subtitle ${hasIntersected ? 'animate-in' : ''}`}>
            Let's bring your vision to life
          </p>
        </div>

        <div className="contact__content">
          <div className={`contact__info ${hasIntersected ? 'animate-in' : ''}`}>
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact__info-text">
                <h3>Address</h3>
                <p>Arkade Prime Makwana Rd, Gamdevi, Marol, Andheri East, Mumbai, Maharashtra 400059</p>
              </div>
            </div>
            
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact__info-text">
                <h3>Email Us</h3>
                <p>contact.tridentproductions@gmail.com</p>
              </div>
            </div>
            
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact__info-text">
                <h3>Call Us</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>
          </div>

          <div className={`contact__form-container ${hasIntersected ? 'animate-in' : ''}`}>
            {isSubmitted ? (
              <div className="contact__success">
                <i className="fas fa-check-circle"></i>
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you soon.</p>
                <button 
                  className="btn btn--primary"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name *"
                    className={`contact__form-input ${errors.name ? 'contact__form-input--error' : ''}`}
                  />
                  {errors.name && <span className="contact__form-error">{errors.name}</span>}
                </div>
                
                <div className="contact__form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email *"
                    className={`contact__form-input ${errors.email ? 'contact__form-input--error' : ''}`}
                  />
                  {errors.email && <span className="contact__form-error">{errors.email}</span>}
                </div>
                
                <div className="contact__form-group">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone (Optional)"
                    className="contact__form-input"
                  />
                </div>
                
                <div className="contact__form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message *"
                    rows="5"
                    className={`contact__form-input contact__form-textarea ${errors.message ? 'contact__form-input--error' : ''}`}
                  ></textarea>
                  {errors.message && <span className="contact__form-error">{errors.message}</span>}
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn--primary btn--full-width"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

