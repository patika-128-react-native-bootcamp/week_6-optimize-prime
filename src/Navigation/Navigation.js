import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Provider from '../context/Provider';
import Home from '../Pages/Home';
import Detail from '../Pages/Detail';
import Characters from '../Pages/Characters/';
import ComicDetail from '../Pages/ComicDetail';
import ChracterDetail from '../Pages/ChracterDetail';
import Favorites from '../Pages/Favorites/';
import Settings from '../Pages/Settings';
import ChracterFavorites from '../Pages/CharacterFavorites';
import fontSize from '../styles/fontSize';

const navTheme = DefaultTheme;
navTheme.colors.background = '#111111';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const DetailStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ComicDetail" component={ComicDetail} />
      <Stack.Screen name="ChracterDetailPage" component={ChracterDetail} />
    </Stack.Navigator>
  );
};
const ChracterDetailStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="CharactersPage" component={Characters} />
      <Stack.Screen name="ChracterDetailPage" component={ChracterDetail} />
      <Stack.Screen name="ComicDetail" component={ComicDetail} />
    </Stack.Navigator>
  );
};
const FavoritesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="FavoritesPage" component={Favorites} />
      <Stack.Screen name="ComicDetail" component={ComicDetail} />
      <Stack.Screen name="ChracterDetailPage" component={ChracterDetail} />
    </Stack.Navigator>
  );
};

const CharacterFavoritesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="CharacterFavoritesPage"
        component={ChracterFavorites}
      />
      <Stack.Screen name="ChracterDetailPage" component={ChracterDetail} />
      <Stack.Screen name="ComicDetail" component={ComicDetail} />
    </Stack.Navigator>
  );
};
const FavoriteTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {position: 'absolute', top: 0},
      }}>
      <Tab.Screen name="ComicsFavorite" component={FavoritesStack} />
      <Tab.Screen
        name="CharactersFavorite"
        component={CharacterFavoritesStack}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <Provider>
      <NavigationContainer theme={navTheme}>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#C72828',
            tabBarInactiveTintColor: 'white',
            tabBarStyle: {
              backgroundColor: 'black',
              height: 65,
            },
            tabBarLabelStyle: { bottom: 10, fontFamily: "Proxima Nova Semibold", fontSize: fontSize.small, },
          }}>
          <Tab.Screen name="Comics" component={DetailStack}
            options={{
              tabBarIcon: ({ focused, color, size }) => {
                return <Icon name="skull" size={size} color={color} />
              }
            }} />
          <Tab.Screen name="Characters" component={ChracterDetailStack}
            options={{
              tabBarIcon: ({ focused, color, size }) => {
                return <Icon name="account-cowboy-hat" size={size} color={color} />
              }
            }} />
          <Tab.Screen
            name="Favorites"
            component={FavoriteTab}
            options={{
              unmountOnBlur: true,
              tabBarIcon: ({ focused, color, size }) => {
                return <Icon name="star" size={size} color={color} />
              }
            }}

            listeners={({ navigation }) => ({
              blur: () => navigation.setParams({ screen: undefined }),
            })}
          />
          <Tab.Screen name="Settings" component={Settings}
            options={{
              tabBarIcon: ({ focused, color, size }) => {
                return <Icon name="cog" size={size} color={color} />
              }
            }} />

          {/* <Tab.Screen name="Settings" component={Settings} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default Navigation;
