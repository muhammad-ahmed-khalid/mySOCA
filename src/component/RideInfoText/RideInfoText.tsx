import H6 from '@Component/Headings/H6';
import Fonts from '@Theme/Fonts';
import {Colors} from '@Theme/index';
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface IRideInfoText {
  text?: String;
  optionalText?: String;
}

const RideInfoText = ({text, optionalText}: IRideInfoText) => {
  return (
    <View style={[styles.wrapper]}>
      <H6 style={styles.text} text={text} />
      <H6 style={styles.optionalTextStyle} text={optionalText} />
    </View>
  );
};

export default RideInfoText;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  text: {
    ...Fonts.SemiBold(Fonts.Size.xxxSmall, Colors.Colors.DARK_BLACK),
  },
  optionalTextStyle: {
    ...Fonts.Regular(Fonts.Size.xxxSmall, Colors.Colors.DARK_BLACK),
  },
});
