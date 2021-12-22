import { StyleSheet, Dimensions } from 'react-native';
import spacing from '../../../styles/spacing';

const { width, height } = Dimensions.get('window');

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
    borderWidth: 1,
    alignItems: 'center',
  },
  favContainer: {
    position: "absolute",
    zIndex: 10,
    right: 10,
    top: 10,
  },
  thumbnail: {
    width: 168,
    height: 252,
    resizeMode: 'stretch'
  },
  title_container: {
    justifyContent: 'center',
    height: 50,
    padding: spacing.tiny,
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
