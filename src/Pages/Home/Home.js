import React, {useEffect, useState} from 'react';
import {View, Text, Appearance} from 'react-native';
import HomeLayout from './HomeLayout';
import useFetch from '../../hooks/useFetch/useFetch';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import useAppStarted from '../../hooks/useAppStarted';
import Search from '../../utils/Search';

const Home = () => {
  const navigation = useNavigation();
  const theme = useSelector(state => state.theme);

  const [comicData, setComicData] = useState({data: 'data'});
  const {loading, error, data} = useFetch('comics');
  useAppStarted();
  useEffect(() => {
    if (data !== null) {
      setComicData(data);
    }
  }, [data]);

  const getTextFromSearchInput = text => {
    setComicData(Search(data, text, 'title'));
  };
  const handlGoDetail = item => {
    navigation.navigate('ComicDetail', {comicData: item});
  };

  if (loading) {
    return <Text>Loading</Text>;
  }
  if (error) {
    return <Text>Error</Text>;
  }

  return (
    <HomeLayout
      comicData={comicData}
      setText={getTextFromSearchInput}
      onItemPress={handlGoDetail}
      theme={theme}
    />
  );
};
export default Home;
