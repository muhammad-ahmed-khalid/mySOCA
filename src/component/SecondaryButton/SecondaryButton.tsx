import ButtonView from '@Component/ButtonView';
import H6 from '@Component/Headings/H6';
import {Colors, Fonts} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {StyleSheet} from 'react-native';

interface ISecondaryButton {
  title?: string;
  wrapperStyle?: any;
  textStyle?: any;
  action?: Function;
}

const SecondaryButton = ({
  title,
  wrapperStyle,
  textStyle,
  action,
}: ISecondaryButton) => {
  return (
    <ButtonView style={[styles.btnWrapper, wrapperStyle]} onPress={action}>
      <H6 text={title} style={[styles.btnTextStyle, textStyle]} />
    </ButtonView>
  );
};

export default SecondaryButton;

const styles = StyleSheet.create({
  btnWrapper: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: Colors.Colors.RED,
    paddingVertical: Metrics.verticalScale(10),
    borderRadius: Metrics.scale(100),
  },
  btnTextStyle: {
    textAlign: 'center',
    ...Fonts.SemiBold(Fonts.Size.medium, Colors.Colors.RED),
  },
});
