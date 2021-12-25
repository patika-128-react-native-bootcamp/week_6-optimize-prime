import React from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './Loading.style';
const Loading = props => {
  return (
    <View style={styles.loadingContainer}>
      <LottieView source={require('../../Assets/loading.json')} autoPlay loop style={styles.loading} />
    </View>
  );
};
export default Loading;
