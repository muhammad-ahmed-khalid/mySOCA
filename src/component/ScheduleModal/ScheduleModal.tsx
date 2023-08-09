import { cancelPng } from '@Asset/logo';
import ProgressBar from '@Component/Animations/ProgressBar';
import ButtonView from '@Component/ButtonView';
import AppButton from '@Component/Buttons/AppButton';
import { BottomSheetName } from '@Constants/user';
import RideBooking from '@Container/AppContainer/HomeRideBookingBottomSheet/RideBooking';
import { Colors } from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';

interface ICustomModal {
    title?: string;
    desc?: string;
    changeModalVisible: Function;
    isAccountVisible: boolean;
    isShowDesc?: boolean;
    isNetConnection?: boolean;
    primaryBtnTxt?: string;
    data?: any;
    handleSubmit?: Function;
    isProgressComplete?: Function;
}

const ScheduleModal = ({
    data,
    changeModalVisible,
    isAccountVisible,
    handleSubmit,
    isProgressComplete,

}: ICustomModal) => {
    const closeModal = (bool: boolean) => {
        changeModalVisible(bool);
    };

    return (
        <ReactNativeModal
            animationIn={'fadeIn'}
            animationOut={'fadeOut'}
            backdropOpacity={0.5}
            isVisible={isAccountVisible}
            backdropTransitionOutTiming={0}>
            <View style={styles.modal}>
                <View style={{ paddingHorizontal: Metrics.verticalScale(18) }}>
                    <ButtonView onPress={() => closeModal(false)} style={{ alignSelf: 'flex-end' }}>
                        <Image source={cancelPng} />
                    </ButtonView>
                    <RideBooking
                        key={BottomSheetName.RIDE_BOOKING}
                        currentRideDataZustand={data}
                        paddingTop={0}
                    />
                    <AppButton title='Accept' onPress={handleSubmit} paddingVertical={Metrics.verticalScale(12)} style={{ marginBottom: 20 }} />
                </View>
                <ProgressBar isProgressComplete={isProgressComplete} />
            </View>
        </ReactNativeModal>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        paddingTop: Metrics.verticalScale(15),
        paddingBottom: Metrics.verticalScale(25),
        backgroundColor: Colors.WHITE,
        borderRadius: Metrics.scale(15),
        justifyContent: 'center',
    },
    buttonView: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: Metrics.baseMargin,
        justifyContent: 'space-around',
        marginTop: Metrics.verticalScale(10),
    },
    text: {
        alignSelf: 'center',
        ...Fonts.SemiBold(Fonts.Size.small, Colors.BLACK),
    },
    btnWrapper: {
        paddingHorizontal: Metrics.scale(30),
        paddingVertical: Metrics.verticalScale(8),
        borderRadius: Metrics.scale(50),
        borderWidth: Metrics.scale(1),
        borderColor: Colors.GREY_BORDER,
        justifyContent: 'center',
    },
    title: {
        ...Fonts.SemiBold(Fonts.Size.medium, Colors.DARK_BLACK),
        marginBottom: Metrics.verticalScale(15),
        textAlign: 'center',
    },
    confirmText: {
        textAlign: 'center',
        marginBottom: Metrics.verticalScale(20),
        ...Fonts.SemiBold(Fonts.Size.normal, Colors.DARK_BLACK),
    },
    separator: {
        backgroundColor: Colors.BLACK,
        width: 1,
        height: 30,
        top: Metrics.scale(4),
    },
    rideDetailsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: Metrics.scale(5),
        paddingTop: Metrics.verticalScale(12),
        paddingBottom: Metrics.verticalScale(16),
    },
    inputWrapper: {
        paddingHorizontal: Metrics.scale(15),
    },
    noteFromCustomerWrapper: {
        marginBottom: Metrics.scale(17),
    },
    notelabel: {
        ...Fonts.Bold(Fonts.Size.xSmall, Colors.MEDIUM_GREY),
        textDecorationLine: 'underline',
        marginBottom: Metrics.scale(8),
    },
    notedesc: {
        ...Fonts.Regular(Fonts.Size.xSmall, Colors.MEDIUM_GREY),
    },
});

export default ScheduleModal;
