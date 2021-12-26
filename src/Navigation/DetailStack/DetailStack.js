import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../Pages/Home';
import ComicDetail from '../../Pages/ComicDetail';
import CharacterDetail from '../../Pages/CharacterDetail';
import routes from '../routes';
const Stack = createStackNavigator();

const DetailStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routes.HOME} component={Home} />
      <Stack.Screen name={routes.COMIC_DETAIL} component={ComicDetail} />
      <Stack.Screen
        name={routes.CHARACTER_DETAIL_PAGE}
        component={CharacterDetail}
      />
    </Stack.Navigator>
  );
};

export default DetailStack;
