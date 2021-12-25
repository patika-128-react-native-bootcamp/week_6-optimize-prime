import { StyleSheet, Dimensions } from 'react-native';
import spacing from '../../../styles/spacing';
import fontSize from '../../../styles/fontSize';

const { width, height } = Dimensions.get('window');
const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner_container: {
    alignItems: 'center',
    resizeMode: 'contain',
    position: 'relative'
  },
  thumbnail: {
    width: width,
    height: width * 1.3,

  },
  title: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontFamily: 'Proxima Nova Semibold',
    fontSize: fontSize.large,
    textAlign: 'left',
    color: "white",
    position: "absolute",
    bottom: 0,
    padding: spacing.large,
    fontSize: fontSize.huge,

  },
  description: {
    alignSelf: 'flex-start',
    fontFamily: 'Proxima Nova Semibold',
    fontSize: fontSize.normal,
    textAlign: "justify",
    color: 'white',
    padding: spacing.large,
  },
  comicsTitle: {
    color: "white",
    fontSize: fontSize.huge,
    fontFamily: 'Proxima Nova Semibold',

  }

});

export default {
  light: StyleSheet.create({
    ...baseStyles,
  }),
  dark: StyleSheet.create({
    ...baseStyles,
  }),
};
