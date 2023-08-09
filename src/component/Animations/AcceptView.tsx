import React, {useState} from 'react';
import {View, StyleSheet, PanResponder, Animated, Alert} from 'react-native';
import LottieView from 'lottie-react-native';
import {Colors} from '@Theme/index';
import Metrics from '@Utility/Metrics';
const AcceptAnimation = ({setCurrentRideStepZustand}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({x: 0, y: 0});
  const [isReached, setIsReached] = useState(false);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      setIsDragging(true);
    },
    onPanResponderMove: (_, gesture) => {
      // Only allow dragging upwards
      if (gesture.dy < 0 && gesture.dy <= -20 && gesture.dy >= -36) {
        if (!isReached) {
          setIsReached(true);
          setCurrentRideStepZustand();
          setPosition({x: 0, y: gesture.dy});
          setIsDragging(false);
        }
      }
    },
    onPanResponderRelease: () => {
      if (isReached) {
        setTimeout(() => {
          setPosition({x: 0, y: 0});
          setIsDragging(true);
          setIsReached(false);
        }, 1000);
      }
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.circle, {transform: [{translateY: position.y}]}]}
        {...panResponder.panHandlers}>
        <LottieView
          style={{flex: 1}}
          resizeMode="cover"
          autoPlay={true}
          loop={true}
          source={require('../../assets/lottie/arrowUp.json')}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: Metrics.scale(100),
    height: Metrics.scale(100),
  },
});

export default AcceptAnimation;
