import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BlogTitle = ({ data }) => (
  <article className="degree-container">
    <header>
      <h2 className="school">
        <Link to={`/blogs/${data.index}`}>
          {data.title}
        </Link>
      </h2>
      <p className="degree">Index: {data.index}, {data.date}</p>
    </header>
  </article>
);

BlogTitle.propTypes = {
  data: PropTypes.shape({
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogTitle;
