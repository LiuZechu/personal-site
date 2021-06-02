import React from 'react';
import PropTypes from 'prop-types';

const SkillTile = ({ data, handleClick }) => {
  const { title } = data;

  return (
    <button className="skill-tile" type="button" onClick={() => handleClick(title)}>
      {title}
    </button>
  );
};

SkillTile.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    competency: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
  }).isRequired,
};

export default SkillTile;
