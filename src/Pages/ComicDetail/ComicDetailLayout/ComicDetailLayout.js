import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  ImageBackground,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";
import styles from './ComicDetailLayout.style';
import ThumbnailCard from '../../../components/ThumbnailCard';
import DetailCard from '../../../components/DetailCard';

const ComicDetailLayout = ({ comicData, charactersData, onCharacterPress }) => {
  const thumbnailSize = '.jpg';
  console.log(`${comicData.thumbnail.path}${thumbnailSize}`);
  const theme = useSelector(state => state.theme);

  const flatListHeader = () => {
    const { t, i18n } = useTranslation();
    return (
      <DetailCard
        thumbnail={comicData.thumbnail.path}
        title={comicData.title}
        description={comicData.description}
        typeName={
          charactersData.length > 0 ? 'Characters' : t('Characters not found')
        }
      />
    );
  };

  const renderCharacters = ({ item }) => {
    return (
      <ThumbnailCard
        thumbnail={item.thumbnail.path}
        title={item.name}
        onThumbnailCardPress={() => onCharacterPress(item)}
        onPress={() => { }}
        iconColor={"none"}
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
