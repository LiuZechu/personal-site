import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Liu Zechu's personal website. Computer Science student in NUS, "
    + 'Class of 2022.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            A beautiful, responsive, statically-generated,
            React application written with modern JavaScript.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        read my <Link to="/blog">blog</Link>, {' '}
        view <Link to="/stats">site statistics</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p>
        Source available <a href="https://github.com/LiuZechu/personal-site">here</a>. <br />
        Credits: this website was forked and adapted from <a href="https://github.com/mldangelo/personal-site">this repo</a>.
      </p>
    </article>
  </Main>
);

export default Index;
