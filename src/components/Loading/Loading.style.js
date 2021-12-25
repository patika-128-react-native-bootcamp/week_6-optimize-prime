import { StyleSheet, Dimensions } from 'react-native';
import spacing from '../../styles/spacing';
import fontSize from '../../styles/fontSize';
import radius from '../../styles/radius';
import colors from '../../styles/colors';

const { width, height } = Dimensions.get('window');
const baseStyles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loading: {
    width: width * 0.35,
    height: height * 0.35
  }
});

export default {
  light: StyleSheet.create({
    ...baseStyles,
    loadingContainer: {
      backgroundColor: colors.light.backgroundColor
    },
  }),
  dark: StyleSheet.create({
    ...baseStyles,
    backgroundColor: colors.dark.backgroundColor
  }),
};
