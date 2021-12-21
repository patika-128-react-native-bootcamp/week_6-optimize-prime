import {StyleSheet, Dimensions} from 'react-native';
import spacing from '../../styles/spacing';

const {width, height} = Dimensions.get('window');

const baseStyles = StyleSheet.create({
  container: {
    padding: spacing.tiny,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.5,
  },
  inner_container: {
    margin: 5,
    borderWidth: 1,
  },
  thumbnail: {
    width: 168,
    height: 252,
  },
  title_container: {
    justifyContent: 'center',
    height: 50,
  },
  title: {
    fontSize: 15,
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
