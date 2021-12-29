import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import { useTranslation } from "react-i18next";

import {useSelector} from 'react-redux';
import DetailCard from '../../../components/DetailCard';
import ThumbnailCard from '../../../components/ThumbnailCard';
import styles from './CharacterDetailLayout.style';

const CharacterDetailLayout = ({characterData, comicsData, onComicPress}) => {
  const thumbnailSize = '.jpg';

  const theme = useSelector(state => state.theme);

  const flatListHeader = () => {
    const { t, i18n } = useTranslation();
    return (
      <DetailCard
        thumbnail={characterData.thumbnail.path}
        title={characterData.name}
        description={characterData.description}
        typeName={comicsData.length > 0 ? 'Comics' : t('Comics not found')}
      />
    );
  };
  const renderComics = ({item}) => {
    return (
      <ThumbnailCard
        thumbnail={item.thumbnail.path}
        title={item.title}
        onThumbnailCardPress={() => onComicPress(item)}
        iconColor={"none"}
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
export default CharacterDetailLayout;
