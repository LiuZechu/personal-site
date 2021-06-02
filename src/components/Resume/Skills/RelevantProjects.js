import React from 'react';
import PropTypes from 'prop-types';

const RelevantProjects = ({ data }) => (
  <ul className="points">
    {data.projects.map((project) => (
      <li key={project}>{project}</li>
    ))}
  </ul>
);

RelevantProjects.propTypes = {
  data: PropTypes.shape({
    projects: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default RelevantProjects;
