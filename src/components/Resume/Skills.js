import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CategoryButton from './Skills/CategoryButton';
import SkillTile from './Skills/SkillTile';
import RelevantProjects from './Skills/RelevantProjects';

import data from '../../data/projects';

const handleProps = ({ categories, skills }) => ({
  buttons: categories.map((cat) => cat.name).reduce((obj, key) => ({
    ...obj,
    [key]: false,
  }), { All: true }),
  skills,
  actSkill: null,
});

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = handleProps({ categories: props.categories, skills: props.skills });
  }

  // FOR SKILL-RELEVANT PROJECTS!
  handleSkillTileClick = (actSkill) => {
    console.log("HERE");
    this.setState({ actSkill });
  }

  getRelevantProjects() {
    return data.projects
      .filter((project) => project.skills.includes(this.state.actSkill))
      .map((project) => project.title);
  }

  getRows() {
    // search for true active categories
    const actCat = Object.keys(this.state.buttons).reduce((cat, key) => (
      this.state.buttons[key] ? key : cat
    ), 'All');

    return this.state.skills.sort((a, b) => {
      let ret = 0;
      if (a.competency > b.competency) ret = -1;
      else if (a.competency < b.competency) ret = 1;
      else if (a.category[0] > b.category[0]) ret = -1;
      else if (a.category[0] < b.category[0]) ret = 1;
      else if (a.title > b.title) ret = 1;
      else if (a.title < b.title) ret = -1;
      return ret;
    }).filter((skill) => (actCat === 'All' || skill.category.includes(actCat)))
      .map((skill) => (
        <SkillTile
          categories={this.props.categories}
          data={skill}
          key={skill.title}
          handleClick={this.handleSkillTileClick}
        />
      ));
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

  render() {
    return (
      <div className="skills">
        <div className="link-to" id="skills" />
        <div className="title">
          <h3>Skills</h3>
          <p>You may click on a skill to view related projects. [TODO]
          </p>
        </div>
        <div className="skill-button-container">
          {this.getButtons()}
        </div>
        <div className="skill-row-container">
          {this.getRows()}
        </div>
        <RelevantProjects data={{ projects: this.getRelevantProjects() }} />
      </div>
    );
  }
}

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    competency: PropTypes.number,
    category: PropTypes.arrayOf(PropTypes.string),
  })),
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  })),
};

Skills.defaultProps = {
  skills: [],
  categories: [],
};

export default Skills;
