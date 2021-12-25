import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const baseStyles = StyleSheet.create({
  container: {
    marginTop: 50,
    width: width,
    flex: 1,
    // backgroundColor: "black",
  },
});
export default {
  light: StyleSheet.create({
    ...baseStyles,
  }),
  dark: StyleSheet.create({
    ...baseStyles,
  }),
};
