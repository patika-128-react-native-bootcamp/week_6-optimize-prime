import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import HomeLayout from './HomeLayout';
import useFetch from '../../hooks/useFetch/useFetch';

const Home = () => {
  const [comicData, setComicData] = useState({data:'data'});
  const { data } = useFetch('comics');
  useEffect(() => {
    if (data !== null) {
      setComicData(data);
      console.log(data.data);
    }
  }, [data]);
  return <HomeLayout comicData={comicData.data.results} />;
};
export default Home;
