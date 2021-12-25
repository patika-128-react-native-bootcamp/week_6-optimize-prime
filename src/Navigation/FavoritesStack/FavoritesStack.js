import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ComicDetail from '../../Pages/ComicDetail';
import ChracterDetail from '../../Pages/ChracterDetail';
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
      <Stack.Screen name="ChracterDetailPage" component={ChracterDetail} />
    </Stack.Navigator>
  );
};
export default FavoritesStack;
