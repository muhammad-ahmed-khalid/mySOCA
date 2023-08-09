import { Colors } from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text } from 'react-native';


interface IHeading5 {
  text: string;
  style?: {}
}

// Size is 16
const H5 = ({ style, text }: IHeading5) => {
  const { t } = useTranslation(['common']);
  return <Text style={[styles.text, style]}>{t(text)}</Text>;
};

export default H5;

const styles = StyleSheet.create({
  text: {
    ...Fonts.SemiBold(Fonts.Size.normal, Colors.DARK_BLACK),
  },
});
