import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import CategoryButton from '../components/Resume/Skills/CategoryButton';
import data from '../data/projects';

const handleProps = ({ categories, projects }) => ({
  buttons: categories.map((cat) => cat.name).reduce((obj, key) => ({
    ...obj,
    [key]: false,
  }), { All: true }),
  projects,
});

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = handleProps({ categories: data.categories, projects: data.projects });
  }

  handleChildClick = (label) => {
    this.setState((prevState) => {
      // Toggle button that was clicked. Turn all other buttons off.
      const buttons = Object.keys(prevState.buttons).reduce((obj, key) => ({
        ...obj,
        [key]: (label === key) && !prevState.buttons[key],
      }), {});
      // Turn on 'All' button if other buttons are off
      buttons.All = !Object.keys(prevState.buttons).some((key) => buttons[key]);
      return { buttons };
    });
  }

  getButtons() {
    return Object.keys(this.state.buttons).map((key) => (
      <CategoryButton
        label={key}
        key={key}
        active={this.state.buttons}
        handleClick={this.handleChildClick}
      />
    ));
  }

  getCells() {
    // search for true active categories
    const actCat = Object.keys(this.state.buttons).reduce((cat, key) => (
      this.state.buttons[key] ? key : cat
    ), 'All');

    return this.state.projects
      .filter((project) => (actCat === 'All' || project.category.includes(actCat)))
      .map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ));
  }

  // TODO: reduce redundancy here
  getNumActiveProjects() {
    // search for true active categories
    const actCat = Object.keys(this.state.buttons).reduce((cat, key) => (
      this.state.buttons[key] ? key : cat
    ), 'All');

    return this.state.projects
      .filter((project) => (actCat === 'All' || project.category.includes(actCat)))
      .length;
  }

  render() {
    return (
      <Main
        title="Projects"
        description="Learn about Liu Zechu's projects."
      >
        <article className="post" id="projects">
          <header>
            <div className="title">
              <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
              <p>Click on a category to view related projects.</p>
            </div>
          </header>
          <div className="skill-button-container">
            {this.getButtons()}
          </div>
          <p>Scroll down to view all <b>{this.getNumActiveProjects()} projects</b>.</p>
          {this.getCells()}
        </article>
      </Main>
    );
  }
}

export default Projects;
