const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, img, serviceName, name, date, price, email, status } = booking;

  return (
    <tr className='border-b border-gray-200 hover cursor-pointer'>
      <td>
        <button className='btn btn-circle' onClick={() => handleDelete(_id)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </td>
      <td className='py-4'>
        <div className='flex items-center gap-3'>
          <div className='avatar'>
            <div className='w-20 h-20 rounded overflow-hidden'>
              <img
                className='object-cover w-full h-full'
                src={img}
                alt='Avatar Tailwind CSS Component'
              />
            </div>
          </div>
          <div>
            <div className='font-bold'>{serviceName}</div>
            <div className='text-sm text-gray-500'>{date}</div>
            <div className='text-gray-700'>Price: ${price}</div>
          </div>
        </div>
      </td>
      <td className='py-4'>
        <div className='font-medium'>{name}</div>
        <div className='text-gray-500'>{email}</div>
      </td>
      <td className='py-4'>
        {status === 'confirm' ? (
          <span className='text-2xl text-blue-500'>Confirmed</span>
        ) : (
          <button
            className='btn px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600'
            onClick={() => handleBookingConfirm(_id)}
          >
            Confirm
          </button>
        )}
      </td>
    </tr>
  );
};

export default BookingRow;
