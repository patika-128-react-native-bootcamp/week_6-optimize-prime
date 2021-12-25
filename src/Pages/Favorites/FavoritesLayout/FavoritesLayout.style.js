import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    marginTop: 50,
    width: width,
    flex: 1,
    // backgroundColor: "black",
  },
});
