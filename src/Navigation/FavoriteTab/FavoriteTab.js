import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavoritesStack from '../FavoritesStack';
import CharacterFavoritesStack from '../CharacterFavoritesStack';
import routes from '../routes';

const Tab = createBottomTabNavigator();

const FavoriteTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {position: 'absolute', top:0},
      }}>
      <Tab.Screen name={routes.COMICS_FAVORITE} component={FavoritesStack} />
      <Tab.Screen
        name={routes.CHARACTERS_FAVORITE}
        component={CharacterFavoritesStack}
      />
    </Tab.Navigator>
  );
};

export default FavoriteTab;
