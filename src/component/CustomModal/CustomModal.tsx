import ButtonView from '@Component/ButtonView';
import H2 from '@Component/Headings/H2';
import H4 from '@Component/Headings/H4';
import { Colors } from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';

interface ICustomModal {
  title?: string;
  desc?: string;
  changeDeleteModalVisible: Function;
  setisDeleteAccountVisible: Function;
  isDeleteAccountVisible: boolean;
  isShowDesc?: boolean;
  isNetConnection?: boolean;
  primaryBtnTxt?: string;
}

const CustomModal = ({
  changeDeleteModalVisible,
  setisDeleteAccountVisible,
  isDeleteAccountVisible,
  title = 'title',
  desc = 'desc',
  isShowDesc = true,
  isNetConnection = true,
  primaryBtnTxt = 'yes',
}: ICustomModal) => {
  const closeModal = (bool: boolean) => {
    changeDeleteModalVisible(bool);
  };

  const handleBackDrop = (bool: boolean) => {
    setisDeleteAccountVisible(bool);
  };
  return (
    <ReactNativeModal
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      backdropOpacity={0.5}
      onBackdropPress={!isNetConnection ? null : () => handleBackDrop(false)}
      isVisible={isDeleteAccountVisible}
      backdropTransitionOutTiming={0}>
      <View style={styles.modal}>
        <View style={styles.container}>
          <H2 style={styles.title} text={title} />
          {isShowDesc && <H4 text={desc} style={styles.confirmText} />}

          <View style={styles.buttonView}>
            <ButtonView
              style={styles.btnWrapper}
              activeOpacity={isNetConnection ? 0.7 : 0.4}
              onPress={() => closeModal(true)}>
              <H2 style={styles.text} text={primaryBtnTxt} />
            </ButtonView>
            {!isNetConnection ? (
              <></>
            ) : (
              <ButtonView
                style={styles.btnWrapper}
                onPress={() => handleBackDrop(false)}>
                <H2 style={styles.text} text="no" />
              </ButtonView>
            )}
          </View>
        </View>
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
    paddingTop: Metrics.verticalScale(25),
    paddingBottom: Metrics.verticalScale(25),
    paddingHorizontal: Metrics.verticalScale(18),
    backgroundColor: Colors.WHITE,
    marginHorizontal: Metrics.scale(10),
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
});

export default CustomModal;
