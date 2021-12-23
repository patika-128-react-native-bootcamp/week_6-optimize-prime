import React from 'react';
import {View, Text, FlatList, TextInput, Button} from 'react-native';
import SearchBar from '../../../components/SearchBar';
import ThumbnailCard from '../../../components/ThumbnailCard';
import styles from './CharactersLayout.style';

const CharactersLayout = ({
  charactersData,
  setText,
  onSearch,
  onChracterPress,
  onSearchSubmit,
}) => {
  const renderCharacters = ({item}) => {
    return (
      <ThumbnailCard
        thumbnail={item.thumbnail.path}
        title={item.name}
        onThumbnailCardPress={() => onChracterPress(item)}
      />
    );
  };
  return (
    <View style={styles.container}>
      <SearchBar
        onChangeText={setText}
        onSearch={onSearch}
        onSubmitEditing={onSearchSubmit}
      />
      <FlatList
        numColumns={2}
        data={charactersData}
        renderItem={renderCharacters}
      />
    </View>
  );
};
export default CharactersLayout;
