import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const BlogRow = ({ data }) => (
  <article className="degree-container">
    <header>
      <h2 className="school">
        <Link to={`/blogs/${data.index}`}>
          {data.title}
        </Link>
      </h2>
      <p className="degree">{dayjs(data.date).format('D MMM YYYY')}</p>
    </header>
  </article>
);

BlogRow.propTypes = {
  data: PropTypes.shape({
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogRow;
