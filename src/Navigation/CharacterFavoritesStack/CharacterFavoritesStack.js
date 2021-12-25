import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CharacterDetail from '../../Pages/CharacterDetail';
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
      <Stack.Screen name="CharacterDetailPage" component={CharacterDetail} />
      <Stack.Screen name="ComicDetail" component={ComicDetail} />
    </Stack.Navigator>
  );
};

export default CharacterFavoritesStack;
