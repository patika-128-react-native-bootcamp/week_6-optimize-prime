import React from 'react';
import {View, FlatList} from 'react-native';

import ThumbnailCard from '../../../components/ThumbnailCard';

const CharacterFavoritesLayout = ({onItemPress, onPress, favoritesList}) => {
  const renderCharacters = ({item}) => {
    return (
      <ThumbnailCard
        thumbnail={item.thumbnail.path}
        title={item.name}
        onThumbnailCardPress={() => onItemPress(item)}
        onPress={() => onPress(item)}
        iconColor={'#ffa500'}
      />
    );
  };

  return (
    <View>
      <FlatList
        numColumns={2}
        data={favoritesList}
        renderItem={renderCharacters}
      />
    </View>
  );
};

export default CharacterFavoritesLayout;
