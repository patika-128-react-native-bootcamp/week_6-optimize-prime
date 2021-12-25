import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import styles from './SearchBar.style';

const SearchBar = ({onSearch, ...otherProps}) => {
  const theme = useSelector(state => state.theme);
  return (
    <View style={styles[theme].container}>
      <View style={styles[theme].input_container}>
        <TextInput {...otherProps} color={"white"}/>
      </View>
      <Icon name="magnify" size={30} onPress={onSearch} color={"white"} />
    </View>
  );
};
export default SearchBar;
