import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CharacterDetail from '../../Pages/CharacterDetail';
import ComicDetail from '../../Pages/ComicDetail';
import CharacterFavorites from '../../Pages/CharacterFavorites';
import routes from '../routes';

const Stack = createStackNavigator();

const CharacterFavoritesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={routes.CHARACTER_FAVORITES_PAGE}
        component={CharacterFavorites}
      />
      <Stack.Screen name={routes.CHARACTER_DETAIL_PAGE} component={CharacterDetail} />
      <Stack.Screen name={routes.COMIC_DETAIL} component={ComicDetail} />
    </Stack.Navigator>
  );
};

export default CharacterFavoritesStack;
