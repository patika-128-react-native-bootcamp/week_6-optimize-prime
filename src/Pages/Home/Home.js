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

  const [loadingSearch, setLoadingSearch] = useState(false);

  const {loading, error, data} = useFetch('comics', 'format=comic&');
  let temporaryText = '';
  useAppStarted();

  const getData = async key => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      const jsonParse = jsonValue != null ? JSON.parse(jsonValue) : [];
      setFavoritesList([...jsonParse]);
      return jsonParse;
    } catch (e) {
      // error reading value
    }
  };
  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
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

  const fetchSearchData = async searchText => {
    try {
      setLoadingSearch(true);
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/comics?ts=1&limit=100&titleStartsWith=${searchText}&apikey=6a3ac4ee649fa8f44ed2beb0990b8e5e&hash=b1092a87a9512ddc94b1093992505c3a`,
      );
      setComicData(response.data.data.results);
      setLoadingSearch(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearch = () => {
    setSearchText(temporaryText);
  };

  useEffect(() => {
    if (searchText !== '') {
      console.log(searchText);
      fetchSearchData(searchText);
    }
  }, [searchText]);

  useEffect(() => {
    getData('favoriteComics');
    if (data !== null) {
      console.log('DATA', data);
      setComicData(data.splice(50, 100));
    }
  }, [data]);

  const getTextFromSearchInput = text => {
    temporaryText = text;
  };
  const handleGoDetail = item => {
    navigation.navigate(routes.COMIC_DETAIL, {comicData: item});
    console.log('item = ', item);
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
      onSearchSubmit={handleSearch}
      onAddFavorites={handleAddFavorites}
      loadingSearch={loadingSearch}
      favoritesList={favoritesList}
    />
  );
};
export default Home;
