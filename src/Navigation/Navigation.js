import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
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
        headerShown: false,
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
        headerShown: false,
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
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: true,
            tabBarActiveTintColor: '#1D1E1C',
            tabBarInactiveTintColor: '#979797',
            tabBarStyle: {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              backgroundColor: 'black',
              height: 68,
              shadowColor: '#000',
            },
            tabBarLabelStyle: { bottom: 10 },
          }}>
          <Tab.Screen name="Comics" component={DetailStack}
            navigationOptions={{
              tabBarIcon: ({ tintColor }) => (
                <Icon name="robot" size={37} color="white" />)
            }} />
          <Tab.Screen name="Characters" component={ChracterDetailStack} />
          <Tab.Screen
            name="Favorites"
            component={FavoriteTab}
            options={{
              unmountOnBlur: true,
            }}

            listeners={({ navigation }) => ({
              blur: () => navigation.setParams({ screen: undefined }),
            })}
          />
          <Tab.Screen name="Settings" component={Settings} />

          {/* <Tab.Screen name="Settings" component={Settings} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default Navigation;
