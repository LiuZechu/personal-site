import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <article className="degree-container">
    <header>
      <h2 className="school"><a href={data.link}>{data.school}</a></h2>
      <p className="degree">{data.degree}, {data.year}</p>
    </header>
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    school: PropTypes.string.isRequired,
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default Degree;
