import {MenuDotSvg} from '@Asset/logo';
import SliderButton from '@Component/Animations/SliderButton';
import AppButton from '@Component/Buttons/AppButton';
import ButtonView from '@Component/ButtonView';
import {Colors} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import * as React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
interface IBottomSheetBtnWithMenuIcon {
  btnText?: string;
  handlePressBtn?: Function;
  handleMenuPress?: Function;
  btnStyle?: StyleProp<ViewStyle>;
  btnTxtStyle?: StyleProp<ViewStyle>;
  isLightIcon?: boolean;
}

const BottomSheetBtnWithMenuIcon = ({
  btnText,
  handlePressBtn,
  handleMenuPress,
  btnStyle,
  isLightIcon,
  btnTxtStyle,
}: IBottomSheetBtnWithMenuIcon) => {
  return (
    <View style={styles.root}>
      <View style={styles.innerWrapper}>
        <View style={{width: '80%'}}>
          <SliderButton
            text={btnText}
            onSwipeSuccess={handlePressBtn}
            thumbBgColor={btnStyle}
            isLightIcon={isLightIcon}
          />
        </View>

        <ButtonView style={styles.menuWrapper} onPress={handleMenuPress}>
          <MenuDotSvg />
        </ButtonView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingVertical: Metrics.scale(10),
    width: '100%',
  },

  buttonStyle: {
    width: '81%',
    shadowColor: Colors.Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 4,
  },
  innerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuWrapper: {
    width: Metrics.scale(60),
    height: Metrics.scale(60),
    backgroundColor: Colors.Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    borderRadius: Metrics.scale(14),
    shadowColor: Colors.Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 4,
  },
});

export default BottomSheetBtnWithMenuIcon;
