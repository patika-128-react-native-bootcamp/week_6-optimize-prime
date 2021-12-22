import React from 'react';
import { View, Text, FlatList, TouchableWithoutFeedback, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styles from './FavoritesLayout.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const FavoritesLayout = ({ onItemPress, onPress, favoritesList }) => {
  const theme = useSelector(state => state.theme);
  const thumbnailSize = '/portrait_fantastic.jpg';




  const renderComics = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={() => onItemPress(item)}>
        <View style={styles[theme].container}>
          <View style={styles[theme].inner_container}>
            <View style={styles[theme].favContainer}>
              <TouchableWithoutFeedback onPress={onPress}>
                <Icon name="star" size={37} color="white" />
              </TouchableWithoutFeedback>
            </View>
            <Image
              style={styles[theme].thumbnail}
              source={{ uri: `${item.thumbnail.path}${thumbnailSize}` }}
            />
            <View style={styles[theme].title_container}>
              <Text numberOfLines={2} style={styles[theme].title}>
                {item.title}
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View>
      <FlatList data={favoritesList} renderItem={renderComics} />
    </View>
  );
}


export default FavoritesLayout;
