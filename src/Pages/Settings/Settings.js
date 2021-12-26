import React from 'react';
import {View, Text, Appearance} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Settings.style';
import colors from '../../styles/colors';

const langOptions = [
  {label: 'English', value: 'en'},
  {label: 'Deutsch', value: 'de'},
  {label: 'Spanish', value: 'es'},
];
const themeOptions = [
  {label: 'Light', value: 'light'},
  {label: 'Dark', value: 'dark'},
  {label: 'Automatic', value: 'automatic'},
];

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};
const Settings = () => {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  const {t, i18n} = useTranslation();
  return (
    <View style={styles[theme].container}>
      <View style={styles[theme].innerContainer}>
        <Text style={styles[theme].title}>{t('Language')}</Text>
        <SwitchSelector
          options={langOptions}
          initial={0}
          hasPadding
          bold
          buttonColor={colors[theme].accentColor}
          backgroundColor={colors[theme].secondaryBackgroundColor}
          onPress={languages => {
            i18n.changeLanguage(languages);
          }}
        />
      </View>
      <View style={styles[theme].innerContainer}>
        <Text style={styles[theme].title}>{t('Theme')}</Text>
        <SwitchSelector
          options={themeOptions}
          initial={0}
          hasPadding
          bold
          buttonColor={colors[theme].accentColor}
          backgroundColor={colors[theme].secondaryBackgroundColor}
          onPress={value => {
            console.log(value);
            storeData('theme', value);
            if (value != 'automatic') {
              dispatch({type: 'CHANGE_APP_THEME', payload: {theme: value}});
              return;
            }
            dispatch({
              type: 'CHANGE_APP_THEME',
              payload: {theme: Appearance.getColorScheme()},
            });
          }}
        />
      </View>
    </View>
  );
};

export default Settings;
