import React from 'react';
import {View, Text, FlatList, TextInput, Button} from 'react-native';
import ThumbnailCard from '../../../components/ThumbnailCard';
import styles from './CharactersLayout.style';

const CharactersLayout = ({
  charactersData,
  setText,
  onSearch,
  onChracterPress,
}) => {
  const renderCharacters = ({item}) => {
    return (
      <ThumbnailCard
        thumbnail={item.thumbnail.path}
        title={item.name}
        onThumbnailCardPress={() => onChracterPress(item)}
      />
    );
  };
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setText}
        style={{backgroundColor: '#bdbdbd', margin: 5}}
      />
      <Button title="Search" onPress={onSearch} />
      <FlatList
        numColumns={2}
        data={charactersData}
        renderItem={renderCharacters}
      />
    </View>
  );
};
export default CharactersLayout;
