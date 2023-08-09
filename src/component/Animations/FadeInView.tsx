import type {PropsWithChildren} from 'react';
import React, {useEffect, useRef} from 'react';
import type {ViewStyle} from 'react-native';
import {Animated} from 'react-native';

type FadeInViewProps = PropsWithChildren<{style: ViewStyle}>;

const FadeInView: React.FC<FadeInViewProps> = props => {
  const scaleAnim = useRef(new Animated.Value(1)).current; // Initial value for opacity: 0

  useEffect(() => {
    if (props.Animation) {
      Animated.timing(scaleAnim, {
        toValue: 50,
        duration: 400,
        useNativeDriver: true,
      }).start(({finished}) => {
        if (finished) {
          props.handleNavigation();
        }
        setTimeout(() => {
          scaleAnim.setValue(1);
        }, 1000);
      });
    }
  }, [props.Animation]);

  return (
    <Animated.View 
      style={{
        ...props.style,
        transform: [{scale: scaleAnim}],
      }}>
      {props.children}
    </Animated.View>
  );
};
export default FadeInView;
