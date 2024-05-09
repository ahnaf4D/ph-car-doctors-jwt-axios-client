import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { FaLongArrowAltRight } from 'react-icons/fa';
const Service = ({ service }) => {
  const { _id, img, title, price } = service;
  return (
    <div className='card  bg-base-100 shadow-xl'>
      <figure>
        <img src={img} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <div className='flex items-center'>
          <p className='text-2xl font-medium text-orange-500'>
            Price : ${price}
          </p>
          <Link to={`/book-services/${_id}`}>
            {' '}
            <button className='btn btn-error text-white'>Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
Service.propTypes = {
  service: PropTypes.object,
};
export default Service;
