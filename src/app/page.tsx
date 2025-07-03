import AboutMe from '@/components/AboutMe';
import Navbar from '@/components/Navbar';
import TechStack from '@/components/TechStack';
import WorkExperience from '@/components/WorkExperience';

const Home = () => {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <TechStack />
      <WorkExperience />
    </div>
  );
};

export default Home;
