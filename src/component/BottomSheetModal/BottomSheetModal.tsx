import {Colors} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';

interface IBottomSheetModal {
  height?: any;
  children?: React.ReactNode;
}

const BottomSheetModal = React.forwardRef(
  ({height, children}: IBottomSheetModal, ref) => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    React.useImperativeHandle(
      ref,
      () => ({
        hide: () => {
          setIsModalVisible(false);
        },
        show: () => {
          setIsModalVisible(true);
        },
      }),
      [],
    );
    return (
      <View style={{flex: 1}}>
        <ReactNativeModal
          animationIn={'slideInUp'}
          animationOut={'slideOutDown'}
          animationInTiming={250}
          animationOutTiming={500}
          isVisible={isModalVisible}
          backdropOpacity={0.5}
          style={styles.modalize}
          onBackdropPress={() => {
            setIsModalVisible(false);
          }}
          backdropTransitionOutTiming={0}>
          <View
            style={[
              styles.bottomSheetInnerWrapper,
              height ? {height: height} : null,
            ]}>
            {children}
          </View>
        </ReactNativeModal>
      </View>
    );
  },
);

const styles = StyleSheet.create({
  modalize: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
  },
  bottomSheetInnerWrapper: {
    height: Metrics.verticalScale(300),
    backgroundColor: Colors.Colors.WHITE,
    zIndex: 9999,
    shadowColor: Colors.Colors.BLACK,
    shadowOpacity: 1,
    shadowRadius: Metrics.scale(20),
    elevation: 45,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
    paddingHorizontal: Metrics.scale(25),
    paddingTop: Metrics.scale(20),
  },
});

export default BottomSheetModal;
