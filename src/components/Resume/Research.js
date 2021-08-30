import React from 'react';
import PropTypes from 'prop-types';

import Project from './Research/Project';

const Research = ({ data }) => (
  <div className="research">
    <div className="link-to" id="research" />
    <div className="title">
      <h3>Research</h3>
    </div>
    {data.map((project) => (
      <Project
        data={project}
        key={project.title}
      />
    ))}
  </div>
);

Research.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    daterange: PropTypes.string,
    keywords: PropTypes.string,
    description: PropTypes.string,
  })),
};

Research.defaultProps = {
  data: [],
};

export default Research;
