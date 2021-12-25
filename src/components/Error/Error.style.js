import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default {
  light: StyleSheet.create({
    ...baseStyles,
    container: {
      ...baseStyles.container,
      backgroundColor: colors.light.backgroundColor,
    },
  }),
  dark: StyleSheet.create({
    ...baseStyles,
    container: {
      ...baseStyles.container,
      backgroundColor: colors.dark.backgroundColor,
    },
  }),
};
