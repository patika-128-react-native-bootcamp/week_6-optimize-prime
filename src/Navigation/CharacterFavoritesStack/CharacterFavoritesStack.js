import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChracterDetail from '../../Pages/ChracterDetail';
import ComicDetail from '../../Pages/ComicDetail';
import CharacterFavorites from '../../Pages/CharacterFavorites';

const Stack = createStackNavigator();

const CharacterFavoritesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="CharacterFavoritesPage"
        component={CharacterFavorites}
      />
      <Stack.Screen name="ChracterDetailPage" component={ChracterDetail} />
      <Stack.Screen name="ComicDetail" component={ComicDetail} />
    </Stack.Navigator>
  );
};

export default CharacterFavoritesStack;
