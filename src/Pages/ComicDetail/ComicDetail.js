import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import ComicDetailLayout from './ComicDetailLayout';
import useFetch from '../../hooks/useFetch/useFetch';

const ComicDetail = props => {
  const route = useRoute();
  const {comicData} = route.params;
  const {loading, error, data} = useFetch(
    `comics/${comicData.id}/characters`,
    '',
  );
  const [charactersData, setCharactersData] = useState({});
  useEffect(() => {
    if (data !== null) {
      console.log(data);
      setCharactersData(data);
    }
  }, [data]);

  return (
    <ComicDetailLayout comicData={comicData} charactersData={charactersData} />
  );
};
export default ComicDetail;
