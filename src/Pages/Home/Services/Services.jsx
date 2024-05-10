import Service from './Service';
import useService from '../../../hooks/userService';

const Services = () => {
  // const [services, setServices] = useState([]);
  // useEffect(() => {
  //   fetch('http://localhost:3000/api/services')
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, []);
  const services = useService(); // dry code here
  return (
    <div className='my-12'>
      <article className='text-center'>
        <span className='text-3xl text-orange-500 font-bold'>Service</span>
        <h1 className='text-5xl font-bold my-3'>Our Service Area</h1>
        <p className='max-w-lg mx-auto mb-4'>
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don<>&rsquo;</>t look even slightly
          believable.
        </p>
      </article>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <div className='flex justify-center mt-5'>
        <button className='btn btn-error text-white text-xl '>
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
