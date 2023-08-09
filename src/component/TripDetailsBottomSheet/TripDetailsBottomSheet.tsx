import {CancelIconSimple} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import H3 from '@Component/Headings/H3';
import TopTabs from '@Component/Tabs/TopTabs';
import {rideBottomSheetTripDetails} from '@Constants/dummyData';
import Fonts from '@Theme/Fonts';
import {Colors} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface ITripDetailsBottomSheet {
  heading?: string;
  currentRideDataZustand?: any;
  cancelText?: string;
  handleClose?: Function;
  handleCancle?: Function;
}

const TripDetailsBottomSheet = ({
  heading,
  currentRideDataZustand,
  cancelText,
  handleClose,
  handleCancle,
}: ITripDetailsBottomSheet) => {
  const data = [
    {
      heading,
      currentRideDataZustand: {...currentRideDataZustand},
    },
  ];
  return (
    <View>
      <View style={styles.sheetHeader}>
        <ButtonView onPress={handleClose} style={styles.buttonWrap}>
          <CancelIconSimple />
        </ButtonView>
        <H3 style={styles.headingTxt} text={heading} />
      </View>
      <View>
        <View style={styles.tabsWrapper}>
          <TopTabs
            component={rideBottomSheetTripDetails}
            data={data}
            isTrip={true}
            handleClose={handleClose}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Metrics.scale(10),
    paddingLeft: Metrics.scale(10),
    marginBottom: Metrics.scale(20),
  },
  headingTxt: {
    ...Fonts.Bold(Fonts.Size.large, Colors.Colors.DARK_BLACK),
    marginLeft: Metrics.scale(4),
    lineHeight: 28,
  },
  handleClose: {},
  tabsWrapper: {
    width: '100%',
    height: 400,
  },
  buttonWrap: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: -10,
  },
});

export default TripDetailsBottomSheet;
