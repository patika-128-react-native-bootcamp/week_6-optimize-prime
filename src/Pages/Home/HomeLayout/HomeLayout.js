import React from 'react';
import {View, FlatList, TextInput} from 'react-native';
import ThumbnailCard from '../../../components/ThumbnailCard';
import styles from './HomeLayout.style';

const HomeLayout = ({comicData, setText, onItemPress}) => {
  const renderComics = ({item}) => {
    return (
      <ThumbnailCard
        thumbnail={item.thumbnail.path}
        title={item.title}
        onThumbnailCardPress={() => onItemPress(item)}
      />
    );
  };
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setText}
        style={{backgroundColor: '#bdbdbd', margin: 5}}
      />
      <FlatList numColumns={2} data={comicData} renderItem={renderComics} />
    </View>
  );
};
export default HomeLayout;
