import {InfoIcon} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import H7 from '@Component/Headings/H7';
import {Colors} from '@Theme/index';
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface IButtonUnderLine {
  text?: string;
  btnText?: string;
  leftArrow?: boolean;
  rightArrow?: boolean;
  action?: Function;
  btnStyle?: {};
  textStyle?: {};
  icon?: any;
  wrapperStyle?: {};
}

const ButtonUnderLine = ({
  text,
  btnText,
  action,
  leftArrow = false,
  rightArrow = false,
  btnStyle,
  textStyle,
  icon,
  wrapperStyle,
}: IButtonUnderLine) => {
  return (
    <View>
      <>
        {leftArrow || rightArrow ? (
          <ButtonView style={[styles.root, wrapperStyle]} onPress={action}>
            {leftArrow && (
              <View style={styles.leftArrowWrapper}>
                {icon ? icon : <InfoIcon />}
              </View>
            )}
            {text && <H7 style={[styles.text, textStyle]} text={text} />}
            {btnText && (
              <H7 style={[styles.btnText, btnStyle]} text={btnText} />
            )}
            {rightArrow && <InfoIcon />}
          </ButtonView>
        ) : (
          <View style={[styles.root, wrapperStyle]}>
            <H7 style={[styles.text, textStyle]} text={text} />
            <ButtonView onPress={action}>
              <H7 style={[styles.btnText, btnStyle]} text={btnText} />
            </ButtonView>
          </View>
        )}
      </>
    </View>
  );
};

export default ButtonUnderLine;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: Colors.Colors.BLUE_LINK,
    textDecorationLine: 'underline',
    marginLeft: 4,
  },
  text: {
    color: Colors.Colors.BLACK,
  },
  leftArrowWrapper: {
    marginRight: 5,
  },
});
