import {ExclemenationMark} from '@Asset/logo';
import BottomSheetBtnWithMenuIcon from '@Component/BottomSheetBtnWithMenuIcon/BottomSheetBtnWithMenuIcon';
import BottomSheetModal from '@Component/BottomSheetModal/BottomSheetModal';
import ButtonView from '@Component/ButtonView';
import CurrentLocation from '@Component/CurrentLocation/CurrentLocation';
import H5 from '@Component/Headings/H5';
import H6 from '@Component/Headings/H6';
import RideTravelTime from '@Component/RideTravelTime/RideTravelTime';
import SlideUpAnimationWrapper from '@Component/SlideUpAnimationWrapper/SlideUpAnimationWrapper';
import TripBottomSheetModal from '@Component/TripDetailsBottomSheet/TripBottomSheetModal';
import TripDetailsBottomSheet from '@Component/TripDetailsBottomSheet/TripDetailsBottomSheet';
import {useBoundStore} from '@Store/index';
import {Colors, Fonts} from '@Theme/index';
import {getDistanceMatrix} from '@Utility/GoogleAPIUtil';
import Metrics from '@Utility/Metrics';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

interface IBottomSheetRideView {
  handlePressEndTrip?: Function;
  handleCurrentLocation?: Function;
  handleCancelTrip?: Function;
  currentRideDataZustand?: any;
  currentLocationZustand?: any;
}

const BottomSheetRideView = ({
  handlePressEndTrip,
  handleCurrentLocation,
  handleCancelTrip,
  currentRideDataZustand,
  currentLocationZustand,
}: IBottomSheetRideView) => {
  const BottomSheetRefMenu = React.useRef(null);
  const updatedCurrentLocation = React.useRef(null);
  updatedCurrentLocation.current = currentLocationZustand;
  // currentRideDataZustand?.pickupAndDropoff?.[1]?.coordinate will be changed to stop coordinate
  const [distanceMatrix, setDistanceMatrix] = React.useState({
    distance: 0,
    duration: '0 mins',
  });
  const handleMenuPress = () => {
    BottomSheetRefMenu?.current?.show();
  };

  useEffect(() => {
    //will run first time only
    getDistanceMatrix(
      updatedCurrentLocation.current,
      currentRideDataZustand?.pickupAndDropoff?.[1]?.coordinate,
    ).then(res => {
      setDistanceMatrix({
        ...distanceMatrix,
        distance: res?.distance?.text,
        duration: res?.duration?.text,
      });
    });
    let interval = setInterval(() => {
      getDistanceMatrix(
        updatedCurrentLocation.current,
        currentRideDataZustand?.pickupAndDropoff?.[1]?.coordinate,
      ).then(res => {
        setDistanceMatrix({
          ...distanceMatrix,
          distance: res?.distance?.text,
          duration: res?.duration?.text,
        });
      });
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <View style={styles.rideTravelWrapper}>
        <RideTravelTime
          time={distanceMatrix?.duration}
          distance={distanceMatrix?.distance}
        />
      </View>
      <View style={styles.currentLocationWrapper}>
        <CurrentLocation handlePress={handleCurrentLocation} />
      </View>
      <SlideUpAnimationWrapper style={styles.endTripWrapper}>
        <BottomSheetBtnWithMenuIcon
          btnText="endTrip"
          btnStyle={Colors.Colors.RED}
          isLightIcon={true}
          btnTxtStyle={{color: Colors.Colors.WHITE}}
          handlePressBtn={() => handlePressEndTrip(1)}
          handleMenuPress={() => handleMenuPress()}
        />
      </SlideUpAnimationWrapper>
      <View style={styles.bottomSheetModalWrapper}>
        <TripBottomSheetModal
          handleCancelTrip={handleCancelTrip}
          bottomSheetRefMenu={BottomSheetRefMenu}
          currentRideDataZustand={currentRideDataZustand}
        />
      </View>
    </>
  );
};

export default BottomSheetRideView;

const styles = StyleSheet.create({
  bottomSheetInnerWrapper: {flex: 1, justifyContent: 'space-between'},
  bottomSheetModalWrapper: {position: 'absolute', height: '100%'},

  rideTravelWrapper: {
    position: 'absolute',
    top: 140,
  },
  endTripBtn: {
    backgroundColor: Colors.Colors.RED,
  },

  endTripWrapper: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    paddingHorizontal: Metrics.scale(20),
  },
  cancelBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cancelBtnTxt: {
    ...Fonts.SemiBold(Fonts.Size.xSmall, Colors.Colors.RED),
    marginLeft: Metrics.scale(10),
  },
  cancelBtnInfoTxt: {
    ...Fonts.Medium(Fonts.Size.xSmall, Colors.Colors.MEDIUM_GREY_SHADE),
    marginLeft: Metrics.scale(30),
    marginTop: Metrics.scale(5),
    width: '80%',
  },
  cancelWrapper: {
    paddingBottom: Metrics.scale(40),
    paddingTop: Metrics.scale(45),
    borderTopWidth: 1,
    borderTopColor: Colors.Colors.GREY,
  },
  currentLocationWrapper: {
    position: 'absolute',
    bottom: 120,
    right: 0,
    zIndex: -1,
  },
});
