import React, { useState } from "react";
import "./Introduction.css";

const Introduction = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="introduction">
        <div className="text">
          <h1>Capture Your Precious Moments</h1>
          <p>
            Transform your special days into timeless memories with our professional photography services.
          </p>
          <p>Book a session today and let us bring your vision to life!</p>
          <button className="book-now-button" onClick={openModal}>
            Book Now
          </button>
        </div>
        <div className="image">
          <img src="/assets/139475623 (1).jpeg" alt="Photography Session" />
        </div>
      </div>

      <div className="services">
        <h2>Our Photography Packages</h2>
        <p>Choose from a range of services to suit your needs and preferences.</p>
        <div className="service-options">
          <div className="service-option">
            <h3>Portrait Session</h3>
            <p>Perfect for individuals, families, or couples.</p>
            <p>Starting at $150</p>
            <button className="book-service-button" onClick={openModal}>
              Book Now
            </button>
          </div>
          <div className="service-option">
            <h3>Event Photography</h3>
            <p>Comprehensive coverage for weddings, birthdays, and other events.</p>
            <p>Starting at $500</p>
            <button className="book-service-button" onClick={openModal}>
              Book Now
            </button>
          </div>
          <div className="service-option">
            <h3>Commercial Photography</h3>
            <p>Professional shots for businesses, products, and branding.</p>
            <p>Starting at $300</p>
            <button className="book-service-button" onClick={openModal}>
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Modal Section */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <h2>Book Your Session</h2>
            <form className="booking-form">
              <label>
                Name:
                <input type="text" placeholder="Your Name" required />
              </label>
              <label>
                Email:
                <input type="email" placeholder="Your Email" required />
              </label>
              <label>
                Date:
                <input type="date" required />
              </label>
              <label>
                Package:
                <select required>
                  <option value="portrait">Portrait Session</option>
                  <option value="event">Event Photography</option>
                  <option value="commercial">Commercial Photography</option>
                </select>
              </label>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Introduction;
