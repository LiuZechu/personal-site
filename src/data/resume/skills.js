// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

// Categories: Languages, Web Dev, Mobile App Dev, Machine Learning, Other

const LANGUAGES = 'Languages';
const BACKEND = 'Backend';
const WEB_DEV = 'Web Dev';
const MOBILE_APP_DEV = 'Mobile App Dev';
const MACHINE_LEARNING = 'ML';
const OTHER = 'Tools';

const skills = [
  {
    title: 'Javascript',
    category: [LANGUAGES, WEB_DEV],
  },
  {
    title: 'Node.JS',
    category: [BACKEND],
  },
  {
    title: 'React',
    category: [WEB_DEV],
  },
  {
    title: 'Vue.JS',
    category: [WEB_DEV],
  },
  {
    title: 'Flutter Web',
    category: [WEB_DEV],
  },
  {
    title: 'Ruby on Rails',
    category: [WEB_DEV],
  },
  {
    title: 'Heroku',
    category: [BACKEND],
  },
  {
    title: 'SQL/PostgreSQL',
    category: [BACKEND, LANGUAGES],
  },
  {
    title: 'Express.JS',
    category: [BACKEND],
  },
  {
    title: 'Git',
    category: [OTHER],
  },
  {
    title: 'Linux',
    category: [OTHER],
  },
  {
    title: 'Numpy',
    category: [MACHINE_LEARNING],
  },
  {
    title: 'Tensorflow + Keras',
    category: [MACHINE_LEARNING],
  },
  {
    title: 'PyTorch',
    category: [MACHINE_LEARNING],
  },
  {
    title: 'HTML + CSS',
    category: [WEB_DEV, LANGUAGES],
  },
  {
    title: 'Python',
    category: [LANGUAGES],
  },
  {
    title: 'C++',
    category: [LANGUAGES],
  },
  {
    title: 'Ruby',
    category: [LANGUAGES],
  },
  {
    title: 'Dart',
    category: [LANGUAGES],
  },
  {
    title: 'LATEX',
    category: [OTHER],
  },
  {
    title: 'Pandas',
    category: [MACHINE_LEARNING],
  },
  {
    title: 'Scikit-Learn',
    category: [MACHINE_LEARNING],
  },
  {
    title: 'Natural Language Processing (NLP)',
    category: [MACHINE_LEARNING],
  },
  {
    title: 'Reinforcement Learning',
    category: [MACHINE_LEARNING],
  },
  {
    title: 'Java',
    category: [LANGUAGES, MOBILE_APP_DEV],
  },
  {
    title: 'Swift',
    category: [LANGUAGES, MOBILE_APP_DEV],
  },
  {
    title: 'Android Dev',
    category: [MOBILE_APP_DEV],
  },
  {
    title: 'iOS Dev',
    category: [MOBILE_APP_DEV],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category) => ({
    name: category,
  }));

export { categories, skills };
