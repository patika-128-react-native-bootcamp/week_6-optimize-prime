import React, {useEffect, useState} from 'react';
import useFetch from '../../hooks/useFetch/useFetch';
import CharactersLayout from './CharactersLayout';

const Characters = props => {
  const {data} = useFetch('characters');
  const [charactersData, setCharactersData] = useState({data: 'data'});

  useEffect(() => {
    if (data !== null) {
      setCharactersData(data.data.results);
      console.log(data.data.results);
    }
  }, [data]);

  return <CharactersLayout charactersData={charactersData}/>;
};
export default Characters;
