import React from 'react';
import { View, Text } from 'react-native';
import SwitchSelector from "react-native-switch-selector";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <SwitchSelector options={langOptions} initial={0} hasPadding bold buttonColor={"red"} 

        onPress={(languages) => {
          i18n.changeLanguage(languages);
        }}
      />
      <Text>{t("SettingsText")}</Text>
      <SwitchSelector options={themeOptions} initial={0} hasPadding bold buttonColor={"red"}/>
    </View>
  );
}


export default Settings;
