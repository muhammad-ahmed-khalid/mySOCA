import ButtonView from '@Component/ButtonView';
import H7 from '@Component/Headings/H7';
import {Colors} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface IResendButton {
  text?: string;
  btnText?: string;
  btnStyle?: {};
  textStyle?: {};
  isShowCount?: boolean;
  toggleResend?: Function;
  resendOTPText?: string;
}

const ResendButton = ({
  text,
  btnText,
  btnStyle,
  textStyle,
  isShowCount,
  toggleResend,
  resendOTPText,
}: IResendButton) => {
  return (
    <View>
      <View>
        {isShowCount ? (
          <View style={styles.root}>
            <H7 style={[styles.text, textStyle]} text={text} />
            <View>
              <H7
                style={[styles.text, textStyle, styles.resendText]}
                text={resendOTPText}
              />
            </View>
          </View>
        ) : (
          <View style={styles.root}>
            <H7 style={[styles.text, textStyle]} text={text} />
            <ButtonView onPress={toggleResend}>
              <H7 style={[styles.btnText, btnStyle]} text={btnText} />
            </ButtonView>
          </View>
        )}
      </View>
    </View>
  );
};

export default ResendButton;

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
  resendText: {
    marginLeft: Metrics.scale(5),
  },
});
