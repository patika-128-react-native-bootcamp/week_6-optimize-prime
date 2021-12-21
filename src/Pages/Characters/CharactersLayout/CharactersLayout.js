import React from 'react';
import {View, Text, FlatList, TextInput} from 'react-native';
import ThumbnailCard from '../../../components/ThumbnailCard';
import styles from './CharactersLayout.style';

const CharactersLayout = ({charactersData, setText}) => {
  const renderCharacters = ({item}) => {
    return <ThumbnailCard thumbnail={item.thumbnail.path} title={item.name} />;
  };
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setText}
        style={{backgroundColor: '#bdbdbd', margin: 5}}
      />
      <FlatList
        numColumns={2}
        data={charactersData}
        renderItem={renderCharacters}
      />
    </View>
  );
};
export default CharactersLayout;
