import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../../styles/colors';

const { width, height } = Dimensions.get('window');

const baseStyles = StyleSheet.create({
  container: {
    marginTop: 50,
    width: width,
    flex: 1,
  },
});

export default {
  light: StyleSheet.create({
    ...baseStyles,
    container:{
      ...baseStyles.container,
      backgroundColor: colors.light.backgroundColor
    }
  }),
  dark: StyleSheet.create({
    ...baseStyles,
    container:{
      ...baseStyles.container,
      backgroundColor: colors.dark.backgroundColor
    }
  }),
};
