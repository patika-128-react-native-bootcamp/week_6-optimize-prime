import { StyleSheet, Dimensions } from 'react-native';
import spacing from '../../styles/spacing';
import fontSize from '../../styles/fontSize';
import radius from '../../styles/radius';
import colors from '../../styles/colors';
const { width, height } = Dimensions.get('window');

const baseStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
});

export default {
  light: StyleSheet.create({
    ...baseStyles,
    container: {
      backgroundColor: colors.light.backgroundColor,
    },
  }),
  dark: StyleSheet.create({
    ...baseStyles,
    container: {
      backgroundColor: colors.dark.backgroundColor,
    },
  }),
};


