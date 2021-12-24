import {StyleSheet} from 'react-native';
import spacing from '../../styles/spacing';
import radius from '../../styles/radius';

const baseStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: spacing.tiny,
    borderRadius: radius.smooth,
    paddingRight: spacing.normal,
  },
  input_container: {
    flex: 1,
    padding: spacing.tiny,
  },
  input: {
    padding: 0,
  },
});
export default {
  light: StyleSheet.create({
    ...baseStyles,
    container: {
      ...baseStyles.container,
      backgroundColor: '#bdbdbd',
    },
  }),
  dark: StyleSheet.create({
    ...baseStyles,
    container: {
      ...baseStyles.container,
      backgroundColor: '#bdbdbd',
    },
  }),
};
