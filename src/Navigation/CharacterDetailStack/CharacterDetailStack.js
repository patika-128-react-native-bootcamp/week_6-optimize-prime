import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Characters from '../../Pages/Characters/';
import CharacterDetail from '../../Pages/CharacterDetail';
import ComicDetail from '../../Pages/ComicDetail';
import routes from '../routes';

const Stack = createStackNavigator();

const CharacterDetailStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routes.CHARACTERS_PAGE} component={Characters} />
      <Stack.Screen name={routes.CHARACTER_DETAIL_PAGE} component={CharacterDetail} />
      <Stack.Screen name={routes.COMIC_DETAIL} component={ComicDetail} />
    </Stack.Navigator>
  );
};

export default CharacterDetailStack;
