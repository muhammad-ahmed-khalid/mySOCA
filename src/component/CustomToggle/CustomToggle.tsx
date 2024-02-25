import H1 from '@Component/Headings/H1';
import {RideJourneyBottomSheetStep} from '@Constants/user';
import ButtonView from '@Component/ButtonView';
import Fonts from '@Theme/Fonts';
import {Colors} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import React, {useEffect, useRef, useState} from 'react';
import { Animated, StyleSheet, View } from 'react-native';

const CustomToggle = ({
  boolean,
  handleMutate,
  isShowHeading = true,
  headingText = '',
  isShowModal = false,
  isRideFlow = true,
  setRideJourneySheetZustand,
}) => {
  const [dotPosition, setDotPosition] = useState(
    new Animated.Value(boolean ? 1 : 0),
  );

  useEffect(() => {
    Animated.timing(dotPosition, {
      toValue: boolean ? 1 : 0,
      duration: 500, // Adjust the duration to control the speed of the animation
      useNativeDriver: false,
    }).start(() => {
      // Animation finished, update dotPosition
      setDotPosition(new Animated.Value(boolean ? 1 : 0));
    });
  }, [boolean]);

  const changeSetValue = () => {
    if (isRideFlow == true) {
      if (boolean && setRideJourneySheetZustand) {
        setRideJourneySheetZustand(RideJourneyBottomSheetStep.INCOMING_REQUEST);
      } else {
        let payload = {
          allowIncomingRequests: !boolean,
        };
        handleMutate(payload);
      }
    } else {
      let payload = {
        allowIncomingRequests: !boolean,
      };
      handleMutate(payload);
    }
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
      {isShowHeading && <H1 style={styles.primaryWrapper} text={headingText} />}
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

export default React.memo(CustomToggle);

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
