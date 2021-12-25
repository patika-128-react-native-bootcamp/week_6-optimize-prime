import React from 'react';
import { View, Text, Image, ScrollView, FlatList, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './ComicDetailLayout.style';
import ThumbnailCard from '../../../components/ThumbnailCard';
import DetailCard from '../../../components/DetailCard';

const ComicDetailLayout = ({ comicData, charactersData, onChracterPress }) => {
  const thumbnailSize = '.jpg';
  console.log(`${comicData.thumbnail.path}${thumbnailSize}`);
  const theme = useSelector(state => state.theme);

  const flatListHeader = () => {
    return (
      // <DetailCard
      //   thumbnail={comicData.thumbnail.path}
      //   title={comicData.title}
      //   description={comicData.description}
      //   typeName={
      //     charactersData.length > 0 ? 'Chracters' : 'Chracters Not Found'
      //   }
      // />
      <View style={styles[theme].inner_container}>
        <View style={styles.imageContainer}>
          <LinearGradient colors={['black', 'white', 'black']} style={styles.linearGradient}>
            <Image
              style={styles[theme].thumbnail}
              source={{ uri: `${comicData.thumbnail.path}${thumbnailSize}` }}
            >
            </Image>
          </LinearGradient>
          <Text numberOfLines={2} style={styles[theme].title}>{comicData.title}</Text>
        </View>
        <Text style={styles[theme].description}>
          {comicData.description == '#N/A' ||
            comicData.description == '' ||
            comicData.description == null
            ? 'Description Not Found'
            : comicData.description}
        </Text>
        <Text style={styles[theme].characters}>Characters</Text>
      </View>
    );
  };

  const renderCharacters = ({ item }) => {
    return (
      <ThumbnailCard
        thumbnail={item.thumbnail.path}
        title={item.name}
        onThumbnailCardPress={() => onChracterPress(item)}
      />
    );

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
