import ButtonView from '@Component/ButtonView';
import Fonts from '@Theme/Fonts';
import {Colors} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import * as React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {CancelIcon} from '@Asset/logo';
import {useTranslation} from 'react-i18next';

export default React.forwardRef((props: any, ref) => {
  const {t} = useTranslation(['errors']);
  const phoneInput = React.useRef<PhoneInput>(null);
  const input = React.useRef<PhoneInput>(null);
  const {style, setIsValidPhoneNumber} = props;

  const [state, setState] = React.useState({
    isErr: false,
    err: '',
    value: props.value || '',
  });

  React.useEffect(
    () =>
      setState(s => ({
        ...s,
        value: props.value,
        isErr: false,
        err: '',
      })),
    [props.value],
  );

  React.useImperativeHandle(ref, () => ({
    setError: (isErr: boolean, err: string) => {
      setState(s => ({
        ...s,
        isErr,
        err: err?.length ? err : props.err,
      }));
    },
    getValue: () => state.value,
    focus: () => input?.current?.focus(),
    setText: txt => handleChange(txt),
  }));

  const handleChange = (text: any) => {
    let validNumber = phoneInput.current?.isValidNumber(text);
    setIsValidPhoneNumber(validNumber);
    setState(s => ({
      ...s,
      value: text,
      err: !validNumber ? t('loginPhoneNumberError') : null,
      isErr: !validNumber,
    }));
  };

  const clearPhoneInput = () => {
    phoneInput.current?.setState({number: ''});
    setState(s => ({
      ...s,
      value: '',
      isErr: false,
      err: '',
    }));
  };
  return (
    <View style={[styles.phoneInputContainer, style]}>
      <View style={styles.container}>
        {state.value?.length > 0 && (
          <ButtonView onPress={() => clearPhoneInput()} style={styles.clearBtn}>
            <CancelIcon />
          </ButtonView>
        )}
        <View style={styles.separator} />
        <PhoneInput
          ref={phoneInput}
          onChangeCountry={clearPhoneInput}
          defaultCode={phoneInput.current?.state?.countryCode || 'CA'}
          value={state.value}
          layout="first"
          onChangeText={text => handleChange(text)}
          defaultValue={state.value}
          codeTextStyle={styles.codeText}
          containerStyle={styles.phoneInputContainerStyle}
          textInputProps={{
            ref: input,
            placeholder: t('phoneNumber'),
            placeholderTextColor: Colors.Colors.PLACEHOLDER_COLOR,
            maxLength: 14,
            style: {
              ...Fonts.Regular(13, Colors.Colors.DARK),
              height: 56,
              width: '100%',
            },
          }}
          textContainerStyle={styles.phoneInputTxtContainerStyle}
          textInputStyle={styles.phoneInputTxtStyle}
        />
      </View>
      {state.isErr && <Text style={styles.errorMessage}>{state.err}</Text>}
    </View>
  );
});

const styles = StyleSheet.create({
  codeText: {
    lineHeight: Metrics.scale(Platform.OS === 'android' ? 18 : 0),
    ...Fonts.Regular(13, Colors.Colors.BLACK),
    borderWidth: 0,
  },
  phoneInputContainer: {
    marginBottom: Metrics.verticalScale(10),
    alignItems: 'center',
  },
  phoneInputContainerStyle: {
    marginTop: Metrics.verticalScale(5),
    backgroundColor: Colors.Colors.TRANSPARENT,
    height: 56,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#C3C3C3',
    width: '100%',
    alignItems: 'center',
  },
  phoneInputTxtContainerStyle: {
    backgroundColor: Colors.Colors.TRANSPARENT,
    borderWidth: 0,
    alignItems: 'center',
  },
  phoneInputTxtStyle: {
    height: Metrics.verticalScale(Platform.OS === 'android' ? 0 : 20),
    borderWidth: 0,
    alignSelf: 'center',
  },
  errorContainer: {
    borderColor: Colors.Colors.TOMATO,
    marginTop: Metrics.verticalScale(5),
    backgroundColor: Colors.Colors.TRANSPARENT,
    height: Metrics.verticalScale(56),
    borderWidth: 1,
  },
  errorMessage: {
    ...Fonts.Medium(12, Colors.Colors.TOMATO),
    marginTop: Metrics.scale(3),
    borderWidth: 0,
  },
  flagStyles: {},
  clearBtn: {
    position: 'absolute',
    right: Metrics.scale(15),
    top: Metrics.scale(2),
    borderRadius: 100,
    zIndex: 99,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    height: Metrics.verticalScale(40),
    width: 1.4,
    backgroundColor: Colors.Colors.INPUT_BORDER_COLOR,
    position: 'absolute',
    left: Metrics.verticalScale(95),
    top: Metrics.verticalScale(15),
  },
  container: {
    position: 'relative',
    alignItems: 'center',
  },
});
