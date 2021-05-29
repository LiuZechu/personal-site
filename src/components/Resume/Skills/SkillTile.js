import React from 'react';
import PropTypes from 'prop-types';

const SkillTile = ({ data }) => {
  const { title } = data;

  return (
    <button className="skill-tile" type="button">
      {title}
    </button>
  );
};

SkillTile.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    competency: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default SkillTile;
