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

  const {loading, error, data, fetchData} = useFetch(
    'characters',
    `${searchText}`,
  );
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

  useEffect(() => {
    getData('favoriteCharacters');
    if (data !== null) {
      setCharactersData(data);
    }
  }, [data]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData('favoriteCharacters');
    });
    return unsubscribe;
  }, [navigation]);

  const getTextFromSearchInput = text => {
    temporaryText = `nameStartsWith=${text}&`;
  };
  const handleSearch = () => {
    setSearchText(temporaryText);
  };
  const handleClear = () => {
    setSearchText('');
  };
  useEffect(() => {
    fetchData();
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
      favoritesList={favoritesList}
      theme={theme}
      onClear={handleClear}
    />
  );
};
export default Characters;
