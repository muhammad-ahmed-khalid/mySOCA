import { CancelIconSimple, ExclemenationMark } from '@Asset/logo';
import BottomSheetModal from '@Component/BottomSheetModal/BottomSheetModal';
import ButtonView from '@Component/ButtonView';
import H5 from '@Component/Headings/H5';
import H6 from '@Component/Headings/H6';
import Fonts from '@Theme/Fonts';
import { Colors } from '@Theme/index';
import Metrics from '@Utility/Metrics';
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import TripDetailsBottomSheet from './TripDetailsBottomSheet';
import CustomModal from '@Component/CustomModal/CustomModal';
import CustomSpinner from '@Component/CustomSpinner/CustomSpinner';

interface ITripBottomSheetModal {
  bottomSheetRefMenu?: any;
  handleCancelTrip?: Function;
  currentRideDataZustand?: any;
  cancelRequestMutateLoading?: boolean;
}

const TripBottomSheetModal = ({
  bottomSheetRefMenu,
  handleCancelTrip,
  currentRideDataZustand,
  cancelRequestMutateLoading,
}: ITripBottomSheetModal) => {
  const [isDeleteAccountVisible, setisDeleteAccountVisible] =
    React.useState(false);
  const changeDeleteModalVisible = isLogout => {
    if (isLogout == true) {
      setisDeleteAccountVisible(!isDeleteAccountVisible);
      handleCancelTrip();
    } else {
      setisDeleteAccountVisible(!isDeleteAccountVisible);
    }
  };
  const handleClose = () => {
    bottomSheetRefMenu?.current?.hide();
  };

  return (
    <BottomSheetModal
      ref={bottomSheetRefMenu}
      height={Metrics.verticalScale(750)}>
      <View style={styles.bottomSheetTripWrapper}>
        <TripDetailsBottomSheet
          heading="tripDetails"
          currentRideDataZustand={currentRideDataZustand}
          handleClose={handleClose}
        />
        <View style={styles.cancelWrapper}>
          <ButtonView
            style={styles.cancelBtn}
            onPress={() => setisDeleteAccountVisible(true)}>
            <ExclemenationMark />
            <H5 text="cancelTrip" style={styles.cancelBtnTxt} />
            {cancelRequestMutateLoading && (
              <View style={styles.spinnerWrapper}>
                <CustomSpinner
                  color={Colors.Colors.RED}
                  spinnerStyle={{padding: 0}}
                />
              </View>
            )}
          </ButtonView>
          <H6 text="cancellingTextinfo" style={styles.cancelBtnInfoTxt} />
        </View>
      </View>
      <CustomModal
        changeDeleteModalVisible={changeDeleteModalVisible}
        setisDeleteAccountVisible={setisDeleteAccountVisible}
        isDeleteAccountVisible={isDeleteAccountVisible}
        title={'Request Removal'}
        desc={'Are you sure you want to cancel the ride?'}
      />
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  bottomSheetTripWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cancelBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '55%',
  },
  spinnerWrapper: {position: 'absolute', right: '5%'},
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
    paddingTop: Metrics.scale(35),
    borderTopWidth: 1,
    borderTopColor: Colors.Colors.GREY,
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default TripBottomSheetModal;
