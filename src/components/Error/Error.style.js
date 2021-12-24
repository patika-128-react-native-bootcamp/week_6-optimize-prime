import {StyleSheet} from 'react-native';

const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
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
