import react ,{ useState, useEffect } from 'react';
import axios from 'axios';

import { BASE_URL } from '../../URL.json';
import { AUTH } from '../../URL.json';

const baseUrl = 'https://gateway.marvel.com/v1/public/';
const authorization =
  '?ts=1&apikey=6a3ac4ee649fa8f44ed2beb0990b8e5e&hash=b1092a87a9512ddc94b1093992505c3a';

const useFetch = url => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      console.log(`${BASE_URL}${url}${AUTH}`);
      const response = await axios.get(
        `${BASE_URL}${url}${AUTH}`,
      );
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { loading, error, data };
};

export default useFetch;
