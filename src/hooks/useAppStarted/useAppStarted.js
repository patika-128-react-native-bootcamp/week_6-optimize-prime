import React, { useEffect } from 'react';
import { Appearance } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAppStarted = () => {
  const { t, i18n } = useTranslation();
  const theme = Appearance.getColorScheme();
  const dispatch = useDispatch();

  const getData = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        if (value != 'automatic') {
          dispatch({ type: 'CHANGE_APP_THEME', payload: { theme: value } });
          return;
        }
        dispatch({
          type: 'CHANGE_APP_THEME',
          payload: { theme: Appearance.getColorScheme() },
        });
        return;
      }
      dispatch({
        type: 'CHANGE_APP_THEME',
        payload: { theme: Appearance.getColorScheme() },
      });
    } catch (e) {
      // error reading value
    }
  };

  const getLanguage = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        i18n.changeLanguage(value)
      }
    } catch (e) {
      // error reading value
    }
  };

  Appearance.addChangeListener(scheme => {
    getData('theme');
  });
  useEffect(() => {
    getData('theme');
    getLanguage('languages')
  }, []);
};

export default useAppStarted;
