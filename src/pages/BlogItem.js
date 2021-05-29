import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../layouts/Main';

import blogTitles from '../data/blog/blog_titles';

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const BlogItem = () => {
  // get URL params and markdown file to open
  // TODO: error checking for non int values!!!
  const { id } = useParams();
  let fileName = '';
  for (let i = 0; i < blogTitles.length; i += 1) {
    const blogTitle = blogTitles[i];
    if (blogTitle.index === parseInt(id, 10)) {
      fileName = blogTitle.file;
      break;
    }
  }

  // uses babel to load contents of file
  const markdown = raw(`../data/blog/${fileName}.md`);

  const count = markdown.split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;

  return (
    <Main
      title="BlogItem"
      description="One of Liu Zechu's Blog Posts"
    >
      <article className="post markdown" id="post">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/xxxxxx">Blog</Link></h2>
            <p>(in about {count} words)</p>
          </div>
        </header>
        <ReactMarkdown
          source={markdown}
          renderers={{
            Link: LinkRenderer,
          }}
          escapeHtml={false}
        />
      </article>
    </Main>
  );
};

export default BlogItem;
