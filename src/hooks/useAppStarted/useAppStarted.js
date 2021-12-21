import React, { useEffect } from 'react';
import {Appearance} from 'react-native';
import {useDispatch} from 'react-redux';

const useAppStarted = () => {
  const theme = Appearance.getColorScheme();
  const dispatch = useDispatch();

  Appearance.addChangeListener(scheme => {
    dispatch({type: 'CHANGE_APP_THEME', payload: {theme: scheme.colorScheme}});
  });
  useEffect(() => {
    dispatch({type: 'CHANGE_APP_THEME', payload: {theme: theme}});
  },[])
};

export default useAppStarted;
