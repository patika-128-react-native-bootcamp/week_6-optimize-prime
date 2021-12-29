import React from 'react';
import {View, Text, FlatList, TextInput, Button} from 'react-native';
import {useTranslation} from 'react-i18next';
import SearchBar from '../../../components/SearchBar';
import ThumbnailCard from '../../../components/ThumbnailCard';
import colors from '../../../styles/colors';
import styles from './CharactersLayout.style';

const CharactersLayout = ({
  charactersData,
  setText,
  onSearch,
  onClear,
  onCharacterPress,
  onAddFavorites,
  onSearchSubmit,
  theme,
  favoritesList,
}) => {
  const {t, i18n} = useTranslation();
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
        placeholder={t('Search')}
        onClear={onClear}
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
