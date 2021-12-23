import React from 'react';
import FavoritesLayout from './FavoritesLayout/FavoritesLayout';
import { useSelector, useDispatch } from 'react-redux';

import { useNavigation } from '@react-navigation/native';

const Favorites = () => {
  const favoritesList = useSelector(s => s.favoritesList);
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const theme = useSelector(state => state.theme);

  const handleGoDetail = item => {
    navigation.navigate('ComicDetail', { comicData: item });
    console.log('item = ', item);
  };
  const handleRemoveFavorites = comic =>
    dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: { comic } });

  return (
    <FavoritesLayout
      onItemPress={handleGoDetail}
      theme={theme}
      onPress={() => handleRemoveFavorites(favoritesList)}
      favoritesList={favoritesList}
    />
  );
}

export default Favorites;
