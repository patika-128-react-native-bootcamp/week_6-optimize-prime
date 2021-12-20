import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Provider from '../context/Provider';

import Home from '../Pages/Home';
import Detail from '../Pages/Detail';
import Characters from '../Pages/Characters/';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Characters" component={Characters} />
          <Tab.Screen name="Settings" component={Detail} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default Navigation;
