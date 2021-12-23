import React, {useEffect, useState, useMemo} from 'react';
import FavoritesLayout from './FavoritesLayout/FavoritesLayout';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Favorites = () => {
  const favoritesList = useSelector(s => s.favoritesList);
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const theme = useSelector(state => state.theme);
  const [favoriteData, setFavoriteData] = useState([]);

  const getData = async key => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      const value = jsonValue != null ? JSON.parse(jsonValue) : [];
      setFavoriteData(value);
      return value;
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
  removeValue = async key => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      // remove error
    }
  };
  const saveFavorite = async value => {
    const data = await getData('favoriteComics');
    const selectedComic = value;
    const comicFavoritesIndex = data.findIndex(f => {
      return f.id === selectedComic.id;
    });

    const updatedFavoritesList = data;
    updatedFavoritesList.splice(comicFavoritesIndex, 1);
    removeValue('favoriteComics');
    storeData('favoriteComics', [updatedFavoritesList]);
    getData('favoriteComics',)
  };
  // const selectedComic = action.payload.comic;
  // const comicFavoritesIndex = state.favoritesList.findIndex(
  //   f => f.id === selectedComic.id,
  // );
  // const updatedFavoritesList = [...state.favoritesList];
  // updatedFavoritesList.splice(comicFavoritesIndex, 1);

  // return { ...state, favoritesList: updatedFavoritesList };

  useEffect(() => {
    console.log('favorites');

    getData('favoriteComics');
  }, []);

  const handleGoDetail = item => {
    navigation.navigate('ComicDetail', {comicData: item});
    console.log('item = ', item);
  };
  const handleRemoveFavorites = comic => {
    saveFavorite(comic);
    // dispatch({type: 'REMOVE_FROM_FAVORITES', payload: {comic}});
  };

  const handleRefresh = () => {
    getData('favoriteComics');
  };
  return (
    <FavoritesLayout
      onItemPress={handleGoDetail}
      theme={theme}
      onPress={handleRemoveFavorites}
      favoritesList={favoriteData}
      onRefresh={handleRefresh}
    />
  );
};

export default Favorites;
