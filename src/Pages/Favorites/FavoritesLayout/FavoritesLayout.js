import React from 'react';
import { View, FlatList, Button } from 'react-native';

import ThumbnailCard from '../../../components/ThumbnailCard';

const FavoritesLayout = ({ onItemPress, onPress, favoritesList,onRefresh }) => {
  const renderComics = ({ item }) => {
    return (
      <ThumbnailCard
        thumbnail={item.thumbnail.path}
        title={item.title}
        onThumbnailCardPress={() => onItemPress(item)}
        onPress={()=>onPress(item)}
      />
    );
  };

  return (
    <View>
      <Button title="Refresh" onPress={onRefresh} />
      <FlatList numColumns={2} data={favoritesList} renderItem={renderComics} />
    </View>
  );
}


export default FavoritesLayout;
