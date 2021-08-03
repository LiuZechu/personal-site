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
      'This project aims to automatically label GitHub issues with Natural Language Processing (NLP).'
      + ' We explored feature extraction using "important" word counts, averaged word embeddings, and'
      + ' sentence embeddings with Bert. We also experimented with the effects of machine information'
      + ' present in GitHub issues and tried out various classification algorithms.'
      + ' You may try this labeller out on your own GitHub repo!',
    category: [ML_AI],
    skills: ['Python', 'Natural Language Processing (NLP)', 'Numpy',
      'Pandas', 'Tensorflow + Keras', 'Scikit-Learn'],
  },
  {
    title: 'How to cross the road like a pro',
    subtitle: 'Deep Q Learning with reward shaping and curriculum learning',
    link: 'https://github.com/LiuZechu/CS4246-mini-project',
    image: '/images/projects/dqn.jpg',
    date: 'Apr 2021',
    desc:
      'This mini project aims to create an agent that can cross a road '
      + 'with 10 lanes, each lane having a length of 50. There are numerous '
      + 'cars on each lane having randomised starting positions and speeds.'
      + ' The agent uses models trained '
      + 'from Deep Q Learning with reward shaping and curriculum learning to solve'
      + ' the problem of sparse reward and slow learning.'
      + ' (cover image credit: https://media.wired.com/)',
    category: [ML_AI],
    skills: ['Python', 'Numpy', 'PyTorch', 'Reinforcement Learning'],
  },
  {
    title: 'Playlister: Music Recommendation',
    subtitle: 'Machine Learning, audio processing, image classfication',
    link: 'https://drive.google.com/file/d/1-PDZY--h29a1tIOaBdP00rnxar4Kqnug/view',
    image: '/images/projects/playlister.png',
    date: 'Sep 2020 - Dec 2020',
    desc:
      'This Machine Learning project aims to recommend songs to users. '
      + 'I was mainly in charge of implementing Convolutional Neural Network '
      + 'for music genre classification.',
    category: [ML_AI],
    skills: ['Python', 'Numpy', 'Pandas', 'Tensorflow + Keras', 'Scikit-Learn'],
  },
  {
    title: 'Four2Ten',
    subtitle: 'Multi-player, cross-platform mobile game built with Flutter',
    link: 'https://github.com/Four2Ten/4210',
    image: '/images/projects/4210.jpg',
    date: 'Dec 2020 - Aug 2021',
    desc:
      'In this game, you will use addition, subtraction, multiplication and division to '
      + 'form ten (10) with the given digits while competing with your friends and see who\'s the fastest!',
    category: [APP],
    skills: ['JavaScript', 'Node.JS', 'Dart', 'Flutter', 'AWS/GCP'],
  },
  {
    title: 'Dish Out',
    subtitle: 'React web app for dish reviews and recommendations in Singapore!',
    link: 'https://dishout.co/',
    image: '/images/projects/dishout.gif',
    date: 'Sep 2020 - Dec 2020',
    desc:
      'This web app focuses on '
      + 'dish reviews and recommendations in Singapore. (completed under CS3216)',
    category: [WEB],
    skills: ['JavaScript', 'React', 'SQL/PostgreSQL', 'Heroku', 'Node.JS', 'HTML + CSS'],
  },
  {
    title: 'Whoosh',
    subtitle: 'Progressive Web App (PWA) that facilitates virtual queuing for restaurant diners',
    link: 'https://github.com/LiuZechu/whoosh',
    image: '/images/projects/whoosh.png',
    date: 'Aug 2020 - Sep 2020',
    desc:
      'This Flutter web app helps restaurants create virtual queues for walk-in diners, '
      + 'so that diners won\'t have to queue physically and will get notified when it\'s their turn.'
      + ' (completed under CS3216)',
    category: [WEB],
    skills: ['Flutter', 'Dart'],
  },
  {
    title: 'Relentless',
    subtitle: 'iOS co-op game',
    link: 'https://github.com/relentless-game/Relentless',
    image: '/images/projects/relentless.jpg',
    date: 'Mar 2020 - May 2020',
    desc:
      'Relentless is a co-op multiplayer iOS game '
      + 'across multiple iOS devices over the network, '
      + 'where players work together to deliver items to households. '
      + '(completed under CS3217)',
    category: [APP],
    skills: ['iOS Dev', 'Swift'],
  },
  {
    title: 'Peggle',
    subtitle: 'iOS game with a Physics Engine that I built from scratch',
    link: 'https://github.com/LiuZechu/peggle-game',
    image: '/images/projects/peggle.jpg',
    date: 'Jan 2020 - Mar 2020',
    desc:
      'Peggle is an iOS game where the player can shoot a canon ball which '
      + 'bounces around pegs to earn points. I built a Physics Engine '
      + 'which handles object collision without using external libraries. '
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
    link: 'https://github.com/LiuZechu/pet-care-service',
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
      'Jars is an Android app where users can automatically create flashcards '
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
      'I developed a web app with user sign-in feature that '
      + 'keeps track of user’s to-do tasks, allows basic CRUD operations, '
      + 'and classifies tasks according to tags.',
    category: [WEB],
    skills: ['Ruby', 'Ruby on Rails', 'Heroku', 'HTML + CSS'],
  },
  {
    title: 'Word Sticker Bot',
    subtitle: 'Telegram bot',
    link: 'https://github.com/chaitanyabaranwal/Word-Sticker-Bot',
    image: '/images/projects/word-sticker-bot.jpg',
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
