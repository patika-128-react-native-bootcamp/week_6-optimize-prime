import React from 'react';
import { View, Text } from 'react-native';
import SwitchSelector from "react-native-switch-selector";
import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';
import styles from "./Settings.style";
import colors from "../../styles/colors";
const langOptions = [
  { label: "English", value: "en" },
  { label: "Deutsch", value: "de" },
  { label: "Spanish", value: "es" }
]
const themeOptions = [
  { label: "Light", value: "light" },
  { label: "Dark", value: "dark" },
]

const Settings = () => {
  const theme = useSelector(state => state.theme);

  const { t, i18n } = useTranslation();
  return (
    <View style={styles[theme].container}>
      <View style={styles[theme].innerContainer}>
        <Text style={styles[theme].title}>{t("Language")}</Text>
        <SwitchSelector options={langOptions} initial={0} hasPadding bold buttonColor={colors[theme].accentColor} backgroundColor={colors[theme].secondaryBackgroundColor}
          onPress={(languages) => {
            i18n.changeLanguage(languages);
          }}
        />
      </View>
      <View style={styles[theme].innerContainer}>
        <Text style={styles[theme].title}>{t("Theme")}</Text>
        <SwitchSelector options={themeOptions} initial={0} hasPadding bold buttonColor={colors[theme].accentColor} backgroundColor={colors[theme].secondaryBackgroundColor} />
      </View>
    </View>
  );
}


export default Settings;
