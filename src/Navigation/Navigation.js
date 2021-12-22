import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Provider from '../context/Provider';

import Home from '../Pages/Home';
import Detail from '../Pages/Detail';
import Characters from '../Pages/Characters/';
import ComicDetail from '../Pages/ComicDetail';
import ChracterDetail from '../Pages/ChracterDetail';
import Favorites from '../Pages/Favorites/';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const DetailStack = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ComicDetail" component={ComicDetail} />
      <Stack.Screen name="ChracterDetailPage" component={ChracterDetail} />
    </Stack.Navigator>
  );
};
const ChracterDetailStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CharactersPage" component={Characters} />
      <Stack.Screen name="ChracterDetailPage" component={ChracterDetail} />
      <Stack.Screen name="ComicDetail" component={ComicDetail} />
    </Stack.Navigator>
  );

};
const FavoritesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FavoritesPage" component={Favorites} />
      <Stack.Screen name="ComicDetail" component={ComicDetail} />
      <Stack.Screen name="ChracterDetailPage" component={ChracterDetail} />
    </Stack.Navigator>
  );
};

const Navigation = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#1D1E1C',
          tabBarInactiveTintColor: '#979797',
          tabBarStyle: {
            borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: "black", height: 68, shadowColor: "#000",
          },
          tabBarLabelStyle: { bottom: 10 },
        }}>
          <Tab.Screen name="Comics" component={DetailStack} />
          <Tab.Screen name="Characters" component={ChracterDetailStack} />
          <Tab.Screen name="Favorites" component={FavoritesStack} />

          {/* <Tab.Screen name="Settings" component={Settings} /> */}
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default Navigation;
