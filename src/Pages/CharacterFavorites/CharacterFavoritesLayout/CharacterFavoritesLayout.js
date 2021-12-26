import React from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import ThumbnailCard from '../../../components/ThumbnailCard';
import colors from '../../../styles/colors';
import styles from './CharacterFavoritesLayout.style';

const CharacterFavoritesLayout = ({onItemPress, onPress, favoritesList}) => {
  const theme = useSelector(state => state.theme);
  const renderCharacters = ({item}) => {
    return (
      <ThumbnailCard
        thumbnail={item.thumbnail.path}
        title={item.name}
        onThumbnailCardPress={() => onItemPress(item)}
        onPress={() => onPress(item)}
        iconColor={colors[theme].accentColor}
      />
    );
  };

  return (
    <View style={styles[theme].container}>
      <FlatList
        numColumns={2}
        data={favoritesList}
        renderItem={renderCharacters}
      />
    </View>
  );
};

export default CharacterFavoritesLayout;
