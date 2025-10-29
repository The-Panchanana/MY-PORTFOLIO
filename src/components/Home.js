import React from 'react';

const Home = () => {
  return (
    <section id="home" style={homeStyle}>
      <div className="container" style={containerStyle}>
        <div style={profileImageStyle}>
          <img src="/PHOTO PROFFESIONAL.jpg" alt="Panchanana Dash" style={imageStyle} />
        </div>
        <h1 style={titleStyle}>Panchanana Dash</h1>
        <p style={subtitleStyle}>Software Engineer | SAP ABAP Developer & Full Stack Web Developer</p>
        <p style={descStyle}>
          Experienced in enterprise SAP solutions and modern web technologies. 
          Passionate about creating efficient, scalable applications.
        </p>
        <div style={btnGroupStyle}>
          <button onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })} 
                  className="btn" style={btnHoverStyle}>View Skills</button>
          <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} 
                  className="btn btn-secondary" style={{...btnHoverStyle, marginLeft: '15px', background: '#ffffff', color: '#87CEEB', border: '2px solid #87CEEB'}}>View Projects</button>
        </div>
      </div>
    </section>
  );
};

const homeStyle = {
  background: 'linear-gradient(135deg, #87CEEB 0%, #ffffff 100%)',
  color: '#000000',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  paddingTop: '80px'
};

const containerStyle = {
  textAlign: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px'
};

const profileImageStyle = {
  width: '200px',
  height: '200px',
  margin: '0 auto 2rem',
  borderRadius: '50%',
  overflow: 'hidden',
  border: '5px solid #87CEEB',
  animation: 'float 3s ease-in-out infinite',
  transition: 'transform 0.3s ease'
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover'
};

const titleStyle = {
  fontSize: '3.5rem',
  marginBottom: '1rem',
  color: '#000000',
  transition: 'all 0.3s ease',
  fontFamily: 'Arial, sans-serif',
  cursor: 'pointer'
};

const subtitleStyle = {
  fontSize: '1.5rem',
  marginBottom: '1rem',
  color: '#000000',
  opacity: 0.8,
  transition: 'transform 0.3s ease'
};

const descStyle = {
  fontSize: '1.1rem',
  marginBottom: '2rem',
  maxWidth: '600px',
  margin: '0 auto 2rem',
  color: '#000000',
  transition: 'transform 0.3s ease'
};

const btnGroupStyle = {
  marginTop: '2rem'
};

const btnHoverStyle = {
  background: '#87CEEB',
  color: '#000000',
  border: 'none',
  padding: '12px 24px',
  borderRadius: '8px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  transform: 'translateY(0)'
};

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  .btn:hover {
    transform: translateY(-5px) !important;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2) !important;
  }
  
  h1:hover {
    transform: scale(1.05) !important;
  }
  
  p:hover {
    transform: translateX(10px) !important;
  }
  
  div[style*="profileImageStyle"]:hover {
    transform: scale(1.1) !important;
  }
`;
document.head.appendChild(style);

export default Home;