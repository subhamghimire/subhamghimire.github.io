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
          description: 'Software Engineer from Nepal',
          image: '/favicon.png',
          keywords: [
            'Shekhar Ghimire',
            'Shekhar Ghimire website',
            'shekharghimire portfolio website',
            'Shekhar',
            'Shekhar portfolio',
            'Shekhar Ghimire Resume',
            'shekharghimire',
            'shekhar ghimire',
          ],
        }}
      />
      <Navigation />
      <Greetings />
      <Skills />
      <Experience />
      <Education />
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
