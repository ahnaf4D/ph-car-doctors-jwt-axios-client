import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const BookService = () => {
  const loadData = useLoaderData();
  const { title, price, img, _id } = loadData;
  const { user } = useContext(AuthContext);
  const handleBookServices = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.userName.value;
    const email = user?.email;
    const date = form.date.value;
    const price = form.price.value;
    const serviceName = form.serviceName.value;
    const order = {
      serviceName,
      name,
      email,
      date,
      price,
      img,
    };
    fetch(`http://localhost:3000/api/bookings`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className='flex justify-center'>
      <div className='w-full'>
        <h2 className='text-4xl my-4 text-center'>Book : {title}</h2>
        <div className='bg-orange-100 p-6 m-6 rounded-lg'>
          <form
            className='grid grid-cols-1 gap-4'
            onSubmit={handleBookServices}
          >
            <div className='flex flex-col gap-6'>
              <label htmlFor='userName'>
                User Name
                <input
                  type='text'
                  name='userName'
                  placeholder='User Name'
                  id='userName'
                  className='input input-bordered w-full'
                  required
                  defaultValue={user?.name}
                />
              </label>
              <label htmlFor='serviceName'>
                Service Name
                <input
                  type='text'
                  name='serviceName'
                  placeholder='Service Name'
                  id='serviceName'
                  className='input input-bordered w-full'
                  required
                  defaultValue={title}
                  readOnly
                />
              </label>
              <label htmlFor='price'>
                Service Price
                <input
                  type='number'
                  name='price'
                  placeholder='$00'
                  id='lastName'
                  className='input input-bordered w-full'
                  required
                  defaultValue={price}
                />
              </label>
            </div>
            <div className='flex flex-col gap-6'>
              <label htmlFor='phone'>
                Date
                <input
                  type='date'
                  name='date'
                  id='date'
                  className='input input-bordered w-full'
                  required
                />
              </label>
              <label htmlFor='email'>
                Email Address
                <input
                  type='email'
                  name='email'
                  placeholder='Enter your email address'
                  id='email'
                  className='input input-bordered w-full'
                  required
                  defaultValue={user?.email}
                  readOnly
                />
              </label>
            </div>
            <div>
              <label htmlFor='message' className='block mb-2'>
                Description
              </label>
              <textarea
                name='message'
                id='message'
                cols='80'
                rows='5'
                placeholder='Product Description'
                className='border-2 p-2 rounded-lg w-full'
              ></textarea>
            </div>
            <div>
              <button
                type='submit'
                className='btn btn-error text-white text-xl w-full'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookService;
