import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import useFetch from '../../hooks/useFetch/useFetch';
import CharacterDetailLayout from './CharacterDetailLayout';
import Loading from '../../components/Loading';
import {Text} from 'react-native';

const CharacterDetail = props => {
  const route = useRoute();
  const navigation = useNavigation();
  const {characterData} = route.params;

  const {loading, error, data} = useFetch(
    `characters/${characterData.id}/comics`,
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
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Text>error</Text>;
  }

  return (
    <CharacterDetailLayout
      characterData={characterData}
      comicsData={comicsData}
      onComicPress={handleGoComic}
    />
  );
};
export default CharacterDetail;
