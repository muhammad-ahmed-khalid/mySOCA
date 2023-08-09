import { Colors } from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text } from 'react-native';

interface IHeading4 {
  text: string;
  style?: {};
  textStyle?: {};
}

// Size is 18
const H4 = ({ style, text, textStyle, numberOfLines }: IHeading4) => {
  const { t } = useTranslation(['common']);
  return <Text numberOfLines={numberOfLines} style={[styles.text, style, textStyle]}>{t(text)}</Text>;
};

export default H4;

const styles = StyleSheet.create({
  text: {
    ...Fonts.Medium(Fonts.Size.medium, Colors.BLACK),
  },
});
