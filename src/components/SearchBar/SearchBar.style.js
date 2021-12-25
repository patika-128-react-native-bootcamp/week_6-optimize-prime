import { StyleSheet, Dimensions } from 'react-native';
import spacing from '../../styles/spacing';
import radius from '../../styles/radius';

const { width, height } = Dimensions.get('window');


const baseStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: spacing.tiny,
    // borderRadius: radius.smooth,
    borderBottomWidth: 2,
    borderColor: "white",
    marginHorizontal: 15,
    paddingHorizontal: 5,
    justifyContent: 'space-between',
  },
  input_container: {
    flex: 1,
    // padding: spacing.tiny,
    
  },
  input: {
    width: width * 0.7,
    fontFamily: 'Proxima Nova Semibold',

  },
});
export default {
  light: StyleSheet.create({
    ...baseStyles,
    container: {
      ...baseStyles.container,
    },
    input_container: {
    }
  }),
  dark: StyleSheet.create({
    ...baseStyles,
    container: {
      ...baseStyles.container,
      backgroundColor: '#bdbdbd',
    },
  }),
};
