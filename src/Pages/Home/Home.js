import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
import useFetch from '../../hooks/useFetch/useFetch';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useAppStarted from '../../hooks/useAppStarted';
import Search from '../../utils/Search';
import HomeLayout from './HomeLayout';
import axios from 'axios';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import routes from '../../Navigation/routes';

const Home = () => {
  const navigation = useNavigation();
  const theme = useSelector(state => state.theme);
  const [searchText, setSearchText] = useState('');

  const [comicData, setComicData] = useState({data: 'data'});
  const [favoritesList, setFavoritesList] = useState([]);

  const {loading, error, data, fetchData} = useFetch(
    'comics',
    `format=comic&${searchText}`,
  );
  let temporaryText = '';
  useAppStarted();

  const getData = async key => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      const jsonParse = jsonValue != null ? JSON.parse(jsonValue) : [];
      setFavoritesList([...jsonParse]);
      return jsonParse;
    } catch (e) {}
  };
  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {}
  };
  const saveFavorite = async value => {
    const data = await getData('favoriteComics');
    setFavoritesList([...data, value]);
    const comicFavoriteIndex = data.findIndex(f => f.id === value.id);
    const isInFavorites = comicFavoriteIndex !== -1;
    if (isInFavorites) {
      return;
    }
    storeData('favoriteComics', [...data, value]);
  };

  const handleSearch = () => {
    setSearchText(temporaryText);
  };
  const handleClear = () => {
    setSearchText('');
  };

  useEffect(() => {
    fetchData();
  }, [searchText]);

  useEffect(() => {
    getData('favoriteComics');
    if (data !== null) {
      setComicData(data.splice(50, 100));
    }
  }, [data]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData('favoriteComics');
      if (data !== null) {
        setComicData(data.splice(50, 100));
      }
    });
    return unsubscribe;
  }, [navigation]);

  const getTextFromSearchInput = text => {
    temporaryText = `titleStartsWith=${text}&`;
  };
  const handleGoDetail = item => {
    navigation.navigate(routes.COMIC_DETAIL, {comicData: item});
  };

  const handleAddFavorites = comic => {
    saveFavorite(comic);
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <HomeLayout
      comicData={comicData}
      setText={getTextFromSearchInput}
      onItemPress={handleGoDetail}
      theme={theme}
      onSearch={handleSearch}
      onClear={handleClear}
      onSearchSubmit={handleSearch}
      onAddFavorites={handleAddFavorites}
      favoritesList={favoritesList}
    />
  );
};
export default Home;
