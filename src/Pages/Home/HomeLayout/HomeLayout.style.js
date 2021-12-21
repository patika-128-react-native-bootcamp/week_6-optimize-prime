import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    justifyContent: 'space-around',
  },
});
