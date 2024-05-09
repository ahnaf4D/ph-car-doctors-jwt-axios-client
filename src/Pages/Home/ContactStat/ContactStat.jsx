import Calender from '../../../assets/images/statIcons/calender.png';
import Phone from '../../../assets/images/statIcons/phone.png';
import Location from '../../../assets/images/statIcons/location.png';

const ContactStat = () => {
  return (
    <div className='bg-[#151515] max-w-5xl text-white flex justify-around container mx-auto my-6 px-6 py-12 rounded-lg flex-col gap-6 lg:flex-row'>
      <div className='flex items-center gap-4'>
        <img src={Calender} alt='' />
        <article>
          <p className='text-xl'>We are open monday-friday</p>
          <h2 className='text-2xl font-bold'>7:00 am - 9:00 pm</h2>
        </article>
      </div>
      <div className='flex items-center gap-4'>
        <img src={Phone} alt='' />
        <article>
          <p className='text-xl'>Have a question?</p>
          <h2 className='text-2xl font-bold'>+2546 251 2658</h2>
        </article>
      </div>
      <div className='flex items-center gap-4'>
        <img src={Location} alt='' />
        <article>
          <p className='text-xl'>Need a repair? our address</p>
          <h2 className='text-2xl font-bold'>Liza Street, New York</h2>
        </article>
      </div>
    </div>
  );
};

export default ContactStat;
