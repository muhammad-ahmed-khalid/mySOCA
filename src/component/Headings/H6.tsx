import {Colors} from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text} from 'react-native';

interface IHeading6 {
  text: string;
  style?: {};
  numberOfLines?: number;
}

// Size is 14
const H6 = ({style, text, numberOfLines}: IHeading6) => {
  const {t} = useTranslation(['common']);
  return (
    <Text numberOfLines={numberOfLines} style={[styles.text, style]}>
      {t(text)}
    </Text>
  );
};

export default H6;

const styles = StyleSheet.create({
  text: {
    ...Fonts.Medium(Fonts.Size.xSmall, Colors.BLACK),
  },
});
