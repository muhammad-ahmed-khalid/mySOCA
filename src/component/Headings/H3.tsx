import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { Colors } from '@Theme/Colors';
import Fonts from '@Theme/Fonts';

interface IHeading3 {
  text: string;
  style?: {}
}

// Size is 22
const H3 = ({ text, style }: IHeading3) => {
  return <Text style={[styles.text, style]}>{text}</Text>;
};

export default H3;

const styles = StyleSheet.create({
  text: {
    ...Fonts.Medium(Fonts.Size.large, Colors.BLACK),
  },
});
