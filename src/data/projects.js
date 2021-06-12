// TODO Add a couple lines about each project

// Various project categories
const ML_AI = 'ML/AI';
const APP = 'Mobile App';
const WEB = 'Web';
const OTHER = 'Other';

const projects = [
  {
    title: 'GitHub Issue Auto-labeller',
    subtitle: 'Natural Lanuage Processing with information extraction and text categorisation',
    link: 'https://github.com/larrylawl/auto-github-issue-labeller-action',
    image: '/images/projects/github.gif',
    date: 'Mar 2021 - Apr 2021',
    desc:
      'Automatically labelling GitHub issues with NLP. '
      + 'You may try it out on your own GitHub repo!',
    category: [ML_AI],
    skills: ['Python', 'Natural Language Processing (NLP)', 'Numpy',
      'Pandas', 'Tensorflow + Keras', 'Scikit-Learn'],
  },
  {
    title: 'Playlister: Music Recommendation',
    subtitle: 'Machine Learning, audio processing, image classfication',
    link: 'https://drive.google.com/file/d/1-PDZY--h29a1tIOaBdP00rnxar4Kqnug/view',
    image: '/images/projects/playlister.png',
    date: 'Sep 2020 - Dec 2020',
    desc:
      'Worked on a Machine Learning project that aims to recommend songs to users. '
      + 'Mainly in charge of implementing Convolutional Neural Network '
      + 'for music genre classification.',
    category: [ML_AI],
    skills: ['Python', 'Numpy', 'Pandas', 'Tensorflow + Keras', 'Scikit-Learn'],
  },
  {
    title: 'Dish Out',
    subtitle: 'React web app for dish reviews and recommendations in Singapore!',
    link: 'https://dishout.co/',
    image: '/images/projects/dishout.gif',
    date: 'Sep 2020 - Dec 2020',
    desc:
      'Worked with teammates and developed a web app that focuses on '
      + 'dish reviews and recommendations in Singapore. (completed under CS3216)',
    category: [WEB],
    skills: ['JavaScript', 'React', 'SQL/PostgreSQL', 'Heroku', 'Node.JS', 'HTML + CSS'],
  },
  {
    title: 'Relentless',
    subtitle: 'iOS co-op game',
    link: 'https://github.com/relentless-game/Relentless',
    image: '/images/projects/relentless.jpg',
    date: 'Mar 2020 - May 2020',
    desc:
      'Developed with teammates Relentless, a co-op multiplayer iOS game '
      + 'across multiple iOS devices over the network, '
      + 'where players work together to deliver items to households. '
      + '(completed under CS3217)',
    category: [APP],
    skills: ['iOS Dev', 'Swift'],
  },
  {
    title: 'CSModBuddy',
    subtitle: 'Java desktop application',
    link: 'https://github.com/LiuZechu/CSModBuddy',
    image: '/images/projects/cs-modbuddy.jpg',
    date: 'Aug 2019 - Nov 2019',
    desc:
      'A Java desktop application for NUS CS undergraduates '
      + 'to plan modules and manage their study plans.',
    category: [OTHER],
    skills: ['Java'],
  },
  {
    title: 'Petopia',
    subtitle: 'Pet care service built with Vue.js and PostgreSQL',
    link: 'https://github.com/NUS-CS2102-Database-Systems/CS2102_2021_S1_54',
    image: '/images/projects/petopia.jpg',
    date: 'Sep 2020 - Dec 2020',
    desc:
      'Petopia is a pet care service platform where users can sign up '
      + 'as pet owners or caretakers. Pet owners can look for caretakers '
      + 'to help them care for their pets.',
    category: [WEB],
    skills: ['SQL/PostgreSQL', 'JavaScript', 'Vue.JS', 'Heroku', 'Node.JS', 'Express.JS'],
  },
  {
    title: 'Jars',
    subtitle: 'Android app to help you learn through memory',
    link: 'https://github.com/LiuZechu/Jars',
    image: '/images/projects/jars.jpg',
    date: 'May 2019 - Aug 2019',
    desc:
      'Developed an Android app that automatically forms flashcards '
      + 'from highlighting sentences while reading. '
      + 'The flashcards are reviewed according to spaced '
      + 'repetition that increases memory retention. '
      + 'This project won Apollo 11 (highest) Award in NUS Orbital 2019.',
    category: [APP],
    skills: ['Android Dev', 'Java'],
  },
  {
    title: 'Planit',
    subtitle: 'To-do manager built with Ruby on Rails',
    link: 'https://github.com/LiuZechu/Riding-on-Rails',
    image: '/images/projects/planit.jpg',
    date: 'Dec 2018 - Jan 2019',
    desc:
      'Developed a web app with user sign-in feature that '
      + 'keeps track of user’s to-do tasks, allows basic CRUD operations, '
      + 'and classifies tasks according to tags.',
    category: [WEB],
    skills: ['Ruby', 'Ruby on Rails', 'Heroku', 'HTML + CSS'],
  },
  {
    title: 'Word Sticker Bot',
    subtitle: 'Telegram bot',
    link: 'https://github.com/chaitanyabaranwal/Word-Sticker-Bot',
    image: '/images/projects/word-sticker-bot.png',
    date: 'Jan 2019',
    desc:
      'A Telegram bot which stylizes text sent by the user and '
      + 'generates a sticker from the text, which is added '
      + 'to the user’s individual sticker set.',
    category: [OTHER],
    skills: ['Python'],
  },
];

const categories = [
  ML_AI, APP, WEB, OTHER,
].map((category) => ({
  name: category,
}));

const data = { categories, projects };

export default data;
