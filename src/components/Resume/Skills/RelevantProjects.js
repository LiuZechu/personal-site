import React from 'react';
import PropTypes from 'prop-types';

const RelevantProjects = ({ data }) => (
  <div className="relevant-projects-container">
    {data.projects.length > 0 ? <h4>Projects Related to [{data.skill}]:</h4> : null}
    {data.projects.map((project) => (
      <h3 key={project.title}>
        <a href={project.link} target="_blank">{project.title}</a>
      </h3>
    ))}
  </div>
);

RelevantProjects.propTypes = {
  data: PropTypes.shape({
    projects: PropTypes.arrayOf(PropTypes.shape({
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })).isRequired,
    skill: PropTypes.string,
  }).isRequired,
};

export default RelevantProjects;
