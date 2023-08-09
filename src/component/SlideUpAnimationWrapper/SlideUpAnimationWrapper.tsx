import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import {SlideConfig} from '@Constants/dummyData';

const SlideUpAnimationWrapper = ({children, style = {}}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const slideAnimation = () => {
      const {toValue, duration} = SlideConfig.create;
      return Animated.timing(animatedValue, {
        toValue,
        duration,
        useNativeDriver: true,
      }).start();
    };

    slideAnimation();
  }, []);

  const animatedStyle = {
    opacity: animatedValue,
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [400, 0],
        }),
      },
    ],
  };

  return (
    <Animated.View style={[animatedStyle, style]}>{children}</Animated.View>
  );
};

export default SlideUpAnimationWrapper;
