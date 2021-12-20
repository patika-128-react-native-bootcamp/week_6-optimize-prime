import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from './HomeLayout.style';

const HomeLayout = ({ comicData }) => {
  // console.log("Layout", comicData);
  const renderComics = ({ item }) => {
    return (
      <>
        <View style={styles.comicContainer} >
          <Image style={styles.thumbnail} source={{ uri: `${item.thumbnail.path}/portrait_medium.jpg` }} />
          <View style={styles.titleContainer}>
            <Text numberOfLines={2} style={styles.title} >{item.title}</Text>
          </View>
        </View>
      </>
    );

  };
  return (
    <View style={styles.container}>
      <FlatList numColumns={2} renderItem={renderComics} data={comicData} />
    </View>
  );
};
export default HomeLayout;
