import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name:
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            Email:
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </label>
          <label>
            Message:
            <textarea 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            ></textarea>
          </label>
          <button type="submit">Send Message</button>
        </form>
      ) : (
        <div className="contact-thankyou">
          <p>Thank you for reaching out! We'll get back to you soon.</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
