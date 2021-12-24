import React from 'react';
import {View, FlatList} from 'react-native';

import ThumbnailCard from '../../../components/ThumbnailCard';

const FavoritesLayout = ({onItemPress, onPress, favoritesList}) => {
  const renderComics = ({item}) => {
    return (
      <ThumbnailCard
        thumbnail={item.thumbnail.path}
        title={item.title}
        onThumbnailCardPress={() => onItemPress(item)}
        onPress={() => onPress(item)}
        iconColor={'#ffa500'}
      />
    );
  };

  return (
    <View>
      <FlatList numColumns={2} data={favoritesList} renderItem={renderComics} />
    </View>
  );
};

export default FavoritesLayout;
