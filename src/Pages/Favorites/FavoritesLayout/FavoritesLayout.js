import React from 'react';
import { View, FlatList } from 'react-native';

import ThumbnailCard from '../../../components/ThumbnailCard';

const FavoritesLayout = ({ onItemPress, onPress, favoritesList }) => {

  const renderComics = ({ item }) => {
    return (

      <ThumbnailCard
        thumbnail={item.thumbnail.path}
        title={item.title}
        onThumbnailCardPress={() => onItemPress(item)}
        onPress={onPress}
      />
    );
  };

  return (
    <View>
      <FlatList data={favoritesList} renderItem={renderComics} />
    </View>
  );
}


export default FavoritesLayout;
