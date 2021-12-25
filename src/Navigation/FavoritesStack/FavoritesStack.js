import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ComicDetail from '../../Pages/ComicDetail';
import CharacterDetail from '../../Pages/CharacterDetail';
import Favorites from '../../Pages/Favorites/';

const Stack = createStackNavigator();

const FavoritesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="FavoritesPage" component={Favorites} />
      <Stack.Screen name="ComicDetail" component={ComicDetail} />
      <Stack.Screen name="CharacterDetailPage" component={CharacterDetail} />
    </Stack.Navigator>
  );
};
export default FavoritesStack;
