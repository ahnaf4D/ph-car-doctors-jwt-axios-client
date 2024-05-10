import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import BookingRow from './BookingRow';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const BookingDetails = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure();
  const url = `/api/bookings/?email=${user?.email}`;
  useEffect(() => {
    // fetch(url, { credentials: 'include' })
    //   .then((res) => res.json())
    //   .then((data) => setBookings(data));
    axiosSecure.get(url).then((res) => setBookings(res.data));
  }, [url, axiosSecure]);
  const handleDelete = (id) => {
    const procced = confirm('Are You Sure Wanna to Delete');
    if (procced) {
      fetch(`https://car-doctor-eta-nine.vercel.app/api/bookings/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert('Successfully deleted one document.');
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };
  const handleBookingConfirm = (id) => {
    fetch(`https://car-doctor-eta-nine.vercel.app/api/bookings/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ status: 'confirm' }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id !== id);
          updated.status = 'confirm';
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };
  return (
    <div>
      <h2 className='text-3xl text-center font-bold my-8'>
        Total Bookings : {bookings.length}
      </h2>
      <div className='overflow-x-auto'>
        <table className='table'>
          {bookings.map((booking) => (
            <BookingRow
              key={booking._id}
              booking={booking}
              handleDelete={handleDelete}
              handleBookingConfirm={handleBookingConfirm}
            ></BookingRow>
          ))}
        </table>
      </div>
    </div>
  );
};

export default BookingDetails;
