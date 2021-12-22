import {StyleSheet, Dimensions} from 'react-native';
import spacing from '../../styles/spacing';
import fontSize from '../../styles/fontSize';

const {width, height} = Dimensions.get('window');

const baseStyles = StyleSheet.create({
  container: {
    padding: spacing.tiny,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.5,
  },
  inner_container: {
    width:168,
    margin: spacing.tiny,
    borderWidth: 1,
    alignItems: 'center',
  },
  thumbnail: {
    width: 168,
    height: 252,
    backgroundColor:'gray',
  },
  title_container: {
    justifyContent: 'center',
    height: 50,
    padding: spacing.tiny,
  },
  title: {
    fontSize: fontSize.normal,
    flexWrap: 'wrap',
    fontFamily: 'Proxima Nova Semibold',
    fontWeight: 'bold',
    textAlign: 'center',
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
