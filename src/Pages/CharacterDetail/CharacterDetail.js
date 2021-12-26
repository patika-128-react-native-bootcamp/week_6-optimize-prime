import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import useFetch from '../../hooks/useFetch/useFetch';
import CharacterDetailLayout from './CharacterDetailLayout';
import Loading from '../../components/Loading';
import {Text} from 'react-native';
import routes from '../../Navigation/routes';

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
      setComicsData(data);
    }
  }, [data]);
  const handleGoComic = item => {
    navigation.navigate(routes.COMIC_DETAIL, {comicData: item});
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
