import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { Colors } from '@Theme/Colors';
import Fonts from '@Theme/Fonts';


interface IHeading2 {
  text: string;
  style?: {}
}

//Size is 24
const H2 = ({ text, style }: IHeading2) => {
  return <Text style={[styles.text, style]}>{text}</Text>;
};

export default H2;

const styles = StyleSheet.create({
  text: {
    ...Fonts.SemiBold(Fonts.Size.xLarge, Colors.BLACK),
  },
});
