import React, { useEffect, useState } from 'react';
import { View, Text, Appearance } from 'react-native';
import HomeLayout from './HomeLayout';
import useFetch from '../../hooks/useFetch/useFetch';
import { useDispatch } from 'react-redux';

const Home = ({ navigation }) => {
  const theme = Appearance.getColorScheme();
  const dispatch = useDispatch();

  Appearance.addChangeListener(scheme => {
    dispatch({ type: 'CHANGE_APP_THEME', payload: { theme: scheme.colorScheme } });
  });

  const [comicData, setComicData] = useState({ data: 'data' });
  const { data } = useFetch('comics');


  useEffect(() => {
    dispatch({ type: 'CHANGE_APP_THEME', payload: { theme: theme } });
    if (data !== null) {
      setComicData(data);
      // console.log(data.data);
    }
  }, [data]);
  return <HomeLayout comicData={comicData} />;
};
export default Home;
