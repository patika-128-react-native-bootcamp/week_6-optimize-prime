import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Provider from '../context/Provider';
import Settings from '../Pages/Settings';
import fontSize from '../styles/fontSize';
import DetailStack from './DetailStack';
import ChracterDetailStack from './ChracterDetailStack';
import FavoriteTab from './FavoriteTab';

const navTheme = DefaultTheme;
navTheme.colors.background = '#111111';

const Tab = createBottomTabNavigator();

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
            tabBarLabelStyle: {
              bottom: 10,
              fontFamily: 'Proxima Nova Semibold',
              fontSize: fontSize.small,
            },
          }}>
          <Tab.Screen
            name="Comics"
            component={DetailStack}
            options={{
              tabBarIcon: ({focused, color, size}) => {
                return <Icon name="skull" size={size} color={color} />;
              },
            }}
          />
          <Tab.Screen
            name="Characters"
            component={ChracterDetailStack}
            options={{
              tabBarIcon: ({focused, color, size}) => {
                return (
                  <Icon name="account-cowboy-hat" size={size} color={color} />
                );
              },
            }}
          />
          <Tab.Screen
            name="Favorites"
            component={FavoriteTab}
            options={{
              unmountOnBlur: true,
              tabBarIcon: ({focused, color, size}) => {
                return <Icon name="star" size={size} color={color} />;
              },
            }}
            listeners={({navigation}) => ({
              blur: () => navigation.setParams({screen: undefined}),
            })}
          />
          <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
              tabBarIcon: ({focused, color, size}) => {
                return <Icon name="cog" size={size} color={color} />;
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default Navigation;
