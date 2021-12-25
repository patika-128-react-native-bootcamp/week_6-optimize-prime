import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Characters from '../../Pages/Characters/';
import ChracterDetail from '../../Pages/ChracterDetail';
import ComicDetail from '../../Pages/ComicDetail';

const Stack = createStackNavigator();

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

export default ChracterDetailStack;
