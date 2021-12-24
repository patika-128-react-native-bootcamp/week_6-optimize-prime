import {StyleSheet, Dimensions} from 'react-native';
import spacing from '../../styles/spacing';
import fontSize from '../../styles/fontSize';

const {width, height} = Dimensions.get('window');
const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner_container: {
    padding: spacing.tiny,
    alignItems: 'center',
    resizeMode: 'contain',
  },
  thumbnail: {
    width: width,
    height: height / 2,
    resizeMode: 'stretch',
  },
  title: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontFamily: 'Proxima Nova Semibold',
    fontSize: fontSize.large,
    textAlign: 'left',
  },
  description: {
    alignSelf: 'flex-start',
    fontFamily: 'Proxima Nova Semibold',
    fontSize: fontSize.normal,
    textAlign: 'left',
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
