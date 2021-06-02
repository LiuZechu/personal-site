import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';
import dayjs from 'dayjs';

import Main from '../layouts/Main';

import blogDescripts from '../data/blog/blog_descripts';

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const BlogPost = () => {
  // get URL params and markdown file to open
  // TODO: error checking for non int values!!!
  const { id } = useParams();
  let fileName = '';
  let blogTitle = '';
  let postDate = '';
  for (let i = 0; i < blogDescripts.length; i += 1) {
    const blogDescript = blogDescripts[i];
    if (blogDescript.index === parseInt(id, 10)) {
      fileName = blogDescript.file;
      blogTitle = blogDescript.title;
      postDate = blogDescript.date;
      break;
    }
  }

  // uses babel to load contents of file
  const markdown = raw(`../data/blog/${fileName}.md`);

  const count = markdown.split(/\s+/)
    .map((s) => s.replace(/\W/g, ''))
    .filter((s) => s.length).length;
  const readingTime = Math.ceil(count / 200); // In minutes

  return (
    <Main
      title="BlogPost"
      description="One of Liu Zechu's Blog Posts"
    >
      <article className="post markdown" id="post">
        <ul className="actions">
          <li><Link to="/blog" className="button">&lt;&lt; Read other posts</Link></li>
        </ul>
        <header>
          <div className="title">
            <h2 data-testid="heading">{blogTitle}</h2>
            <p>Written {dayjs(postDate).format('D MMM YYYY')}</p>
            <p>({readingTime} min read)</p>
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
      <ul className="actions">
        <li>
          <button onClick={() => window.scrollTo(0, 0)} type="button">
            Back to Top
          </button>
        </li>
      </ul>
    </Main>
  );
};

export default BlogPost;
