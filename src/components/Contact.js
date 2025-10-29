import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={sectionStyle}>
      <div className="container">
        <h2 style={titleStyle}>Contact Me</h2>
        <div style={contactGridStyle}>
          <div style={contactInfoStyle}>
            <h3>Get In Touch</h3>
          <a><p style={contactItemStyle}>📧 thepanchanana@gmail.com</p></a>
            <p style={contactItemStyle}>📱 +91 72057 97999</p>
           <a> <p style={contactItemStyle}>🌐www.linkedin.com/in/thepanchanana</p></a>
            <a><p style={contactItemStyle}>💻 https://github.com/The-Panchanana</p></a>
          </div>
          <form style={formStyle}>
            <input type="text" placeholder="Your Name" style={inputStyle} />
            <input type="email" placeholder="Your Email" style={inputStyle} />
            <textarea placeholder="Your Message" rows="5" style={textareaStyle}></textarea>
            <button type="submit" className="btn" style={submitBtnStyle}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

const sectionStyle = {
  background: '#f8f9fa',
  padding: '80px 0'
};

const titleStyle = {
  textAlign: 'center',
  marginBottom: '3rem',
  fontSize: '2.5rem',
  color: '#333333',
  fontWeight: 'bold'
};

const contactGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '3rem',
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '0 20px'
};

const contactInfoStyle = {
  background: '#ffffff',
  padding: '2rem',
  borderRadius: '15px',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
  border: '1px solid #e9ecef',
  transition: 'border 0.3s ease'
};

const contactItemStyle = {
  margin: '1rem 0',
  fontSize: '1.1rem',
  color: '#333333'
};

const formStyle = {
  background: '#ffffff',
  padding: '2rem',
  borderRadius: '15px',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
  border: '1px solid #e9ecef',
  transition: 'border 0.3s ease'
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  margin: '0.5rem 0',
  border: '1px solid #e9ecef',
  borderRadius: '8px',
  fontSize: '16px',
  background: '#ffffff',
  color: '#333333'
};

const textareaStyle = {
  ...inputStyle,
  resize: 'vertical'
};

const submitBtnStyle = {
  width: '100%',
  marginTop: '1rem'
};

export default Contact;