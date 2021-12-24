import React from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './DetailCard.style';

const DetailCard = ({thumbnail, title, description,typeName}) => {
  const thumbnailSize = '.jpg';
  const theme = useSelector(state => state.theme);
  return (
    <View style={styles[theme].inner_container}>
      <Image
        style={styles[theme].thumbnail}
        source={{uri: `${thumbnail}${thumbnailSize}`}}
      />
      <Text style={styles[theme].title}>{title}</Text>
      <Text style={styles[theme].description}>
        {description == '#N/A' || description == '' || description == null
          ? 'Description Not Found'
          : description}
      </Text>
      <Text style={styles[theme].title}>{typeName}</Text>
    </View>
  );
};
export default DetailCard;
