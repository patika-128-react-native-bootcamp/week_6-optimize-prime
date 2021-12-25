import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../Pages/Home';
import ComicDetail from '../../Pages/ComicDetail';
import ChracterDetail from '../../Pages/ChracterDetail';

const Stack = createStackNavigator();

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

export default DetailStack;
