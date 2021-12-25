import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import colors from '../../styles/colors';
import styles from './SearchBar.style';

const SearchBar = ({onSearch, ...otherProps}) => {
  const theme = useSelector(state => state.theme);
  return (
    <View style={styles[theme].container}>
      <View style={styles[theme].input_container}>
        <TextInput
          {...otherProps}
          color={'white'}
          style={styles[theme].input}
          placeholderTextColor={
            theme === 'light'
              ? colors.light.primaryTextColor
              : colors.dark.primaryTextColor
          }
        />
      </View>
      <Icon
        name="close"
        size={20}
        color={
          theme === 'light'
            ? colors.light.primaryTextColor
            : colors.dark.primaryTextColor
        }
      />
      <Icon
        name="magnify"
        size={30}
        onPress={onSearch}
        color={
          theme === 'light'
            ? colors.light.primaryTextColor
            : colors.dark.primaryTextColor
        }
      />
    </View>
  );
};
export default SearchBar;
