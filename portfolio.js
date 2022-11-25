import emoji from 'react-easy-emoji';

export const greetings = {
  name: 'Shekhar Ghimire',
  title: "Hi all, I'm Shekhar",
  description:
    "I'm passionate Full Stack web developer having an experience of developing web applications from scratch to end.I have built a number of web applications from scratch and have a vast experience in the development field.",
  resumeLink: 'https://subhamghimire.github.io/resume',
};

export const openSource = {
  githubUserName: 'subhamghimire',
};

export const contact = {};

export const socialLinks = {
  facebook: 'https://www.facebook.com/profile.php?id=100069337756812',
  instagram: 'https://www.instagram.com/subham.ghimire/',
  twitter: 'https://twitter.com/GhimireShekhar1',
  github: 'https://github.com/subhamghimire',
  linkedin: 'https://www.linkedin.com/in/shekhar-ghimire-0944a4157',
};

export const skillsSection = {
  title: 'What I do',
  subTitle: 'SOFTWARE DEVELOPER',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience with Laravel + Vue JS, Angular, React, NestJs, MEAN/MERN Stack on business domains'),
        emoji('⚡ Experience with REST APIs with understanding of object-oriented programming (OOP) design patterns'),
        emoji('⚡ Integration & Unit Testing'),
        emoji('⚡ Docker, CI/CD pipeline'),
        emoji('⚡ Experience working with Agile and Scrum teams'),
        emoji('⚡ Learning ML'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassname: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassname: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassname: 'logos:javascript',
        },
        {
          skillName: 'PHP',
          fontAwesomeClassname: 'logos:php',
        },
        {
          skillName: 'Laravel',
          fontAwesomeClassname: 'logos:laravel',
        },
        {
          skillName: 'VueJS',
          fontAwesomeClassname: 'vscode-icons:file-type-vue',
        },
        {
          skillName: 'Angular',
          fontAwesomeClassname: 'vscode-icons:file-type-angular',
        },
        {
          skillName: 'NestJS',
          fontAwesomeClassname: 'vscode-icons:file-type-nestjs',
        },
        {
          skillName: 'ReactJS',
          fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
        },
      ],
    },
  ],
};

export const educationInfo = [
  {
    schoolName: 'Tribhuvan University',
    subHeader: 'CSIT',
    duration: 'April 2018 - Oct 2022',
  },
  {
    schoolName: 'Hetauda School of Management & Social Sciences',
    subHeader: 'Science',
    duration: 'April 2015 -  September 2017',
  },
];

export const experience = [
  {
    role: 'MEAN Stack Developer',
    company: 'Kilroy Blockchain',
    companylogo: '/img/icons/common/kilroyblockchain-logo.jpg',
    date: 'July 2022 - Present',
    desc: 'Working on web, AI and blockchain projects with team as a developer',
  },
  {
    role: 'Full Stack Developer',
    company: 'Alphatech',
    companylogo: '/img/icons/common/alphatech.png',
    date: 'Dec 2019 - June 2022',
    desc: 'Worked as Full Stack web developer to write maintainable code & intuitive UI',
  },
  {
    role: 'Junior Web Developer',
    company: 'Rubix Web',
    companylogo: '/img/icons/common/rubix.png',
    date: 'Sept 2018 - Dec 2019',
    desc: 'Learned PHP and frontend technologies HTML, CSS & JS',
  },
];
