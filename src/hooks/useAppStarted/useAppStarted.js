import React, {useEffect} from 'react';
import {Appearance} from 'react-native';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAppStarted = () => {
  const theme = Appearance.getColorScheme();
  const dispatch = useDispatch();

  const getData = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        if (value != 'automatic') {
          dispatch({type: 'CHANGE_APP_THEME', payload: {theme: value}});
          return;
        }
        dispatch({
          type: 'CHANGE_APP_THEME',
          payload: {theme: Appearance.getColorScheme()},
        });
        return;
      }
      dispatch({
        type: 'CHANGE_APP_THEME',
        payload: {theme: Appearance.getColorScheme()},
      });
    } catch (e) {
      // error reading value
    }
  };

  Appearance.addChangeListener(scheme => {
    getData('theme');
  });
  useEffect(() => {
    getData('theme');
  }, []);
};

export default useAppStarted;
