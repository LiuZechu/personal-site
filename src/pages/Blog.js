import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import BlogTitle from '../components/Blog/BlogTitle';

import blogTitles from '../data/blog/blog_titles';

const Blog = () => (
  <Main
    title="Blog"
    description="Liu Zechu's Blog Posts"
  >
    <article className="post" id="blog">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/blog">Blog</Link></h2>
          <p>&ldquo;Knowledge increases by sharing but not by saving.&rdquo;</p>
        </div>
      </header>
      {blogTitles.map((blogTitle) => (
        <BlogTitle
          data={blogTitle}
          key={blogTitle.index}
        />
      ))}
    </article>
  </Main>
);

export default Blog;
