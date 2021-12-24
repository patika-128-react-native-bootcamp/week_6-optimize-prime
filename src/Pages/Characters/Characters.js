import React, {useEffect, useState} from 'react';
import useFetch from '../../hooks/useFetch/useFetch';
import {Text} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import CharactersLayout from './CharactersLayout';
import {useSelector} from 'react-redux';
import Loading from '../../components/Loading';

const Characters = props => {
  const theme = useSelector(state => state.theme);
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [charactersData, setCharactersData] = useState({data: 'data'});
  const [loadingSearch, setLoadingSearch] = useState(false);
  let temporaryText = '';

  const getData = async key => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      // error reading value
    }
  };
  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
  };
  const saveFavorite = async value => {
    const data = await getData('favoriteCharacters');
    const characterFavoriteIndex = data.findIndex(f => f.id === value.id);
    const isInFavorites = characterFavoriteIndex !== -1;
    if (isInFavorites) {
      return;
    }
    storeData('favoriteCharacters', [...data, value]);
  };

  const fetchSearchData = async searchText => {
    try {
      setLoadingSearch(true);
      const response = await axios.get(
        `https://gateway.marvel.com/v1/public/characters?ts=1&limit=100&nameStartsWith=${searchText}&apikey=6a3ac4ee649fa8f44ed2beb0990b8e5e&hash=b1092a87a9512ddc94b1093992505c3a`,
      );
      setCharactersData(response.data.data.results);
      setLoadingSearch(false);
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
  const handleAddFavorites = character => {
    saveFavorite(character);
  };

  if (loading) {
    return <Loading/>
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
      onAddFavorites={handleAddFavorites}
      loadingSearch={loadingSearch}
      theme={theme}
    />
  );
};
export default Characters;
