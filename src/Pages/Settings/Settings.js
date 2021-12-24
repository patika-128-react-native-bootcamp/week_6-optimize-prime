import React from 'react';
import { View, Text } from 'react-native';
import SwitchSelector from "react-native-switch-selector";
import { useTranslation } from "react-i18next";

const options = [
  { label: "English", value: "en" },
  { label: "Deutsch", value: "de" },
  { label: "Spanish", value: "es" }
]

const Settings = () => {
  const { t, i18n } = useTranslation();
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', height: '100%'}}>
      <SwitchSelector options={options} initial={0} hasPadding
        onPress={(languages) => {
          i18n.changeLanguage(languages);
        }}
      />
      <Text>{t("SettingsText")}</Text>
    </View>
  );
}


export default Settings;
