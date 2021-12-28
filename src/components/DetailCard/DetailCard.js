import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './DetailCard.style';

const DetailCard = ({thumbnail, title, description, typeName}) => {
  const {t, i18n} = useTranslation();
  const thumbnailSize = '.jpg';
  const theme = useSelector(state => state.theme);
  const navigation = useNavigation();
  return (
    <View style={styles[theme].container}>
      <View style={styles[theme].imageContainer}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <View style={styles[theme].goBackContainer}>
            <Icon name="chevron-left" size={30} color={'white'} />
            <Text style={styles[theme].backText}>Back</Text>
          </View>
        </TouchableWithoutFeedback>
        <Image
          style={styles[theme].thumbnail}
          source={{uri: `${thumbnail}${thumbnailSize}`}}
        />
        <Text numberOfLines={2} style={styles[theme].title}>
          {title}
        </Text>
      </View>
      <Text style={styles[theme].description}>
        {description == '#N/A' || description == '' || description == null
          ? t('Description not found')
          : description}
      </Text>
      <Text style={styles[theme].characters}>{typeName}</Text>
    </View>
  );
};
export default DetailCard;
