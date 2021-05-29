import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Liu Zechu</h2>
        <p><a href="mailto:liuzechu2013@gmail.com">liuzechu2013@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Zechu. I like learning and creating new things.
        I&apos;m a senior undergraduate student in the <a href="https://nus.edu.sg/">National University of Singapore (NUS)</a>, graduating in June 2022.
        I major in Computer Science, and I&apos;m also in the <a href="https://www.usp.nus.edu.sg/">Univeristy Scholars Programme (USP)</a>.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname.includes('/about') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Liu Zechu <Link to="/">xxxxxxxx.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
