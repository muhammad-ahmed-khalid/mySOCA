import AcceptAnimation from '@Component/Animations/AcceptView';
import CurrentLocation from '@Component/CurrentLocation/CurrentLocation';
import {Colors} from '@Theme/index';
import {commonAbsoluteCss} from '@Utility/common';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';

interface ICustomBottomSheet {
  children?: any;
  isSwipeUp?: boolean;
  setCurrentRideStepZustand?: any;
  handleCurrentLocation?: any;
}

const CustomBottomSheet = ({
  children,
  isSwipeUp = false,
  setCurrentRideStepZustand,
  handleCurrentLocation,
}: ICustomBottomSheet) => {
  return (
    <View
      style={[
        styles.bottomWraper,
        commonAbsoluteCss?.openSheetWrapper,
        {height: 'auto'},
      ]}>
      <CurrentLocation handlePress={handleCurrentLocation} />
      {isSwipeUp && (
        <View style={styles.swipupWrapper}>
          <AcceptAnimation
            setCurrentRideStepZustand={setCurrentRideStepZustand}
          />
        </View>
      )}
      {children}
    </View>
  );
};

export default CustomBottomSheet;

const styles = StyleSheet.create({
  bottomWraper: {
    backgroundColor: Colors.Colors.WHITE,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: Colors.Colors.BLACK,
    shadowOpacity: 0.5,
    shadowRadius: Metrics.scale(10),
    elevation: 7,
    paddingHorizontal: Metrics.scale(20),
    paddingBottom: Metrics.verticalScale(30),
  },

  sheetOpenStyle: {top: 0},
  sheetCloseStyle:
    Platform.OS == 'ios'
      ? {height: Metrics.verticalScale(290)}
      : {height: Metrics.verticalScale(340)},

  swipupWrapper: {
    width: Metrics.scale(80),
    height: Metrics.scale(80),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: Metrics.scale(-40),
    marginBottom: Metrics.scale(-40),
    zIndex: 99,
  },
  currentLocationWrapper: {
    marginLeft: 20,
  },
});
