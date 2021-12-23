import React, {useEffect, useState} from 'react';
import useFetch from '../../hooks/useFetch/useFetch';
import {Text} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import CharactersLayout from './CharactersLayout';

const Characters = props => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [charactersData, setCharactersData] = useState({data: 'data'});
  let temporaryText = '';

  const fetchSearchData = async searchText => {
    try {
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters?ts=1&limit=100&nameStartsWith=${searchText}&apikey=6a3ac4ee649fa8f44ed2beb0990b8e5e&hash=b1092a87a9512ddc94b1093992505c3a`,
      );
      setCharactersData(response.data.data.results);
    } catch (error) {}
  };

  const {loading, error, data} = useFetch('characters', '');
  useEffect(() => {
    if (data !== null) {
      setCharactersData(data);
      // console.log('data', data);
    }
  }, [data]);

  const getTextFromSearchInput = text => {
    temporaryText = text;
  };
  const handleSearch = () => {
    setSearchText(temporaryText);
  };
  useEffect(() => {
    if (searchText !== '') {
      fetchSearchData(searchText);
    }
  }, [searchText]);

  const handleGoChracterDetail = item => {
    navigation.navigate('ChracterDetailPage', {chracterData: item});
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
      onSearch={handleSearch}
      onChracterPress={handleGoChracterDetail}
      onSearchSubmit={handleSearch}
    />
  );
};
export default Characters;
