import emoji from "react-easy-emoji";

export const greetings = {
  name: "Shekhar Ghimire",
  title: "Hi all, I'm Shekhar",
  description:
    "I'm passionate Full Stack web developer having an experience of web applications with PHP, Laravel, Vue.js, React.js",
  resumeLink: "https://shekharghimire.com.np/resume/",
};

export const openSource = {
  githubUserName: "subhamghimire",
};

export const contact = {};

export const socialLinks = {
  facebook: "https://www.facebook.com/profile.php?id=100069337756812",
  instagram: "https://www.instagram.com/subham.ghimire/",
  twitter: "https://twitter.com/SubhamGhimire26",
  github: "https://github.com/subhamghimire",
  linkedin: "https://www.linkedin.com/in/subham-ghimire-0944a4157",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Experience with Laravel, MySql, Vue js on business domains"),
        emoji(
          "⚡ Experience with REST APIs with understanding of object-oriented programming (OOP) design patterns"
        ),
        emoji("⚡ Integration & Unit Testing"),
        emoji("⚡ Experience working with Agile and Scrum teams"),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassname: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassname: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "logos:php",
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "logos:laravel",
        },
        {
          skillName: "Vuejs",
          fontAwesomeClassname: "vscode-icons:file-type-vue",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassname: "vscode-icons:file-type-reactjs",
        },
      ],
    },
  ],
};

export const educationInfo = [
  {
    schoolName: "Tribhuvan University",
    subHeader: "CSIT",
    duration: "April 2018 - April 2022",
  },
  {
    schoolName: "Hetauda School of Management & Social Sciences",
    subHeader: "Science",
    duration: "April 2015 -  September 2017",
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "Alphatech",
    companylogo: "/img/icons/common/alphatech.png",
    date: "Dec 2019 - Present",
    desc: "Working as Full Stack web developer to create fast, user-centric web apps, clean maintainable code, intuitive user interfaces & automating business goals",
  },
  {
    role: "Junior Web Developer",
    company: "Rubix Web",
    companylogo: "/img/icons/common/rubix.png",
    date: "Dec 2019 - Dec 2019",
    desc: "Learned PHP, Laravel framework development along with frontend technologies",
  },
];
