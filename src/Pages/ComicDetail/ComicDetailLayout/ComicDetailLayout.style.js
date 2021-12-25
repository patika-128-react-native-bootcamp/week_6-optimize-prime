import { StyleSheet, Dimensions } from 'react-native';
import spacing from '../../../styles/spacing';
import fontSize from '../../../styles/fontSize';
import colors from '../../../styles/colors';

const { width, height } = Dimensions.get('window');
const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  inner_container: {
    alignItems: 'center',
  },
  thumbnail: {
    width: width,
    height: width * 1.3,
  },
  title: {
    position: 'absolute',
    padding: spacing.large,
    bottom: 0,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontFamily: 'Proxima Nova Semibold',
    fontSize: fontSize.huge,
    textAlign: 'left',
    color: "white",
    backgroundColor: 'rgba(30, 30, 30, 0.5)',
    width: width,
  },

  description: {
    alignSelf: 'flex-start',
    fontFamily: 'Proxima Nova Semibold',
    fontSize: fontSize.normal,
    textAlign: 'left',
    color: "white",
    textAlign: 'justify',
    padding: spacing.large,

  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    position: 'absolute',
    zIndex: 100,

  },
  characters: {
    color: "white",
    fontSize: 24,
  },
  image_container: {
    position: "relative",
  },
  gradient: {
    width: width,
    height: width * 1.3,
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
