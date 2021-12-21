import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './DetailLayout.style';

const DetailLayout = ({ navigation, comicData }) => {
  console.log("DetailLayout", comicData.description)
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left-circle" size={40} color="white" />
      </TouchableOpacity>
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={{ uri: `${comicData.thumbnail.path}/portrait_medium.jpg` }} />
        <Text style={styles.title}>{comicData.title}</Text>
      </ScrollView>
      <Text style={styles.description}>{comicData.description}</Text>
    </View>
  );
}

export default DetailLayout;
