import React from 'react';
import PropTypes from 'prop-types';

const SkillTile = ({ data, handleClick, isActive }) => {
  const { title } = data;

  return (
    <button className={isActive ? 'skill-tile-active' : 'skill-tile'} type="button" onClick={() => handleClick(title)}>
      {title}
    </button>
  );
};

SkillTile.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default SkillTile;
