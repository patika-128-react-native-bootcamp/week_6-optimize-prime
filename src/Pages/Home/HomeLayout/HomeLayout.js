import React from 'react';
import { View, FlatList, TextInput, StatusBar } from 'react-native';
import ThumbnailCard from '../../../components/ThumbnailCard';
import styles from './HomeLayout.style';
import { useDispatch } from 'react-redux';


const HomeLayout = ({ comicData, setText, onItemPress, theme }) => {
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
      <TextInput
        onChangeText={setText}
        style={{ backgroundColor: '#bdbdbd', margin: 5 }}
      />
      <FlatList numColumns={2} data={comicData} renderItem={renderComics} />
    </View>
  );
};
export default HomeLayout;
