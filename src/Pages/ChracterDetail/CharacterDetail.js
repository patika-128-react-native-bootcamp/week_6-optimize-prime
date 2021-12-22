import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import useFetch from '../../hooks/useFetch/useFetch';
import ChracterDetailLayout from './ChracterDetailLayout';

const CharacterDetail = props => {
  const route = useRoute();
  const navigation = useNavigation();
  const {chracterData} = route.params;

  const {loading, error, data} = useFetch(
    `characters/${chracterData.id}/comics`,
    '',
  );
  const [comicsData, setComicsData] = useState([]);

  useEffect(() => {
    if (data !== null) {
      console.log(data);
      setComicsData(data);
    }
  }, [data]);
  const handleGoComic = item => {
    navigation.navigate('ComicDetail', {comicData: item});
  };

  return (
    <ChracterDetailLayout
      chracterData={chracterData}
      comicsData={comicsData}
      onComicPress={handleGoComic}
    />
  );
};
export default CharacterDetail;
