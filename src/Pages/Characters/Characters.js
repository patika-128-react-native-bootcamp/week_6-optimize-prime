import React, {useEffect, useState} from 'react';
import useFetch from '../../hooks/useFetch/useFetch';
import CharactersLayout from './CharactersLayout';
import {Text} from 'react-native';
import Search from '../../utils/Search';

const Characters = props => {
  const {loading, error, data} = useFetch('characters');
  const [charactersData, setCharactersData] = useState({data: 'data'});

  useEffect(() => {
    if (data !== null) {
      setCharactersData(data);
      console.log('data', data);
    }
  }, [data]);

  // const handleSearch = text => {
  //   if (text !== null || text !== '') {
  //     const filteredList = data.filter(character => {
  //       const searchText = text.toLowerCase();
  //       const currentTitle = character.name.toLowerCase();
  //       return currentTitle.indexOf(searchText) > -1;
  //     });
  //     setCharactersData(filteredList);
  //     return;
  //   }
  //   setCharactersData(data);
  // };
  const getTextFromSearchInput = text => {
    setCharactersData(Search(data, text,'name'));
  };

  if (loading) {
    return <Text>Loading</Text>;
  }
  if (error) {
    return <Text>Error</Text>;
  }

  return (
    <CharactersLayout
      charactersData={charactersData}
      setText={getTextFromSearchInput}
    />
  );
};
export default Characters;
