import React from 'react';
import {View, Text, FlatList, TextInput, Button} from 'react-native';
import Loading from '../../../components/Loading';
import SearchBar from '../../../components/SearchBar';
import ThumbnailCard from '../../../components/ThumbnailCard';
import colors from '../../../styles/colors';
import styles from './CharactersLayout.style';

const CharactersLayout = ({
  charactersData,
  setText,
  onSearch,
  onCharacterPress,
  onAddFavorites,
  onSearchSubmit,
  loadingSearch,
  theme,
  favoritesList,
}) => {
  const renderCharacters = ({item}) => {
    const isFavorite =
      favoritesList.findIndex(find => {
        return find.id === item.id;
      }) > -1;
    return (
      <ThumbnailCard
        thumbnail={item.thumbnail.path}
        title={item.name}
        onPress={() => onAddFavorites(item)}
        onThumbnailCardPress={() => onCharacterPress(item)}
        iconColor={isFavorite === true ? colors[theme].accentColor : 'white'}
      />
    );
  };
  return (
    <View style={styles[theme].container}>
      <SearchBar
        onChangeText={setText}
        onSearch={onSearch}
        onSubmitEditing={onSearchSubmit}
        placeholder="Search..."
      />
      {loadingSearch ? (
        <Loading />
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
