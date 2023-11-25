import ButtonView from '@Component/ButtonView';
import H1 from '@Component/Headings/H1';
import Fonts from '@Theme/Fonts';
import {Colors} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import React, {useRef} from 'react';
import {StyleSheet, View, Animated} from 'react-native';

const CustomToggle = ({boolean, handleMutate}) => {
  const dotPosition = useRef(new Animated.Value(boolean ? 1 : 0)).current;

  const changeSetValue = () => {
    handleMutate(!boolean);
    Animated.timing(dotPosition, {
      toValue: boolean ? 0 : 1,
      duration: 500, // Adjust the duration to control the speed of the animation
      useNativeDriver: false,
    }).start();
  };

  const dotTranslateX = dotPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const animatedDotTranslateX = dotTranslateX.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 25],
  });

  return (
    <View style={styles.toggleContainer}>
      <H1 style={styles.primaryWrapper} text="Notifications" />
      <ButtonView
        activeOpacity={1}
        onPress={changeSetValue}
        style={styles.toggleWrapper}>
        <Animated.View
          style={[
            styles.toggleDot,
            {
              backgroundColor: boolean
                ? Colors.Colors.VIA_COLOR
                : Colors.Colors.DARK_GREY,
              transform: [{translateX: animatedDotTranslateX}],
            },
          ]}
        />
        <View
          style={[
            styles.toggleBar,
            {
              backgroundColor: boolean
                ? Colors.Colors.TOGGLE_COLOR
                : Colors.Colors.GREY,
            },
          ]}
        />
      </ButtonView>
    </View>
  );
};

export default CustomToggle;

const styles = StyleSheet.create({
  toggleWrapper: {
    position: 'relative',
    width: 50,
    justifyContent: 'center',
  },
  toggleDot: {
    width: Metrics.scale(20),
    height: Metrics.scale(20),
    borderRadius: Metrics.scale(20),
    zIndex: 99,
    position: 'absolute',
    top: -3,
  },
  toggleBar: {
    width: Metrics.scale(40),
    height: Metrics.scale(14),
    borderRadius: 25,
  },
  container: {
    flex: 1,
    marginHorizontal: 25,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  primaryWrapper: {
    ...Fonts.Medium(Fonts.Size.xxLarge, Colors.Colors.DARK_BLACK),
  },
});
