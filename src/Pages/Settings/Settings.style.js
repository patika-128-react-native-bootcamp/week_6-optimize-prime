import { StyleSheet, Dimensions } from 'react-native';
import spacing from '../../styles/spacing';
import fontSize from '../../styles/fontSize';
import radius from '../../styles/radius';
import colors from '../../styles/colors';
const { width, height } = Dimensions.get('window');

const baseStyles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    paddingVertical: 200,
  },
  innerContainer: {
    width: width * 0.9,
    alignItems: 'center',
  },
  title: {
    fontSize: fontSize.big,
    marginBottom: spacing.normal,
    fontFamily: 'Proxima Nova Semibold',
  }
});

export default {
  light: StyleSheet.create({
    ...baseStyles,
    container: {
      ...baseStyles.container,
      backgroundColor: colors.light.backgroundColor,
    },
    title: {
      ...baseStyles.title,
      color: colors.light.primaryTextColor
    }
  }),
  dark: StyleSheet.create({
    ...baseStyles,
    container: {
      ...baseStyles.container,
      backgroundColor: colors.dark.backgroundColor,
    },
    title: {
      ...baseStyles.title,
      color: colors.dark.primaryTextColor
    }
  }),
};


