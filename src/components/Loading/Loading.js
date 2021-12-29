import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import {useSelector} from 'react-redux';
import styles from './Loading.style';

const Loading = props => {
  const theme = useSelector(state => state.theme);
  return (
    <View style={styles[theme].loadingContainer}>
      <LottieView
        source={require('../../Assets/loading.json')}
        autoPlay
        loop
        style={styles[theme].loading}
      />
    </View>
  );
};
export default Loading;
