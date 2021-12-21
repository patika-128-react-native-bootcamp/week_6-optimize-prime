import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './ThumbnailCard.style';

const ThumbnailCard = ({thumbnail, title,onThumbnailCardPress}) => {
  const thumbnailSize = '/portrait_fantastic.jpg';
  const theme = useSelector(state => state.theme);
  return (
    <TouchableWithoutFeedback onPress={onThumbnailCardPress}>
      <View style={styles[theme].container}>
        <View style={styles[theme].inner_container}>
          <Image
            style={styles[theme].thumbnail}
            source={{uri: `${thumbnail}${thumbnailSize}`}}
          />
          <View style={styles[theme].title_container}>
            <Text numberOfLines={2} style={styles[theme].title}>
              {title}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default ThumbnailCard;
