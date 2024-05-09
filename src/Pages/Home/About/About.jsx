import Person from '../../../assets/images/about_us/person.jpg';
import Parts from '../../../assets/images/about_us/parts.jpg';
const About = () => {
  return (
    <div className='hero mt-12 mb-16'>
      <div className='hero-content flex-col lg:flex-row'>
        <div className='w-1/2 relative'>
          <img src={Person} className='w-3/4 rounded-lg shadow-2xl' />
          <img
            src={Parts}
            alt=''
            className='w-1/2 max-w-sm  shadow-2xl absolute right-5 top-1/2 rounded-lg border-8 border-white'
          />
        </div>
        <div className='lg:w-1/2'>
          <h3 className='text-3xl text-orange-500 font-bold'>About Us</h3>
          <h1 className='text-5xl font-bold'>
            We are qualified & of experience in this field
          </h1>
          <p className='pt-6'>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don<>&#39;</>t look even slightly
            believable.
          </p>
          <p className='py-4'>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don<>&#39;</>t look even slightly
            believable.
          </p>
          <button className='btn btn-primary bg-orange-500 border-none text-white text-xl'>
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
