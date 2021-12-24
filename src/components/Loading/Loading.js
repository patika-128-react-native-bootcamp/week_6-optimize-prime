import React from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';

const Loading = props => {
  return (
    <LottieView source={require('../../Assets/loading.json')} autoPlay loop />
  );
};
export default Loading;
