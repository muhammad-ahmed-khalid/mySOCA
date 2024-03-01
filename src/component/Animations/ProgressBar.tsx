import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

const ProgressBar = ({isProgressComplete = () => {}}: any) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 20000,
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) {
        isProgressComplete();
      }
    });
  }, []);

  const width = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bar, {width, backgroundColor: 'green'}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 20,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
  },
  bar: {
    height: '100%',
  },
});
export default ProgressBar;
