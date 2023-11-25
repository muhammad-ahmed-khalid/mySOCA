import {RightArrowLarge} from '@Asset/logo';
import AddSvg from '@Asset/logo/AddSvg.svg';
import ButtonView from '@Component/ButtonView';
import H5 from '@Component/Headings/H5';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';

interface IAppButton {
  title: string;
  onPress?: Function;
  onLongPress?: Function;
  style?: {};
  textStyle?: {};
  imageStyle?: {};
  imageSource?: ImageSourcePropType;
  iconAfterText?: boolean;
  isDisabled?: boolean;
  paddingVertical?: any;
}

const AppButton = ({
  title = 'Click',
  style = {},
  textStyle = {},
  imageStyle = {},
  imageSource,
  iconAfterText = false,
  svg = false,
  isDisabled = false,
  paddingVertical = Metrics.verticalScale(20),
  ...rest
}: IAppButton) => {
  return (
    <ButtonView
      style={[
        styles.button,
        {paddingVertical},
        style,
        isDisabled && {backgroundColor: Colors.DISABLED_BTN_BG},
      ]}
      enableClick={isDisabled}
      {...rest}>
      {imageSource && !iconAfterText && (
        <Image
          style={[styles.image, imageStyle]}
          source={imageSource}
          resizeMode="contain"
        />
      )}
      <View style={styles.svg}>{!svg ? svg : <AddSvg />}</View>
      <H5
        style={[textStyle, isDisabled && {color: Colors.DISABLED_BTN_COLOR}]}
        text={title}
      />
      {imageSource && iconAfterText && (
        <View style={styles.iconRightStyle}>
          <RightArrowLarge />
        </View>
      )}
    </ButtonView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.DARKISH,
    borderRadius: Metrics.verticalScale(50),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 4,
  },
  icon: {
    marginRight: Metrics.scale(10),
  },
  image: {
    width: Metrics.scale(22),
    height: Metrics.scale(22),
    marginRight: Metrics.scale(5),
    marginBottom: Metrics.verticalScale(3),
  },
  imageRight: {
    marginTop: 5,
    width: Metrics.scale(18),
    height: Metrics.scale(14),
    marginLeft: Metrics.scale(5),
    marginBottom: Metrics.verticalScale(3),
  },
  svg: {marginHorizontal: Metrics.scale(5)},
  iconRightStyle: {
    marginHorizontal: 10,
  },
});

export default AppButton;
