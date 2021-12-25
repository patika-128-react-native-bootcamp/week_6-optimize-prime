import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { useSelector } from 'react-redux';
import ThumbnailCard from '../../../components/ThumbnailCard';
import styles from './ChracterDetailLayout.style';

const ChracterDetailLayout = ({ chracterData, comicsData, onComicPress }) => {
  const thumbnailSize = '.jpg';

  const theme = useSelector(state => state.theme);

  const flatListHeader = () => {
    return (
      // <DetailCard
      //   thumbnail={chracterData.thumbnail.path}
      //   title={chracterData.title}
      //   description={chracterData.description}
      //   typeName={comicsData.length > 0 ? 'Comics' : 'Comics Not Found'}
      // />
      <View style={styles[theme].inner_container}>
        <View style={styles[theme].imageContainer}>
          <Image
            style={styles[theme].thumbnail}
            source={{ uri: `${chracterData.thumbnail.path}${thumbnailSize}` }}
          />
          <Text style={styles[theme].title}>{chracterData.name}</Text>
        </View>
        <Text style={styles[theme].description}>
          {chracterData.description == '#N/A' ||
            chracterData.description == '' ||
            chracterData.description == null
            ? 'Description Not Found'
            : chracterData.description}
        </Text>
        <Text style={styles[theme].comicsTitle}>Comics</Text>
      </View>
    );
  };
  const renderComics = ({ item }) => {
    return (
      <ThumbnailCard
        thumbnail={item.thumbnail.path}
        title={item.title}
        onThumbnailCardPress={() => onComicPress(item)}
      />
    );
  };

  return (
    <View style={styles[theme].container}>
      <FlatList
        numColumns={2}
        data={comicsData}
        renderItem={renderComics}
        ListHeaderComponent={flatListHeader}
      />
    </View>
  );
};
export default ChracterDetailLayout;
