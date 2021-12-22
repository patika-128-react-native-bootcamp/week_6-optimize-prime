import React from 'react';
import { View, FlatList, TextInput, Button } from 'react-native';
import SearchBar from '../../../components/SearchBar';
import ThumbnailCard from '../../../components/ThumbnailCard';
import styles from './HomeLayout.style';
import { useDispatch } from 'react-redux';


const HomeLayout = ({
  comicData,
  setText,
  onItemPress,
  theme,
  onSearch,
  onSearchSubmit,
}) => {
  const dispatch = useDispatch();

  const renderComics = ({ item }) => {
    const handleAddFavorites = comic =>
      dispatch({
        type: 'ADD_TO_FAVORITES',
        payload: {
          comic,
        },
      });


    return (
      <ThumbnailCard
        thumbnail={item.thumbnail.path}
        title={item.title}
        onThumbnailCardPress={() => onItemPress(item)}
        onPress={() => handleAddFavorites(item)}
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
      <FlatList numColumns={2} data={comicData} renderItem={renderComics} />
    </View>
  );
};
export default HomeLayout;
