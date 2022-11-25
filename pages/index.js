import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
const Navigation = dynamic(() => import('../components/Navigation'));
const Greetings = dynamic(() => import('../containers/Greetings'));
const Skills = dynamic(() => import('../containers/Skills'));
const Education = dynamic(() => import('../containers/Education'));
const Experience = dynamic(() => import('../containers/Experience'));
const GithubProfileCard = dynamic(() => import('../components/GithubProfileCard'));
import { openSource } from '../portfolio';
import SEO from '../components/SEO';

export default function Home({ githubProfileData }) {
  return (
    <div>
      <SEO
        data={{
          title: 'Shekhar Ghimire',
          description: 'A passionate Software Developer from Nepal 🇳🇵',
          image:
            'https://avatars.githubusercontent.com/u/26000785?s=400&u=fe72c78adb51053f7e19c9f076c315ac5af5b2bc&v=4',
          url: 'https://shekharghimire.com.np',
          keywords: [
            'Shekhar Ghimire',
            'Shekhar Ghimire website',
            'subhamghimire portfolio website',
            'Subham Ghimire',
            'Shekhar portfolio',
            'Shekhar Ghimire',
          ],
        }}
      />
      <Navigation />
      <Greetings />
      <Skills />
      <Education />
      <Experience />
      <GithubProfileCard prof={githubProfileData} />
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
  const githubProfileData = await fetch(`https://api.github.com/users/${openSource.githubUserName}`).then((res) =>
    res.json()
  );

  return {
    props: { githubProfileData },
  };
}
