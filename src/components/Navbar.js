import React from 'react';

const Navbar = () => {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav style={navStyle}>
      <div className="container" style={containerStyle}>
        <h2 className="logo" style={logoStyle}>Panchanana Dash</h2>
        <ul style={navListStyle}>
          <li><button onClick={() => scrollTo('home')} style={navLinkStyle}>Home</button></li>
          <li><button onClick={() => scrollTo('skills')} style={navLinkStyle}>Skills</button></li>
          <li><button onClick={() => scrollTo('projects')} style={navLinkStyle}>Projects</button></li>
          <li><button onClick={() => scrollTo('contact')} style={navLinkStyle}>Contact</button></li>

        </ul>
      </div>
    </nav>
  );
};

const navStyle = {
  background: '#ffffff',
  boxShadow: '0 2px 10px rgba(135, 206, 235, 0.3)',
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 1000,
  padding: '1rem 0'
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px'
};

const logoStyle = {
  color: '#87CEEB',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  display: 'inline-block',
  fontWeight: 'bold',
  margin: 0,
  padding: '5px',
  fontFamily: 'Arial, sans-serif'
};

const navListStyle = {
  display: 'flex',
  listStyle: 'none',
  alignItems: 'center',
  gap: '20px'
};

const navLinkStyle = {
  background: 'none',
  border: 'none',
  color: '#000000',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'all 0.3s ease',
  padding: '8px 12px',
  borderRadius: '20px',
  fontWeight: '500'
};

const navLinkHoverStyle = {
  ...navLinkStyle,
  background: '#87CEEB',
  color: '#000000'
};

const resumeBtnStyle = {
  fontSize: '14px',
  padding: '8px 16px'
};

export default Navbar;