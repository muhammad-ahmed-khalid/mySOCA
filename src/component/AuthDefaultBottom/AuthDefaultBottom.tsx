import ButtonView from '@Component/ButtonView';
import H7 from '@Component/Headings/H7';
import Fonts from '@Theme/Fonts';
import {Colors} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, Text, View} from 'react-native';

interface IAuthDefaultBottom {
  text?: string;
  btnText?: string;
  action: Function;
}

const AuthDefaultBottom = ({text, btnText, action}: IAuthDefaultBottom) => {
  const {t} = useTranslation(['common']);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>
        {t(text)}
        <ButtonView onPress={action}>
          <H7 style={styles.btnTxt} text={btnText} />
        </ButtonView>
      </Text>
    </View>
  );
};

export default AuthDefaultBottom;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    textAlign: 'center',
    marginBottom: Metrics.verticalScale(15),
  },
  text: {
    textAlign: 'center',
    includeFontPadding: false,
    ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.Colors.GREY),
    lineHeight: Metrics.verticalScale(25),
  },
  btnTxt: {
    ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.Colors.BLUE_LINK),
    textDecorationLine: 'underline',
    textAlign: 'center',
    includeFontPadding: false,
    lineHeight: Metrics.verticalScale(20),
    position: 'relative',
    top: Metrics.scale(0),
    left: Metrics.scale(3),
  },
});
