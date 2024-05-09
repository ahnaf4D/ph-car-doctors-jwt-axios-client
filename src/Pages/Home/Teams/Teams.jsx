import Member1 from '../../../assets/images/team/1.jpg';
import Member2 from '../../../assets/images/team/2.jpg';
import Member3 from '../../../assets/images/team/3.jpg';
import Social from '../../../assets/images/social.png';
const Teams = () => {
  return (
    <>
      <article className='text-center'>
        <span className='text-3xl text-orange-500 font-bold'>Team</span>
        <h1 className='text-5xl font-bold my-3'>Meet Our Team</h1>
        <p className='max-w-lg mx-auto mb-4'>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </article>
      <div className='flex justify-around mb-12'>
        <div className='card w-96 bg-base-100 shadow-xl'>
          <figure className='px-10 pt-10'>
            <img src={Member1} alt='Shoes' className='rounded-xl' />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title'>Car Engine Plug</h2>
            <p>Engine Expert</p>
            <div className='card-actions'>
              <img src={Social} alt='' />
            </div>
          </div>
        </div>
        <div className='card w-96 bg-base-100 shadow-xl'>
          <figure className='px-10 pt-10'>
            <img src={Member2} alt='Shoes' className='rounded-xl' />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title'>Car Engine Plug</h2>
            <p>Engine Expert</p>
            <div className='card-actions'>
              <img src={Social} alt='' />
            </div>
          </div>
        </div>
        <div className='card w-96 bg-base-100 shadow-xl'>
          <figure className='px-10 pt-10'>
            <img src={Member3} alt='Shoes' className='rounded-xl' />
          </figure>
          <div className='card-body items-center text-center'>
            <h2 className='card-title'>Car Engine Plug</h2>
            <p>Engine Expert</p>
            <div className='card-actions'>
              <img src={Social} alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
