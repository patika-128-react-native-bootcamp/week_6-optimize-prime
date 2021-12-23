import React from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './ComicDetailLayout.style';
import ThumbnailCard from '../../../components/ThumbnailCard';

const ComicDetailLayout = ({comicData, charactersData}) => {
  const thumbnailSize = '.jpg';
  console.log(`${comicData.thumbnail.path}${thumbnailSize}`);
  const theme = useSelector(state => state.theme);

  const flatListHeader = () => {
    return (
      <View style={styles[theme].inner_container}>
        <Image
          style={styles[theme].thumbnail}
          source={{uri: `${comicData.thumbnail.path}${thumbnailSize}`}}
        />
        <Text style={styles[theme].title}>{comicData.title}</Text>
        <Text style={styles[theme].description}>
          {comicData.description == '#N/A' ||
          comicData.description == '' ||
          comicData.description == null
            ? 'Description Not Found'
            : comicData.description}
        </Text>
        <Text style={styles[theme].title}>Characters</Text>
      </View>
    );
  };

  const renderCharacters = ({item}) => {
    return <ThumbnailCard thumbnail={item.thumbnail.path} title={item.name} />;
  };

  return (
    <View style={styles[theme].container}>
      <FlatList
        numColumns={2}
        data={charactersData}
        renderItem={renderCharacters}
        ListHeaderComponent={flatListHeader}
      />
    </View>
  );
};
export default ComicDetailLayout;
