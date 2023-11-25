import ButtonView from '@Component/ButtonView';
import {Colors, Fonts} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import React, {useEffect, useMemo, useState} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';

import Input from '../Input';
import {IInputControl} from './types';

const MaterialTextInput = ({
  label,
  error,
  value,
  onBlur,
  onFocus,
  onPress,
  LeftIcon,
  RightIcon,
  isPassword,
  labelStyle,
  labelLines,
  wrapperStyle,
  numberOfLines,
  containerStyle,
  isApply = false,
  applyAction,
  placeholderTextColor = Colors.Colors.PLACEHOLDER_COLOR,
  as: Component = Input,
  ...rest
}: IInputControl) => {
  const _animationOnFocuse = React.useRef(
    new Animated.Value(value ? 1 : 0),
  ).current;

  const [showPassword, setShowPassword] = useState(false);

  useEffect(setValue, [value]);

  function setValue() {
    Boolean(value) && animate(1);
  }

  function handleFocus() {
    animate(1);
    onFocus && onFocus();
  }

  function handleBlur() {
    animate(value ? 1 : 0);
    onBlur && onBlur();
  }

  function animate(toValue: number) {
    Animated.timing(_animationOnFocuse, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();

  }

  function handleIconPress() {
    isPassword ? setShowPassword(!showPassword) : onPress && onPress();
  }

  const animatedStyles = {
    containerStyle: {
      borderColor: _animationOnFocuse.interpolate({
        inputRange: [0, 1],
        outputRange: ['#D9D9D9', Colors.Colors.BLACK],
      }),
    },
    labelStyle: {
      left: LeftIcon ? Metrics.scale(30) : 0,
      top: _animationOnFocuse.interpolate({
        inputRange: [0, 1],
        outputRange: [Metrics.verticalScale(16), Metrics.verticalScale(-16)],
      }),
      fontSize: _animationOnFocuse.interpolate({
        inputRange: [0, 1],
        outputRange: labelStyle
          ? [Number(labelStyle.fontSize), Number(labelStyle.fontSize) - 2]
          : [16, 14],
      }),
      color: _animationOnFocuse.interpolate({
        inputRange: [0, 1],
        outputRange: [Colors.Colors.STEEL, Colors.APP_PRIMARY_COLOR],
      }),
    },
    iconStyle: {
      tintColor: _animationOnFocuse.interpolate({
        inputRange: [0, 1],
        outputRange: [Colors.Colors.STEEL, Colors.APP_PRIMARY_COLOR],
      }),
    },
  };

  const icon = useMemo(
    () => ({
      true: require('../../assets/logo/PasswordShow.png'),
      false: require('../../assets/logo/PasswordHide.png'),
    }),
    [],
  );

  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <Animated.View
        style={[
          styles.container,
          containerStyle,
          animatedStyles.containerStyle,
        ]}>
        {Boolean(LeftIcon) && (
          <View style={styles.iconWrapper}>
            <Animated.Image
              source={LeftIcon}
              style={[styles.iconLeft, animatedStyles.iconStyle]}
            />
          </View>
        )}

        {!!label && (
          <Animated.Text
            style={[styles.labelStyle, labelStyle, animatedStyles.labelStyle]}
            numberOfLines={numberOfLines || 1}>
            {label}
          </Animated.Text>
        )}

        <Component
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          placeholderTextColor={placeholderTextColor}
          style={styles.inputTextStyle}
          {...(isPassword && {secureTextEntry: !showPassword})}
          {...rest}
        />

        {isApply && (
          <ButtonView
            style={styles.applyBtnWrapper}
            onPress={() => applyAction()}>
            <Text style={styles.applyBtnTxt}>Apply</Text>
          </ButtonView>
        )}

        {(isPassword || Boolean(RightIcon)) && (
          <ButtonView
            onPress={handleIconPress}
            disabled={!isPassword || Boolean(onPress)}
            style={styles.iconWrapper}
            hitSlop={{top: 10, bottom: 10, left: 5, right: 5}}>
            <Animated.Image
              source={
                isPassword
                  ? icon[String(showPassword) as keyof typeof icon]
                  : RightIcon
              }
              resizeMode="contain"
              style={[styles.iconRight, animatedStyles.iconStyle]}
            />
          </ButtonView>
        )}
      </Animated.View>
      {!!error && <Text style={styles.errorMessage}>{error}</Text>}
    </View>
  );
};

export default MaterialTextInput;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    height: Metrics.verticalScale(68),
    marginBottom: Metrics.verticalScale(20),
    marginTop: Metrics.verticalScale(10),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: Metrics.verticalScale(5),
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    paddingRight: 10,
  },
  labelStyle: {
    ...StyleSheet.absoluteFillObject,
    ...Fonts.Medium(16, Colors.Colors.STEEL),
  },
  iconWrapper: {
    paddingHorizontal: Metrics.smallMargin,
  },
  iconLeft: {width: Metrics.scale(20), height: Metrics.scale(20)},
  iconRight: {
    width: Metrics.scale(20),
    height: Metrics.scale(20),
  },
  errorMessage: {
    ...Fonts.Medium(12, Colors.Colors.TOMATO),
    marginHorizontal: 10,
  },
  inputTextStyle: {
    ...Fonts.Medium(Fonts.Size.medium, Colors.Colors.PLACEHOLDER_COLOR),
    textDecorationLine: 'none',
    paddingVertical: Metrics.verticalScale(12),
  },
  applyBtnWrapper: {},
  applyBtnTxt: {
    ...Fonts.Medium(Fonts.Size.medium, '#47A8DE'),
  },
});
