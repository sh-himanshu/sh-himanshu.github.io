import AboutMe from '@/components/about-me/AboutMe';
import Navbar from '@/components/Navbar';

const Home = () => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <AboutMe />
      {/* <AboutMe />
      <TechStack />
      <WorkExperience /> */}
    </div>
  );
};

export default Home;
