import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';

import fontSize from "../../styles/fontSize";
import colors from "../../styles/colors";

import FavoritesStack from '../FavoritesStack';
import CharacterFavoritesStack from '../CharacterFavoritesStack';
import routes from '../routes';

const Tab = createMaterialTopTabNavigator();

const FavoriteTab = () => {
  const { t, i18n } = useTranslation();
  const theme = useSelector(state => state.theme);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.accentColor,
        tabBarInactiveTintColor: colors.textColor,
        tabBarStyle: {
          backgroundColor: colors.black,
        },
        tabBarLabelStyle: {
          fontFamily: 'Proxima Nova Semibold',
          fontSize: fontSize.small,
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.accentColor,
        }
      }}
    >
      <Tab.Screen name={routes.COMICS_FAVORITE} component={FavoritesStack}
        options={{
          tabBarLabel: t("Favorite Comics"),
        }}
      />
      <Tab.Screen
        name={routes.CHARACTERS_FAVORITE}
        component={CharacterFavoritesStack}
        options={{
          tabBarLabel: t("Favorite Characters"),
        }}
      />
    </Tab.Navigator>
  );
};

export default FavoriteTab;
