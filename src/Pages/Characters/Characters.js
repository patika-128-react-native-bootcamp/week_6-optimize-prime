import React, {useEffect, useState} from 'react';
import useFetch from '../../hooks/useFetch/useFetch';
import {Text} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import CharactersLayout from './CharactersLayout';
import {useSelector} from 'react-redux';
import Loading from '../../components/Loading';
import routes from '../../Navigation/routes';

const Characters = props => {
  const theme = useSelector(state => state.theme);
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [favoritesList, setFavoritesList] = useState([]);
  const [charactersData, setCharactersData] = useState({data: 'data'});
  const [loadingSearch, setLoadingSearch] = useState(false);
  let temporaryText = '';

  const getData = async key => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      const jsonParse = jsonValue != null ? JSON.parse(jsonValue) : [];
      setFavoritesList([...jsonParse]);
      return jsonParse;
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
    setFavoritesList([...data, value]);
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
    getData('favoriteCharacters');
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

  const handleGoCharacterDetail = item => {
    navigation.navigate(routes.CHARACTER_DETAIL_PAGE, {characterData: item});
  };
  const handleAddFavorites = character => {
    saveFavorite(character);
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Text>Error</Text>;
  }

  return (
    <CharactersLayout
      charactersData={charactersData}
      setText={getTextFromSearchInput}
      onSearch={handleSearch}
      onCharacterPress={handleGoCharacterDetail}
      onSearchSubmit={handleSearch}
      onAddFavorites={handleAddFavorites}
      loadingSearch={loadingSearch}
      favoritesList={favoritesList}
      theme={theme}
    />
  );
};
export default Characters;
