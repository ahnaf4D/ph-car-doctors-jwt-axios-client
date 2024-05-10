import { useEffect, useState } from 'react';
const useService = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/api/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return services;
};
export default useService;
