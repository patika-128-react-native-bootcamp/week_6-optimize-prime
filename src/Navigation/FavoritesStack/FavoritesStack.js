import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ComicDetail from '../../Pages/ComicDetail';
import CharacterDetail from '../../Pages/CharacterDetail';
import Favorites from '../../Pages/Favorites/';
import routes from '../routes';

const Stack = createStackNavigator();

const FavoritesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routes.FAVORITES_PAGE} component={Favorites} />
      <Stack.Screen name={routes.COMIC_DETAIL} component={ComicDetail} />
      <Stack.Screen name={routes.CHARACTER_DETAIL_PAGE} component={CharacterDetail} />
    </Stack.Navigator>
  );
};
export default FavoritesStack;
