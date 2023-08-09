// NOTE
// TouchableHighlight

// • What it does: Darkens or lightens the background of the element when pressed.

// • When to use it: On iOS for touchable elements or buttons that have a solid shape or background, and on ListView items.

// TouchableOpacity

// • What it does: Lightens the opacity of the entire element when pressed.

// • When to use it: On iOS for touchable elements that are standalone text or icons with no background color.

// TouchableNativeFeedback

// • What it does: Adds a ripple effect to the background when pressed.

// • When to use it: On Android for almost all touchable elements.

import {Colors} from '@Theme/index';
import React, {useMemo} from 'react';
import {Insets, Platform, TouchableOpacity} from 'react-native';
import Utils from '../../utility/Utils';
interface IButtonView {
  style?: any;
  hitSlop?: Insets;
  onPress?: Function;
  disabled?: boolean;
  enableClick?: boolean;
  onLongPress?: Function;
  disableRipple?: boolean;
  iosSolidShape?: boolean;
  children: React.ReactNode;
  isBackgroundBorderLess?: boolean;
  activeOpacity?: any;
}

export const ButtonView = ({
  style,
  children,
  enableClick = false,
  onPress = () => null,
  disabled,
  onLongPress = () => null,
  activeOpacity = 0.7,
}: IButtonView) => {
  const [debounceTime, debounceConfig] = useMemo(
    () => [
      Platform.select({
        ios: 200,
        android: 700,
      }),
      {
        leading: true,
        trailing: false,
      },
    ],
    [],
  );

  const _onPress = Utils.debounce(onPress, debounceTime, debounceConfig);
  const _onLongPress = Utils.debounce(
    onLongPress,
    debounceTime,
    debounceConfig,
  );

  return (
    <TouchableOpacity
      style={[
        style,
        disabled
          ? {backgroundColor: Colors.Colors.DISABLED_BTN_BG, opacity: 0.7}
          : {},
      ]}
      onPress={_onPress}
      // activeOpacity={0.5}
      disabled={enableClick}
      onLongPress={_onLongPress}
      activeOpacity={activeOpacity}>
      {children}
    </TouchableOpacity>
  );
};

export default ButtonView;
