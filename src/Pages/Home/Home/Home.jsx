import Features from '../../Features/Features';
import About from '../About/About';
import Carousel from '../Carousel/Carousel';
import ContactStat from '../ContactStat/ContactStat';
import Products from '../Products/Products';
import Services from '../Services/Services';
import Teams from '../Teams/Teams';

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <About></About>
      <Services></Services>
      <ContactStat></ContactStat>
      <Products></Products>
      <Teams></Teams>
      <Features></Features>
    </div>
  );
};

export default Home;
