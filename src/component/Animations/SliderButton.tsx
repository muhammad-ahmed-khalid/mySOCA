import React from 'react';
import { View } from 'react-native';

import { SlideIconRight, WhiteSlideIcon } from '@Asset/logo';
import { Colors, Fonts } from '@Theme/index';
import SwipeButton from 'rn-swipe-button';
import Metrics from '@Utility/Metrics';

interface ISliderButton {
  text?: string;
  onSwipeSuccess?: Function;
  thumbBgColor?: any;
  isLightIcon?: boolean;
}

const SliderButton = ({
  text = 'Slide to unlock',
  onSwipeSuccess,
  thumbBgColor = Colors.Colors.YELLOW,
  isLightIcon = false,
}: ISliderButton) => {
  return (
    <SwipeButton
      railBackgroundColor={Colors.Colors.MEDIUM_GRAY}
      railBorderColor={'transparent'}
      railFillBackgroundColor={'rgba(243, 186, 23, 0.7)'}
      railFillBorderColor={'transparent'}
      onSwipeSuccess={onSwipeSuccess}
      shouldResetAfterSuccess={true}
      swipeSuccessThreshold={100}
      height={60}
      thumbIconBackgroundColor={thumbBgColor}
      thumbIconBorderColor={'transparent'}
      thumbIconImageSource={isLightIcon ? WhiteSlideIcon : SlideIconRight}
      title={text}
      titleStyles={{
        ...Fonts.SemiBold(Fonts.Size.normal, Colors.Colors.DARK_BLACK),
        paddingLeft: Metrics.scale(40),
      }}
      containerStyles={{ backgroundColor: 'red', elevation: 5 }}
    />
  );
};
export default React.memo(SliderButton);
