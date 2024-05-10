import axios from 'axios';
import { useEffect, useState } from 'react';

const useNumber = () => {
  const [number, setNumbers] = useState();
  useEffect(() => {
    axios.get('/api/get-number').then((res) => setNumbers(res.data));
  }, []);
  return 5;
};

export default useNumber;
