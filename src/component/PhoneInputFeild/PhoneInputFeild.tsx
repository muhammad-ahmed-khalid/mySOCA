import {CancelIcon} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import Fonts from '@Theme/Fonts';
import {Colors} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import * as React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

export default function PhoneInputFeild(props: any) {
  const phoneInput = React.useRef<PhoneInput>(null);
  const {value, onChange, error, style, setValidNumber} = props;
  const [valid, setValid] = React.useState<undefined | boolean>(true);
  const [focus, setFocus] = React.useState(value || false);
  const [inputText, setInputText] = React.useState('');

  const handleChange = (text: any) => {
    onChange({
      phoneNumber: `+${phoneInput.current?.getCallingCode()}-${text}`,
      countryCode: phoneInput.current?.getCountryCode(),
    });
    setValid(phoneInput.current?.isValidNumber(text));
    setValidNumber(phoneInput.current?.isValidNumber(text));
  };

  const handleDefaultValue = (formattedNumber: string) => {
    return formattedNumber?.split('-')[1];
  };

  const defaultNumber = handleDefaultValue(value?.phoneNumber);
  const clearPhoneInput = () => {
    phoneInput.current?.setState({number: ''});
    setInputText('');
  };

  return (
    <View style={[styles.phoneInputContainer, style]}>
      <View
        style={{
          position: 'relative',
        }}>
        {inputText?.length > 0 && (
          <ButtonView onPress={() => clearPhoneInput()} style={styles.clearBtn}>
            <CancelIcon />
          </ButtonView>
        )}
        <PhoneInput
          ref={phoneInput}
          defaultCode={value?.countryCode || 'PK'}
          value={inputText}
          layout="first"
          flagButtonStyle={styles.flagStyles}
          onChangeText={text => setInputText(text)}
          defaultValue={inputText}
          codeTextStyle={styles.codeText}
          containerStyle={[
            styles.phoneInputContainerStyle,
            error || !valid ? styles.errorContainer : {},
          ]}
          textInputProps={{
            placeholder: 'Phone Number',
            placeholderTextColor: Colors.Colors.PALE_GREY,
            style: {
              ...Fonts.Regular(13, Colors.Colors.DARK),
              height: Metrics.verticalScale(50),
              width: '100%',
            },
            onFocus: () => setFocus(true),
            onBlur: () => {
              !handleDefaultValue(value?.phoneNumber) && setFocus(false);
            },
          }}
          textContainerStyle={styles.phoneInputTxtContainerStyle}
          textInputStyle={styles.phoneInputTxtStyle}
        />
      </View>
      {(!!error || !valid) && <Text style={styles.errorMessage}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  codeText: {
    lineHeight: Metrics.verticalScale(16),
    ...Fonts.Regular(13, Colors.Colors.BLACK),
    borderWidth: 0,
  },
  phoneInputContainer: {
    flex: 1,
    marginBottom: Metrics.verticalScale(10),
    borderWidth: 0,
  },
  phoneInputContainerStyle: {
    marginTop: Metrics.verticalScale(5),
    backgroundColor: Colors.Colors.TRANSPARENT,
    width: '100%',
    height: Metrics.verticalScale(56),
    borderWidth: 1,
    borderColor: Colors.Colors.PALE_GREY,
    borderRadius: 8,
  },
  phoneInputTxtContainerStyle: {
    backgroundColor: Colors.Colors.TRANSPARENT,
    borderWidth: 0,
  },
  phoneInputTxtStyle: {
    height: Metrics.verticalScale(Platform.OS === 'android' ? 0 : 20),
    borderWidth: 0,
  },
  errorContainer: {
    borderColor: Colors.Colors.TRANSPARENT,
    marginTop: Metrics.verticalScale(5),
    backgroundColor: Colors.Colors.TRANSPARENT,
    width: '100%',
    height: Metrics.verticalScale(56),
    borderWidth: 0,
  },
  errorMessage: {
    ...Fonts.Medium(12, Colors.Colors.TOMATO),
    marginTop: Metrics.scale(3),
    borderWidth: 0,
  },
  flagStyles: {},
  clearBtn: {
    position: 'absolute',
    top: 15,
    right: 15,
    borderRadius: 100,
    zIndex: 99,
  },
});
