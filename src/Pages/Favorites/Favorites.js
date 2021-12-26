import React, {useEffect, useState, useMemo} from 'react';
import FavoritesLayout from './FavoritesLayout/FavoritesLayout';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import routes from '../../Navigation/routes';

const Favorites = () => {
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

  const saveFavorite = async value => {
    const data = await getData('favoriteComics');
    const selectedComic = value;
    const comicFavoritesIndex = data.findIndex(f => {
      return f.id === selectedComic.id;
    });

    const updatedFavoritesList = data;
    updatedFavoritesList.splice(comicFavoritesIndex, 1);

    storeData('favoriteComics', updatedFavoritesList);
    getData('favoriteComics');
  };

  useEffect(() => {

    getData('favoriteComics');
  }, []);

  const handleGoDetail = item => {
    navigation.navigate(routes.COMIC_DETAIL, {comicData: item});
  };
  const handleRemoveFavorites = comic => {
    saveFavorite(comic);
  };

  return (
    <FavoritesLayout
      onItemPress={handleGoDetail}
      theme={theme}
      onPress={handleRemoveFavorites}
      favoritesList={favoriteData}
    />
  );
};

export default Favorites;
