import React from 'react';
import LottieView from 'lottie-react-native';
import {useSelector} from 'react-redux';
import styles from './Error.style';
import {View} from 'react-native';

const Error = props => {
  const theme = useSelector(state => state.theme);
  const name = theme === 'light' ? 'error' : 'error1';
  return (
    <View style={styles[theme].container}>
      {name === 'error' ? (
        <LottieView source={require('../../Assets/error.json')} autoPlay loop />
      ) : (
        <LottieView
          source={require('../../Assets/error1.json')}
          autoPlay
          loop
        />
      )}
    </View>
  );
};
export default Error;
