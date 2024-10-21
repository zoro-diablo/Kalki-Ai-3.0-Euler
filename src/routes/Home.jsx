import Flow from '../components/Flow';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Packages from '../components/Packages';
import Cards from '../components/Cards';
import StepBox from '../components/StepBox';

const Home = () => {
  return (
    <div className='bg-dark-blue'>
      <div className='bg-main h-full'>
        <Hero />
      </div>
      <div>
        <Packages  />
      </div>
      <div>
        <Flow />
      </div>
      <div>
        <StepBox />
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Home;
