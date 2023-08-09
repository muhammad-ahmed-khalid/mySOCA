import H6 from '@Component/Headings/H6';
import Fonts from '@Theme/Fonts';
import {Colors} from '@Theme/index';
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface IPickupDistance {
  heading?: String;
  text?: String;
  textAlign?: String;
}

const PickupDistance = ({
  heading,
  text,
  textAlign = 'flex-start',
}: IPickupDistance) => {
  return (
    <View style={[styles.wrapper, {alignItems: textAlign}]}>
      <H6 style={styles.heading} text={heading} />
      <H6 style={styles.text} text={text} />
    </View>
  );
};

export default PickupDistance;

const styles = StyleSheet.create({
  wrapper: {},
  heading: {
    ...Fonts.Medium(Fonts.Size.xSmall, Colors.Colors.GREY),
  },
  text: {
    ...Fonts.SemiBold(Fonts.Size.medium, Colors.Colors.DARK_BLACK),
  },
});
