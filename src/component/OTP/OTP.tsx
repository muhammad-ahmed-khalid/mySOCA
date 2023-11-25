/*

Concept: https://dribbble.com/shots/5476562-Forgot-Password-Verification/attachments

*/
import React, { useEffect, useState } from 'react';
import { Animated, Platform, SafeAreaView } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Fonts from '@Theme/Fonts';
import { Colors } from '@Theme/index';
import Metrics from '@Utility/Metrics';
import Utils from '@Utility/Utils';
import { StyleSheet, Text } from 'react-native';

const { Value, Text: AnimatedText } = Animated;

const CELL_COUNT = 6;

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({ hasValue, index, isFocused }) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      duration: hasValue ? 300 : 250,
    }),
  ]).start();
};

interface IOTP {
  userPhoneNumber?: any;
  verifyOtpUser?: any;
  selectedLanguageID?: any;
  isEmail?: boolean;
  fcmDeviceToken?: any;
  getDeviceId?: any;
  getDeviceName?: any;
}

const OTP = ({
  userPhoneNumber,
  verifyOtpUser,
  selectedLanguageID,
  isEmail = false,
  fcmDeviceToken,
  getDeviceId,
  getDeviceName,
}: IOTP) => {

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  useEffect(() => {
    if (Utils.conditionRendering(value?.length, '==', 6)) {
      const palyload = {
        phone: `${userPhoneNumber}`,
        code: `${value}`,
        languageId: selectedLanguageID,
        deviceId: getDeviceId,
        deviceName: getDeviceName,
        fcmToken: fcmDeviceToken,
      };
      verifyOtpUser(palyload);
    }
  }, [value]);

  const renderCell = ({ index, symbol, isFocused }) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
          inputRange: [0, 1],
          outputRange: ['#fff', Colors.Colors.WHITE],
        })
        : animationsColor[index].interpolate({
          inputRange: [0, 1],
          outputRange: ['#D9D9D9', Colors.Colors.WHITE],
        }),
    };

    setTimeout(() => {
      animateCell({ hasValue, index, isFocused });
    }, 0);

    return (
      <AnimatedText
        key={index}
        style={[
          styles.cell,
          animatedCellStyle,
          Platform.OS === 'ios' ? { paddingTop: Metrics.scale(4) } : null,
        ]}
        onLayout={getCellOnLayoutHandler(index)}>
        <Text style={styles.cellText}>
          {symbol || (isFocused ? <Cursor cursorSymbol="I" /> : null)}
        </Text>
      </AnimatedText>
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={renderCell}
      />
    </SafeAreaView>
  );
};

export default OTP;

const styles = StyleSheet.create({
  cellText: {
    textAlign: 'center',
    ...Fonts.Regular(Fonts.Size.xxxLarge, Colors.Colors.DARK_BLACK),
    borderRadius: Metrics.scale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  codeFieldRoot: {
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: Metrics.scale(10),
    marginHorizontal:
      Platform.OS == 'android' ? Metrics.scale(10) : Metrics.scale(0),
  },
  cell: {
    width: Metrics.scale(45),
    height: Metrics.scale(54),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.Colors.LIGHT_BORDER,
    borderRadius: Metrics.scale(10),
    overflow: 'hidden',
    textAlign: 'center',
  },
});
