import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import ComicDetailLayout from './ComicDetailLayout';
import useFetch from '../../hooks/useFetch/useFetch';
import { Text } from 'react-native';
import Loading from '../../components/Loading';
import routes from '../../Navigation/routes';

const ComicDetail = props => {
  const route = useRoute();
  const navigation = useNavigation();
  const {comicData} = route.params;
  const {loading, error, data} = useFetch(
    `comics/${comicData.id}/characters`,
    '',
  );
  const [charactersData, setCharactersData] = useState([]);
  useEffect(() => {
    if (data !== null) {
      console.log(data);
      setCharactersData(data);
    }
  }, [data]);
  const handleGoCharacter= (item) => {
    navigation.navigate(routes.CHARACTER_DETAIL_PAGE, {characterData: item});
  }
  if(loading){
    return <Loading/>
  }
  if(error){
    return <Text>error</Text>
  }

  return (
    <ComicDetailLayout comicData={comicData} charactersData={charactersData} onCharacterPress={handleGoCharacter} />
  );
};
export default ComicDetail;
