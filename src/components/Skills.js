import React, { useState } from 'react';

const Skills = () => {
  const [showSAPSkills, setShowSAPSkills] = useState(false);
  const [showWebSkills, setShowWebSkills] = useState(false);
  
  const sapSkills = ['ABAP Programming/Module Pool Programming', 'DDIC/View/Search Help', 'OOPS ABAP', 'SAP Fiori/UI5', 'Report','OData'];
  const webSkills = ['HTML5 & CSS3', 'JavaScript (ES6+)', 'React.js', 'Node.js', 'Express.js', 'MongoDB'];

  return (
    <section id="skills" style={sectionStyle}>
      <div className="container">
        <h2 style={titleStyle}>Technical Skills</h2>
        
        <div style={skillsGridStyle}>
          <div style={skillCategoryStyle}>
            <div style={skillHeaderStyle}>
              <h3 style={categoryTitleStyle}>SAP ABAP Development</h3>
              <div style={buttonGroupStyle}>
                <button 
                  onClick={() => setShowSAPSkills(!showSAPSkills)} 
                  className="btn" 
                  style={toggleBtnStyle}>
                  {showSAPSkills ? 'Hide Skills' : 'View Skills'}
                </button>
                <a href="/resumes/Panchanana_Dash.pdf" download className="btn btn-secondary" style={resumeBtnStyle}>
                  Download SAP Resume
                </a>
              </div>
            </div>
            {showSAPSkills && (
              <ul style={skillListStyle}>
                {sapSkills.map((skill, index) => (
                  <li key={index} style={skillItemStyle}>{skill}</li>
                ))}
              </ul>
            )}
          </div>
          
          <div style={skillCategoryStyle}>
            <div style={skillHeaderStyle}>
              <h3 style={categoryTitleStyle}>Web Development</h3>
              <div style={buttonGroupStyle}>
                <button 
                  onClick={() => setShowWebSkills(!showWebSkills)} 
                  className="btn" 
                  style={toggleBtnStyle}>
                  {showWebSkills ? 'Hide Skills' : 'View Skills'}
                </button>
                <a href="/resumes/Panchanana_Dash_Resume.pdf" download className="btn btn-secondary" style={resumeBtnStyle}>
                  Download Web Resume
                </a>
              </div>
            </div>
            {showWebSkills && (
              <ul style={skillListStyle}>
                {webSkills.map((skill, index) => (
                  <li key={index} style={skillItemStyle}>{skill}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const sectionStyle = {
  background: 'linear-gradient(135deg, #ffffff 0%, #87CEEB 100%)',
  padding: '80px 0'
};

const titleStyle = {
  textAlign: 'center',
  marginBottom: '3rem',
  fontSize: '2.5rem',
  color: '#000000',
  fontWeight: 'bold'
};

const skillsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px'
};

const skillCategoryStyle = {
  background: '#ffffff',
  padding: '2rem',
  borderRadius: '15px',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
  border: '1px solid #e9ecef',
  transition: 'border 0.3s ease'
};

const skillHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1rem',
  flexWrap: 'wrap',
  gap: '1rem'
};

const buttonGroupStyle = {
  display: 'flex',
  gap: '10px',
  flexWrap: 'wrap'
};

const toggleBtnStyle = {
  fontSize: '14px',
  padding: '8px 16px',
  background: '#87CEEB',
  color: '#000000',
  border: 'none',
  borderRadius: '6px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s ease'
};

const resumeBtnStyle = {
  fontSize: '12px',
  padding: '6px 12px',
  background: '#ffffff',
  color: '#87CEEB',
  border: '2px solid #87CEEB',
  borderRadius: '6px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  textDecoration: 'none',
  display: 'inline-block'
};

const categoryTitleStyle = {
  color: '#87CEEB',
  marginBottom: '1.5rem',
  fontSize: '1.5rem',
  fontWeight: 'bold'
};

const skillListStyle = {
  listStyle: 'none'
};

const skillItemStyle = {
  padding: '0.5rem 0',
  borderBottom: '1px solid #e9ecef',
  fontSize: '1.1rem',
  color: '#000000'
};

export default Skills;