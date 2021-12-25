import React from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './DetailCard.style';

const DetailCard = ({thumbnail, title, description, typeName}) => {
  const thumbnailSize = '.jpg';
  const theme = useSelector(state => state.theme);
  return (
    <View style={styles[theme].inner_container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles[theme].thumbnail}
          source={{uri: `${thumbnail}${thumbnailSize}`}}
        />
        {/* <LinearGradient colors={['black', 'white', 'black']} style={styles.linearGradient}>
              </Image>
            </LinearGradient> */}
        <Text numberOfLines={2} style={styles[theme].title}>
          {title}
        </Text>
      </View>
      <Text style={styles[theme].description}>
        {description == '#N/A' || description == '' || description == null
          ? 'Description Not Found'
          : description}
      </Text>
      <Text style={styles[theme].characters}>{typeName}</Text>
    </View>
  );
};
export default DetailCard;
