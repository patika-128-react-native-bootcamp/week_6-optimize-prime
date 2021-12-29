import React, { useState } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './ThumbnailCard.style';
import colors from "../../styles/colors"

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ThumbnailCard = ({
  thumbnail,
  title,
  onThumbnailCardPress,
  onPress,
  iconColor = 'white',
}) => {
  const [colorChange, setColorChange] = useState(iconColor)
  const thumbnailSize = '/portrait_fantastic.jpg';
  const theme = useSelector(state => state.theme);

  const handleChange = () => {
    setColorChange(colorChange == iconColor ? colors.accentColor : colors.accentColor)
    onPress()
  }

  return (
    <TouchableWithoutFeedback onPress={onThumbnailCardPress}>
      <View style={styles[theme].container}>
        <View style={styles[theme].inner_container}>
          {iconColor !== "none" ? <View style={styles[theme].favContainer}>
            <Icon name="star" size={37} color={iconColor} onPress={handleChange} />
          </View> :
            <View></View>}
          <Image
            style={styles[theme].thumbnail}
            source={{ uri: `${thumbnail}${thumbnailSize}` }}
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
