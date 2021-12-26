import React, { useEffect, useState } from 'react';
import { View, Text, Appearance } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import SwitchSelector from 'react-native-switch-selector';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Settings.style';
import colors from '../../styles/colors';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    // saving error
  }
};

const Settings = () => {
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation();
  const [chosenLang, setChosenLang] = useState(0)
  const [initialLang, setInitialLang] = useState()
  const [chosenTheme, setChosenTheme] = useState(0)
  const [initialTheme, setInitialTheme] = useState()
  const theme = useSelector(state => state.theme);

  const langOptions = [
    { label: 'English', value: 'en' },
    { label: 'Deutsch', value: 'de' },
    { label: 'Spanish', value: 'es' },
  ];
  const themeOptions = [
    { label: t('Light'), value: 'light' },
    { label: t('Dark'), value: 'dark' },
    { label: t('Automatic'), value: 'automatic' },
  ];

   useEffect(() => {
    getData("languages", "theme")
  }, [])

  useEffect(() => {
    if (initialLang === "en") {
      setChosenLang(0)
    } if (initialLang === "de") {
      setChosenLang(1)
    } if (initialLang === "es") {
      setChosenLang(2)
    }

  }, [initialLang])

  useEffect(() => {
    if (initialTheme === "light") {
      setChosenTheme(0)
    } if (initialTheme === "dark") {
      setChosenTheme(1)
    } if (initialTheme === "automatic") {
      setChosenTheme(2)
    }

  }, [initialTheme])

  const getData = async (langKey, themeKey) => {
    try {
      const langValue = await AsyncStorage.getItem(langKey);
      const themeValue = await AsyncStorage.getItem(themeKey);

     
      if (langValue !== null) {
        setInitialLang(langValue)
      }
      if (themeValue !== null) {
        setInitialTheme(themeValue)
      }
      console.log("themeValue", chosenTheme)



    } catch (e) {
      // error reading value
    }
  };

  return (
    <View style={styles[theme].container}>
      <View style={styles[theme].innerContainer}>
        <Text style={styles[theme].title}>{t('Language')}</Text>
        <SwitchSelector
          options={langOptions}
          value={chosenLang}
          initial={0}
          hasPadding
          bold
          buttonColor={colors[theme].accentColor}
          backgroundColor={colors[theme].secondaryBackgroundColor}
          onPress={languages => {
            i18n.changeLanguage(languages);
            storeData("languages", languages);
          }}
        />
      </View>
      <View style={styles[theme].innerContainer}>
        <Text style={styles[theme].title}>{t('Theme')}</Text>
        <SwitchSelector
          options={themeOptions}
          value={chosenTheme}
          initial={0}
          hasPadding
          bold
          buttonColor={colors[theme].accentColor}
          backgroundColor={colors[theme].secondaryBackgroundColor}
          onPress={value => {
            storeData('theme', value);
            if (value != 'automatic') {
              dispatch({ type: 'CHANGE_APP_THEME', payload: { theme: value } });
              return;
            }
            dispatch({
              type: 'CHANGE_APP_THEME',
              payload: { theme: Appearance.getColorScheme() },
            });
          }}
        />
      </View>
    </View>
  );
};

export default Settings;
