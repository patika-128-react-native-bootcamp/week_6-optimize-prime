import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoritesStack from '../FavoritesStack';
import CharacterFavoritesStack from '../CharacterFavoritesStack';

const Tab = createBottomTabNavigator();

const FavoriteTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {position: 'absolute', top:0},
      }}>
      <Tab.Screen name="ComicsFavorite" component={FavoritesStack} />
      <Tab.Screen
        name="CharactersFavorite"
        component={CharacterFavoritesStack}
      />
    </Tab.Navigator>
  );
};

export default FavoriteTab;
