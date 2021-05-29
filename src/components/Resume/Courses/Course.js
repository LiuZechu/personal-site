import React from 'react';
import PropTypes from 'prop-types';

// Replaces original <a> tag to open URL in a new tab securely.
// Changed .eslintrc because of this.
const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
};

const Course = ({ data, last }) => (
  <li className="course-container">
    <a onClick={() => openInNewTab(data.link)}>
      <h4 className="course-number">{data.number}:</h4>
      <p className="course-name">{data.title}</p>
    </a>
    {!last && <div className="course-dot"><p className="course-name"> &#8226;</p></div>}
  </li>
);

Course.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  last: PropTypes.bool,
};

Course.defaultProps = {
  last: false,
};

export default Course;
