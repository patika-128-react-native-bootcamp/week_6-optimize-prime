import react, {useState, useEffect} from 'react';
import axios from 'axios';

import {BASE_URL} from '../../URL.json';
import {LIMIT, API_KEY} from '../../URL.json';

const useFetch = (url, keyword = '') => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true)
      console.log(`adasdas ${BASE_URL}${url}${LIMIT}${keyword}${API_KEY}`);
      const response = await axios.get(`${BASE_URL}${url}${LIMIT}${keyword}${API_KEY}`);
      setData(response.data.data.results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return {loading, error, data,fetchData};
};

export default useFetch;
