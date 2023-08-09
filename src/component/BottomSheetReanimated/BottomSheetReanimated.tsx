import {Colors} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import { commonAbsoluteCss } from '@Utility/common';
import React, {memo} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const screenHeight = Dimensions.get('window').height;
let sheetMaxHeight = screenHeight - 50;
let sheetMinHeight = 200;

const MAX_Y = sheetMinHeight - sheetMaxHeight;
const MID_Y = MAX_Y / 2;
const MIN_Y = 0;

const MIN_THRESHOLD = 40;

const AnimatedBox = Animated.createAnimatedComponent(View);
const BottomSheetReanimated = ({
  height,
  bottomSheetExtraHeight,
  children,
}: any) => {
  sheetMinHeight = height;
  if (bottomSheetExtraHeight > screenHeight) {
    sheetMaxHeight = bottomSheetExtraHeight + 50;
  } else {
    sheetMaxHeight = screenHeight - 50;
  }

  const offsetY = useSharedValue(0);
  const savedOffset = useSharedValue(0);
  const dragGesture = Gesture.Pan()
    .onUpdate(e => {
      offsetY.value = e.translationY + savedOffset.value;
    })
    .onEnd(e => {
      if (e.translationY < 0) {
        //dragging up
        if (e.translationY > -MIN_THRESHOLD) {
          offsetY.value = savedOffset.value === MIN_Y ? MIN_Y : MAX_Y;
          savedOffset.value = savedOffset.value === MIN_Y ? MIN_Y : MAX_Y;
        } else if (
          e.translationY < MID_Y + MIN_THRESHOLD &&
          savedOffset.value === MIN_Y
        ) {
          offsetY.value = MAX_Y;
          savedOffset.value = MAX_Y;
        } else {
          offsetY.value = savedOffset.value === MIN_Y ? MAX_Y : MAX_Y;
          savedOffset.value = savedOffset.value === MIN_Y ? MAX_Y : MAX_Y;
        }
      } else {
        //dragging down
        if (e.translationY < MIN_THRESHOLD) {
          offsetY.value = savedOffset.value === MAX_Y ? MAX_Y : MIN_Y;
          savedOffset.value = savedOffset.value === MAX_Y ? MAX_Y : MIN_Y;
        } else if (
          e.translationY > -MID_Y + MIN_THRESHOLD &&
          savedOffset.value === MAX_Y
        ) {
          offsetY.value = MIN_Y;
          savedOffset.value = MIN_Y;
        } else {
          offsetY.value = savedOffset.value === MAX_Y ? MIN_Y : MIN_Y;
          savedOffset.value = savedOffset.value === MAX_Y ? MIN_Y : MIN_Y;
        }
      }
    })
    .onFinalize(() => {});
  const animatedSheet = useAnimatedStyle(() => {
    const animatedHeight = interpolate(
      offsetY.value,
      [MAX_Y, MIN_Y],
      [sheetMaxHeight, sheetMinHeight],
      {
        extrapolateRight: Extrapolation.CLAMP,
        extrapolateLeft: Extrapolation.CLAMP,
      },
    );
    return {
      height: withSpring(animatedHeight, {
        damping: 16,
        stiffness: 100,
        mass: 0.3,
      }),
    };
  });
  return (
    <GestureHandlerRootView style={styles.container}>
      <GestureDetector gesture={dragGesture}>
        <AnimatedBox style={[styles.sheetContainer, animatedSheet, commonAbsoluteCss?.openSheetWrapper]}>
          <View style={styles.buttnSperatorWrapper}>
            <View style={styles.seperator} />
          </View>

          {children}
        </AnimatedBox>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default memo(BottomSheetReanimated);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sheetContainer: {
    backgroundColor: Colors.Colors.WHITE,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: Colors.Colors.BLACK,
    shadowOpacity: 0.5,
    shadowRadius: Metrics.scale(10),
    elevation: 7,
    paddingHorizontal: Metrics.scale(20),
  },
  dragbarContainer: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Colors.WHITE,
  },
  dragBar: {
    width: 80,
    height: 6,
    backgroundColor: Colors.Colors.DARK_BLACK,
    borderRadius: 12,
  },
  seperator: {
    backgroundColor: Colors.Colors.INPUT_BORDER_COLOR,
    width: Metrics.scale(65),
    height: Metrics.scale(6),
    borderRadius: Metrics.scale(25),
    marginTop: Metrics.verticalScale(10),
  },
  buttnSperatorWrapper: {
    alignItems: 'center',
  },
});
