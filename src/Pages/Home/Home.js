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
  // const theme = Appearance.getColorScheme();
  // const dispatch = useDispatch();

  // Appearance.addChangeListener(scheme => {
  //   dispatch({type: 'CHANGE_APP_THEME', payload: {theme: scheme.colorScheme}});
  // });

  const [comicData, setComicData] = useState({data: 'data'});
  const {loading, error, data} = useFetch('comics');
  useAppStarted();
  useEffect(() => {
    // dispatch({type: 'CHANGE_APP_THEME', payload: {theme: theme}});
    if (data !== null) {
      setComicData(data);
    }
  }, [data]);

  // const handleSearch = text => {
  //   if (text !== null || text !== '') {
  //     const filteredList = data.filter(comic => {
  //       const searchText = text.toLowerCase();
  //       const currentTitle = comic.title.toLowerCase();
  //       return currentTitle.indexOf(searchText) > -1;
  //     });
  //     setComicData(filteredList);
  //     return;
  //   }
  //   setComicData(data);
  // };
  const getTextFromSearchInput = text => {
    setComicData(Search(data, text, 'title'));
  };
  const handlGoDetail = item => {
    navigation.navigate('Detail', {comicData: item});
    console.log('item = ', item);
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
