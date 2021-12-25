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
    justifyContent: 'flex-end',
    marginHorizontal: 15,
    paddingHorizontal: 10,
  },
  input_container: {
    flex: 1,
    padding: spacing.tiny,

  },
  input: {

  },
});
export default {
  light: StyleSheet.create({
    ...baseStyles,
    container: {
      ...baseStyles.container,
      backgroundColor: 'rgba(255, 255, 255, 0.5)'
    },
    input_container: {
      opacity: 0,
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
