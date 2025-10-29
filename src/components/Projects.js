import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'SAP Employee Table Management',
      category: 'SAP ABAP',
      description: `Developed an Employee Management System in SAP ABAP with custom tables, Module Pool programming, ALV reports, and optimized CRUD operations using internal tables and modularization techniques.`,
      tech: 'SAP ABAP Data Dictionary, Reports, Module Pool, ALV,SAP GUI.'
    },
    {
      title: 'E-Commerce Web Application',
      category: 'Web Development',
      description: `Full-stack web development project featuring an e-commerce platform with clone web page design, user authentication, payment integration, and an interactive admin dashboard.`   , 
      tech: 'HTML5, CSS, JavaScript, Bootstrap, React, Node.js, MongoDB, Express.'
    },
   {
  title: 'Natural Disaster Prediction Using ML',
  category: 'Machine Learning',
  description: 'Developed a machine learning model to predict natural disasters based on historical and real-time data using data preprocessing, feature engineering, and classification algorithms for accurate forecasting.',
  tech: 'Python, Scikit-learn, Pandas, NumPy, Matplotlib, Jupyter Notebook.'
}
];

  return (
    <section id="projects" style={sectionStyle}>
      <div className="container">
        <h2 style={titleStyle}>Projects</h2>
        <div style={projectsGridStyle}>
          {projects.map((project, index) => (
            <div key={index} style={projectCardStyle}>
              <span style={categoryBadgeStyle}>{project.category}</span>
              <h3 style={projectTitleStyle}>{project.title}</h3>
              <p style={projectDescStyle}>{project.description}</p>
              <p style={techStyle}><strong>Technologies:</strong> {project.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const sectionStyle = {
  background: 'linear-gradient(135deg, #87CEEB 0%, #ffffff 100%)',
  padding: '80px 0'
};

const titleStyle = {
  textAlign: 'center',
  marginBottom: '3rem',
  fontSize: '2.5rem',
  color: '#000000',
  fontWeight: 'bold'
};

const projectsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px'
};

const projectCardStyle = {
  background: '#ffffff',
  padding: '2rem',
  borderRadius: '15px',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
  border: '1px solid #e9ecef',
  transition: 'all 0.3s ease'
};

const categoryBadgeStyle = {
  background: '#87CEEB',
  color: '#000000',
  padding: '0.3rem 0.8rem',
  borderRadius: '15px',
  fontSize: '0.8rem',
  fontWeight: 'bold'
};

const projectTitleStyle = {
  margin: '1rem 0',
  color: '#000000',
  fontWeight: 'bold'
};

const projectDescStyle = {
  color: '#000000',
  marginBottom: '1rem',
  lineHeight: '1.6',
  opacity: 0.8
};

const techStyle = {
  color: '#87CEEB',
  fontSize: '0.9rem',
  fontWeight: 'bold'
};

export default Projects;