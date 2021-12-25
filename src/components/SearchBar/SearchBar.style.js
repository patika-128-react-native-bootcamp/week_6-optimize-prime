import {StyleSheet, Dimensions} from 'react-native';
import spacing from '../../styles/spacing';
import radius from '../../styles/radius';
import colors from '../../styles/colors';

const {width, height} = Dimensions.get('window');

const baseStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: spacing.tiny,
    borderBottomWidth: 2,
    marginHorizontal: 15,
    paddingHorizontal: 5,
    justifyContent: 'space-between',
  },
  input_container: {
    flex: 1,
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
      borderColor: colors.light.primaryTextColor,
      backgroundColor: colors.light.backgroundColor,
    },

    input: {
      color: colors.light.primaryTextColor,
    },
  }),
  dark: StyleSheet.create({
    ...baseStyles,

    container: {
      ...baseStyles.container,
      borderColor: colors.dark.primaryTextColor,
      backgroundColor: colors.dark.backgroundColor,
    },

    input: {
      color: colors.dark.primaryTextColor,
    },
  }),
};
