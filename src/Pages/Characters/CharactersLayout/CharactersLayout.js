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
  loadingSearch,
  theme,
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
    <View style={styles[theme].container}>
      <SearchBar
        onChangeText={setText}
        onSearch={onSearch}
        onSubmitEditing={onSearchSubmit}
      />
      {loadingSearch ? (
        <Text>Loading</Text>
      ) : (
        <FlatList
          numColumns={2}
          data={charactersData}
          renderItem={renderCharacters}
        />
      )}
    </View>
  );
};
export default CharactersLayout;
