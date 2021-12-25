import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Characters from '../../Pages/Characters/';
import CharacterDetail from '../../Pages/CharacterDetail';
import ComicDetail from '../../Pages/ComicDetail';

const Stack = createStackNavigator();

const CharacterDetailStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="CharactersPage" component={Characters} />
      <Stack.Screen name="CharacterDetailPage" component={CharacterDetail} />
      <Stack.Screen name="ComicDetail" component={ComicDetail} />
    </Stack.Navigator>
  );
};

export default CharacterDetailStack;
