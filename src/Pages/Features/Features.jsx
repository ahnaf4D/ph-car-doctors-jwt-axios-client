import Group from '../../assets/icons/group.svg';
import Clock from '../../assets/icons/Group_38729.svg';
const Features = () => {
  return (
    <div>
      <article className='text-center'>
        <span className='text-3xl text-orange-500 font-bold'>
          Core Features
        </span>
        <h1 className='text-5xl font-bold my-3'>Why Choose Us</h1>
        <p className='max-w-lg mx-auto mb-4'>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </article>
      <div className='flex justify-center gap-5 flex-col mb-8 lg:flex-row'>
        <div className='flex flex-col items-center border-2 rounded-lg p-4'>
          <img src={Group} />
          <p className='text-2xl'>Expert Team</p>
        </div>
        <div className='flex flex-col items-center border-2 bg-orange-500 rounded-lg p-4'>
          <img src={Clock} />
          <p className='text-2xl'>Timely Delivery</p>
        </div>
        <div className='flex flex-col items-center border-2 rounded-lg p-4'>
          <img src={Group} />
          <p className='text-2xl'>Expert Team</p>
        </div>
        <div className='flex flex-col items-center border-2 rounded-lg p-4'>
          <img src={Group} />
          <p className='text-2xl'>Expert Team</p>
        </div>
        <div className='flex flex-col items-center border-2 rounded-lg p-4'>
          <img src={Group} />
          <p className='text-2xl'>Expert Team</p>
        </div>
        <div className='flex flex-col items-center border-2 rounded-lg p-4'>
          <img src={Group} />
          <p className='text-2xl'>Expert Team</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
