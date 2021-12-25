import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../Pages/Home';
import ComicDetail from '../../Pages/ComicDetail';
import CharacterDetail from '../../Pages/CharacterDetail';

const Stack = createStackNavigator();

const DetailStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ComicDetail" component={ComicDetail} />
      <Stack.Screen name="CharacterDetailPage" component={CharacterDetail} />
    </Stack.Navigator>
  );
};

export default DetailStack;
