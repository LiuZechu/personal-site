import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ data }) => (
  <article className="research-container">
    <header>
      <h4>{data.title}</h4>
      <p className="keywords"> {`Keywords: ${data.keywords}`}</p>
      <p className="daterange"> {data.daterange}</p>
    </header>
    <h5>
      {data.description}
    </h5>
  </article>
);

Project.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    daterange: PropTypes.string.isRequired,
    keywords: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Project;
