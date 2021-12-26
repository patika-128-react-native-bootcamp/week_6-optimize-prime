import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";
import Settings from '../Pages/Settings';
import fontSize from '../styles/fontSize';
import colors from '../styles/colors';
import DetailStack from './DetailStack';
import CharacterDetailStack from './CharacterDetailStack';
import FavoriteTab from './FavoriteTab';
import routes from './routes';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const theme = useSelector(state => state.theme);
  // const navTheme = DefaultTheme;
  // navTheme.colors.background = theme == 'light' ? 'green' : 'blue';

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.accentColor,
          tabBarInactiveTintColor: colors.white,
          tabBarStyle: {
            backgroundColor: colors.black,
            height: 65,
          },
          tabBarLabelStyle: {
            bottom: 10,
            fontFamily: 'Proxima Nova Semibold',
            fontSize: fontSize.small,
          },
        }}>
        <Tab.Screen
          name={routes.COMICS}
          component={DetailStack}
          options={{
            tabBarLabel: t("Comics"),
            tabBarIcon: ({ focused, color, size }) => {
              return <Icon name="skull" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name={routes.CHARACTERS}
          component={CharacterDetailStack}
          options={{
            tabBarLabel: t("Characters"),
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Icon name="account-cowboy-hat" size={size} color={color} />
              );
            },
          }}
        />
        <Tab.Screen
          name={routes.FAVORITES}
          component={FavoriteTab}
          options={{
            tabBarLabel: t("Favorites"),
            unmountOnBlur: true,
            tabBarIcon: ({ focused, color, size }) => {
              return <Icon name="star" size={size} color={color} />;
            },
          }}
          listeners={({ navigation }) => ({
            blur: () => navigation.setParams({ screen: undefined }),
          })}
        />
        <Tab.Screen
          name={routes.SETTINGS}
          component={Settings}
          options={{
            tabBarLabel: t("Settings"),
            tabBarIcon: ({ focused, color, size }) => {
              return <Icon name="cog" size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
