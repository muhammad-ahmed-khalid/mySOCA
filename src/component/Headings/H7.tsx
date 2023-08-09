import { Colors } from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, Text } from 'react-native';

interface IHeading7 {
  text: string;
  style?: {}
  numberOfLines?: number;
}

// Size is 12
const H7 = ({ style, text, numberOfLines }: IHeading7) => {
  const { t } = useTranslation(['common']);
  return <Text numberOfLines={numberOfLines} style={[styles.text, style]}>{t(text)}</Text>;
};

export default H7;

const styles = StyleSheet.create({
  text: {
    ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.SECONDARY),
  },
});
