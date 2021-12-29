import {StyleSheet, Dimensions} from 'react-native';
import spacing from '../../styles/spacing';
import fontSize from '../../styles/fontSize';
import colors from '../../styles/colors';

const {width, height} = Dimensions.get('window');

const baseStyles = StyleSheet.create({
  container: {
    padding: spacing.tiny,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.5,
  },
  inner_container: {
    width: 168,
    margin: spacing.tiny,
    alignItems: 'center',
  },
  favContainer: {
    position: 'absolute',
    zIndex: 10,
    right: 10,
    top: 10,
  },
  thumbnail: {
    width: 168,
    height: 252,
    backgroundColor: 'gray',
    borderRadius: 7,
  },
  title_container: {
    justifyContent: 'center',
    height: 55,
    padding: spacing.tiny,
  },
  title: {
    fontSize: fontSize.normal,
    flexWrap: 'wrap',
    fontFamily: 'Proxima Nova Semibold',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    lineHeight: 21,
    marginTop: spacing.tiny,
  },
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
      color: colors.light.primaryTextColor,
    },
  }),
  dark: StyleSheet.create({
    ...baseStyles,
    container: {
      ...baseStyles.container,
      backgroundColor: colors.dark.backgroundColor,
    },
    title: {
      ...baseStyles.title,
      color: colors.dark.primaryTextColor,
    },
  }),
};
