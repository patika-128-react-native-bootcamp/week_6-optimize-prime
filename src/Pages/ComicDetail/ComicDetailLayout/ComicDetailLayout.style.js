import { StyleSheet, Dimensions } from 'react-native';
import spacing from '../../../styles/spacing';
import fontSize from '../../../styles/fontSize';



const { width, height } = Dimensions.get('window');
const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  inner_container: {
    padding: spacing.large,
    alignItems: 'center',
  },
  thumbnail: {
    width: width,
    height: width * 1.5,
  },
  title: {
    position: 'absolute',
    padding: spacing.large,
    bottom: 0,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontFamily: 'Proxima Nova Semibold',
    fontSize: fontSize.large,
    textAlign: 'left',
    color: "white",
    fontSize: 32,
  },

  description: {
    alignSelf: 'flex-start',
    fontFamily: 'Proxima Nova Semibold',
    fontSize: fontSize.normal,
    textAlign: 'left',
    color: "white",
    marginVertical: 10,
    textAlign: 'justify',


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
