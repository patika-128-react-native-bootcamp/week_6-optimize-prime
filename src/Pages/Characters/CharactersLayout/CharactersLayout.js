import React from 'react';
import {View, Text, FlatList} from 'react-native';
import ThumbnailCard from '../../../components/ThumbnailCard';
import styles from './CharactersLayout.style';

const CharactersLayout = ({charactersData}) => {
  const renderCharacters = ({item}) => {
    console.log('item', item);
    return <ThumbnailCard thumbnail={item.thumbnail.path} title={item.name} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={charactersData}
        renderItem={renderCharacters}
      />
    </View>
  );
};
export default CharactersLayout;
