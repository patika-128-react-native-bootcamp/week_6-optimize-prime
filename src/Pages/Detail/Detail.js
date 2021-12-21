import React from 'react';
import { View, Text } from 'react-native';

import DetailLayout from './DetailLayout'

const Detail = ({ route, navigation }) => {
  const { comicData } = route.params
  console.log("DetailData", comicData)
  return (
    <DetailLayout comicData={comicData} navigation={navigation} />
  );
}
export default Detail;
