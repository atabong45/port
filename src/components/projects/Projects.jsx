import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Projects.css';

const Projects = () => {
  const { t } = useTranslation();

  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/atabong45",
      liveUrl: "https://example.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Firebase", "Material-UI"],
      githubUrl: "https://github.com/atabong45",
      liveUrl: "https://example.com"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["JavaScript", "CSS3", "Weather API"],
      githubUrl: "https://github.com/atabong45",
      liveUrl: "https://example.com"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern portfolio website with dark/light theme and i18n support",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "CSS3", "i18next"],
      githubUrl: "https://github.com/atabong45",
      liveUrl: "https://example.com"
    },
    {
      id: 5,
      title: "Network Monitor",
      description: "A network monitoring tool for tracking system performance",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Flask", "Chart.js"],
      githubUrl: "https://github.com/atabong45",
      liveUrl: "https://example.com"
    },
    {
      id: 6,
      title: "Cybersecurity Dashboard",
      description: "A security monitoring dashboard for threat detection",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "D3.js", "Node.js"],
      githubUrl: "https://github.com/atabong45",
      liveUrl: "https://example.com"
    }
  ];

  return (
    <section className="projects section">
      <div className="container">
        <Link to="/" className="projects__back-btn button button--flex">
          <i className="uil uil-arrow-left"></i>
          {t('projects.backToHome')}
        </Link>
        
        <h2 className="section__title">{t('projects.title')}</h2>
        <span className="section__subtitle">{t('projects.subtitle')}</span>

        <div className="projects__container grid">
          {projectsData.map((project) => (
            <div key={project.id} className="projects__card">
              <div className="projects__img-container">
                <img src={project.image} alt={project.title} className="projects__img" />
                <div className="projects__overlay">
                  <div className="projects__buttons">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="projects__button button"
                    >
                      <i className="uil uil-github"></i>
                      {t('projects.viewCode')}
                    </a>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="projects__button button"
                    >
                      <i className="uil uil-external-link-alt"></i>
                      {t('projects.viewProject')}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="projects__content">
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__description">{project.description}</p>
                
                <div className="projects__technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="projects__tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;