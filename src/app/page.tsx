import AboutMe from '@/components/about-me/AboutMe';
import Navbar from '@/components/Navbar';
import TechStack from '@/components/TechStack';
import WorkExperience from '@/components/WorkExperience';

const Home = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <AboutMe />
      <TechStack />
      <WorkExperience />
      {/* <AboutMe />
      
      <WorkExperience /> */}
    </div>
  );
};

export default Home;
