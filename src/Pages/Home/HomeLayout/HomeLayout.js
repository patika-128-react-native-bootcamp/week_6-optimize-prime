import React from 'react';
import {View, FlatList, TextInput, Button, Text, StatusBar} from 'react-native';
import Loading from '../../../components/Loading';
import SearchBar from '../../../components/SearchBar';
import ThumbnailCard from '../../../components/ThumbnailCard';
import colors from '../../../styles/colors';
import styles from './HomeLayout.style';

const HomeLayout = ({
  comicData,
  setText,
  onItemPress,
  theme,
  onSearch,
  onSearchSubmit,
  onAddFavorites,
  favoritesList,
  loadingSearch,
}) => {
  const renderComics = ({item}) => {
    const isFavorite =
      favoritesList.findIndex(find => {
        console.log(find.id === item.id);
        return find.id === item.id;
      }) > -1;

    return (
      <ThumbnailCard
        thumbnail={item.thumbnail.path}
        title={item.title}
        onThumbnailCardPress={() => onItemPress(item)}
        onPress={() => onAddFavorites(item)}
        iconColor={isFavorite === true ? colors[theme].accentColor : 'white'}
      />
    );
  };

  return (
    <View style={styles[theme].container}>
      <StatusBar
        animated={true}
        backgroundColor={
          theme == 'light'
            ? colors.light.backgroundColor
            : colors.dark.backgroundColor
        }
        // translucent={true}
      />
      <SearchBar
        onChangeText={setText}
        onSearch={onSearch}
        onSubmitEditing={onSearchSubmit}
        placeholder="Search..."
      />
      {loadingSearch ? (
        <Loading />
      ) : (
        <FlatList numColumns={2} data={comicData} renderItem={renderComics} />
      )}
    </View>
  );
};
export default HomeLayout;
