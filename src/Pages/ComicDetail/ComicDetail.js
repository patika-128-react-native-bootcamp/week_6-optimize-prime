import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import ComicDetailLayout from './ComicDetailLayout';
import useFetch from '../../hooks/useFetch/useFetch';
import { Text } from 'react-native';
import Loading from '../../components/Loading';

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
  const handleGoChracter= (item) => {
    navigation.navigate('ChracterDetailPage', {chracterData: item});
  }
  if(loading){
    return <Loading/>
  }
  if(error){
    return <Text>error</Text>
  }

  return (
    <ComicDetailLayout comicData={comicData} charactersData={charactersData} onChracterPress={handleGoChracter} />
  );
};
export default ComicDetail;
