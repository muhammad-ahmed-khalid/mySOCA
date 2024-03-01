import ButtonView from '@Component/ButtonView';
import H5 from '@Component/Headings/H5';
import H6 from '@Component/Headings/H6';
import {Colors} from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import {t} from 'i18next';
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';
import {InputProps} from './types';
import { EyeClose, EyeOpen, HidePassword, ShowPassword } from '@Asset/logo';

const Input = forwardRef((props: InputProps, ref) => {
  const {
    style,
    isDisabled = false,
    applyAction,
    btnText,
    isApply = false,
    rightIcon,
    leftIcon,
    placeholderTextColor = Colors.PLACEHOLDER_COLOR,
    multiline = false,
    numberOfLines,
    placeholder,
    label,
    keyboardType,
    isPaddingRight = false,
    maxLength = 100,
    isPassword= false,
  } = props;

  const refInput = useRef();

  const [state, setState] = useState({
    isErr: false,
    err: '',
    value: props.value || '',
  });

  useEffect(
    () =>
      setState(s => ({
        ...s,
        value: props.value,

        obj: null,
        isErr: false,
        err: '',
      })),
    [props.value],
  );

  useImperativeHandle(ref, () => ({
    setError: (isErr: boolean, err: string) => {
      setState(s => ({
        ...s,
        isErr,
        err: err?.length ? err : props.err,
      }));
    },
    getValue: () => state.obj || state.value,
    focus: () => refInput?.current?.focus(),
    setText: txt => onChangeText(txt),
    setObj: obj => {
      setState(s => ({...s, obj, value: obj.name}));
      props.validate(props.schema, {[props.id]: obj});
    },
  }));

  const onChangeText = (txt: string) => {
    props?.onChangeText?.(txt);

    props?.id &&
      props?.schema &&
      props?.validate &&
      props.validate(props.schema, {[props.id]: txt});
    setState(s => ({
      ...s,
      value: txt,
    }));
  };
  console.log(state.err, 'state.errstate.err');
  const [showPassword, setShowPassword] = useState(false);
  function handleIconPress() {
    setShowPassword(!showPassword);
  }
  
  
  return (
    <View>
      <View style={styles.innerWrapper}>
        {leftIcon && <View style={styles.leftIconWrapper}>{leftIcon}</View>}
        {label && (
          <View style={styles.labelWrapper}>
            <H6 style={styles.labelText} text={label} />
          </View>
        )}
        <TextInput
          ref={refInput}
          style={[
            styles.input,
            style,
            isPaddingRight && {paddingRight: 100},
            isDisabled
              ? {
                  backgroundColor: Colors.DISABLED_INPUT_BG,
                  color: 'rgba(0, 0, 0, 0.5)',
                }
              : null,
            leftIcon
              ? {
                  paddingLeft: Metrics.scale(40),
                }
              : null,
            rightIcon
              ? {
                  paddingRight: Metrics.scale(50),
                }
              : null,
          ]}
          {...props}
          value={state.value}
          onChangeText={onChangeText}
          maxLength={maxLength}
          placeholderTextColor={placeholderTextColor}
          multiline={multiline}
          numberOfLines={numberOfLines}
          placeholder={placeholder}
          keyboardType={keyboardType}
          editable={!isDisabled}
          secureTextEntry={isPassword && !showPassword}
        />
        {rightIcon && <View style={styles.rightIconWrapper}>{rightIcon}</View>}
        {isPassword && (
          <ButtonView
            onPress={handleIconPress}
            disabled={!isPassword}
            style={styles.iconWrapper}
            hitSlop={{ top: 10, bottom: 10, left: 5, right: 5 }}
          >
            {showPassword ? <EyeClose /> : <EyeOpen />}
          </ButtonView>
        )}
        {isApply && (
          <ButtonView
            style={styles.applyBtnWrapper}
            onPress={() => applyAction()}>
            <H5 style={styles.applyBtnTxt} text={btnText} />
          </ButtonView>
        )}
      </View>
      {state.isErr && <Text style={styles.err}>{state.err}</Text>}
    </View>
  );
});

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.DARK_BLUE,
    borderRadius: 10,
    marginVertical: Metrics.verticalScale(10),
    paddingVertical: Metrics.scale(10),
    paddingHorizontal: Metrics.scale(15),

    color: Colors.BLACK,
    ...Fonts.Medium(Fonts.Size.xSmall, Colors.WHITE),
    width: '100%',
  },
  err: {
    ...Fonts.Medium(Fonts.Size.xxxxSmall, Colors.ERROR_COLOR),
  },
  applyBtnWrapper: {
    position: 'absolute',
    right: Metrics.scale(25),
    top: Metrics.verticalScale(23),
  },
  applyBtnTxt: {
    ...Fonts.Medium(Fonts.Size.medium, '#47A8DE'),
  },
  innerWrapper: {
    position: 'relative',
    width: '100%',
  },
  labelWrapper: {
    position: 'absolute',
    top: Metrics.scale(2),
    left: Metrics.scale(10),
    backgroundColor: Colors.WHITE,
    zIndex: 9,
    paddingHorizontal: Metrics.scale(4),
  },
  labelText: {
    ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.DARKISH),
  },
  rightIconWrapper: {
    position: 'absolute',
    right: Metrics.scale(18),
    top:
      Platform.OS === 'ios'
        ? Metrics.scale(25)
        : Metrics.scale(27),
  },
  leftIconWrapper: {
    position: 'absolute',
    left: Metrics.scale(10),
    top:
      Platform.OS === 'ios'
        ? Metrics.scale(22)
        : Metrics.scale(28),
  },
  iconWrapper: {
    position: "absolute",
    top:
      Platform.OS === 'ios'
        ? Metrics.scale(25)
        : Metrics.scale(30),
        right: Metrics.scale(18),
    zIndex: 99999,
  },
});

export default Input;
