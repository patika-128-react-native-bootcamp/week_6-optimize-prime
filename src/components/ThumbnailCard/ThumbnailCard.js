import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './ThumbnailCard.style';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ThumbnailCard = ({
  thumbnail,
  title,
  onThumbnailCardPress,
  onPress,
  iconColor = 'white',
}) => {
  const thumbnailSize = '/portrait_fantastic.jpg';
  const theme = useSelector(state => state.theme);

  return (
    <TouchableWithoutFeedback onPress={onThumbnailCardPress}>
      <View style={styles[theme].container}>
        <View style={styles[theme].inner_container}>
          <View style={styles[theme].favContainer}>
            <TouchableWithoutFeedback onPress={onPress}>
              <Icon name="star" size={37} color={iconColor} />
            </TouchableWithoutFeedback>
          </View>
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
