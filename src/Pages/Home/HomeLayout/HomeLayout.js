import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from './HomeLayout.style';

const HomeLayout = ({ comicData, navigation }) => {
  console.log("Layout", comicData);

  const handleDetail = comicData => {
    navigation.navigate('Detail', { comicData });
  };

  const renderComics = ({ item }) => {
    // console.log("item", item.title)
    return (
      <>
        <View style={styles.comicContainer} >
          <TouchableOpacity onPress={() => {
            return (
              handleDetail(item)
            )
          }}>
            <Image style={styles.thumbnail} source={{ uri: `${item.thumbnail.path}/portrait_medium.jpg` }} />
            <View style={styles.titleContainer}>
              <Text numberOfLines={2} style={styles.title} >{item.title}</Text>
            </View>
          </TouchableOpacity>
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
