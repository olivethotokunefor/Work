import React, { useEffect, useRef } from "react";
import { Mail, Phone, Github, Linkedin, Instagram } from "lucide-react";
import "../css/ContactSection.css";

const ContactSection = () => {
  const contactRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const animateOnScroll = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(animateOnScroll, {
      threshold: 0.2,
    });

    if (contactRef.current) observer.observe(contactRef.current);
    if (formRef.current) observer.observe(formRef.current);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contactcontainer">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind or want to discuss how data analytics can help your business? I'm just a message away.
          </p>
        </div>

        <div className="contact-grid">
          <div ref={contactRef} className="card contact-card slide-in-left">
            <h3 className="contact-heading">Contact Information</h3>
            <div className="contact-info">
              <div className="info-item">
                <div className="icon-box purple-bg"><Mail /></div>
                <div>
                  <p className="label">Email</p>
                  <p className="value">victoriaraymond133@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-box blue-bg"><Phone /></div>
                <div>
                  <p className="label">Phone</p>
                  <p className="value">+234 8138937876</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-box green-bg"><Linkedin /></div>
                <div>
                  <p className="label">LinkedIn</p>
                  <p className="value">linkedin.com/in/victoria-raymond</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-box orange-bg"><Instagram /></div>
                <div>
                  <p className="label">Instagram</p>
                  <p className="value">instagram.com/Divas_place_</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Connect With Me</h4>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/victoria-raymond-132045298/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
                <a href="https://www.instagram.com/di_vas_lux_store_/" target="_blank" rel="noopener noreferrer"><Instagram /></a>
                <a href="mailto:victoriaraymond133@gmail.com"><Mail /></a>
              </div>
            </div>
          </div>

          <div ref={formRef} className="card form-card slide-in-right">
            <h3 className="contact-heading">Send Me a Message</h3>
           <form
  action="mailto:victoriaraymond133@gmail.com"
  method="POST"
  encType="text/plain"
>
  <div className="form-row">
    <div className="form-group">
      <label htmlFor="name">Your Name</label>
      <input id="name" name="Name" type="text" placeholder="John Doe" required />
    </div>
    <div className="form-group">
      <label htmlFor="email">Your Email</label>
      <input id="email" name="Email" type="email" placeholder="john@example.com" required />
    </div>
  </div>

  <div className="form-group">
    <label htmlFor="subject">Subject</label>
    <input id="subject" name="Subject" type="text" placeholder="How can I help you?" required />
  </div>

  <div className="form-group">
    <label htmlFor="message">Message</label>
    <textarea id="message" name="Message" rows="5" placeholder="Your message here..." required />
  </div>

  <button type="submit" className="submit-button">
    Send Message
  </button>
</form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
