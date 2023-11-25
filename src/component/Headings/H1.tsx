import { Colors } from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface IHeading1 {
  text: string;
  style?: {};
  numberOfLines?: any;
}

// Size is 32
const H1 = ({ style, text, numberOfLines }: IHeading1) => {
  return <Text numberOfLines={numberOfLines} style={[styles.text, style]}>{text}</Text>;
};

export default H1;

const styles = StyleSheet.create({
  text: {
    ...Fonts.SemiBold(Fonts.Size.xxxLarge, Colors.DARK_BLACK),
  },
});
