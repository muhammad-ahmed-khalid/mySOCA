import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { FemalePlayer, MalePlayer } from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import H4 from '@Component/Headings/H4';
import H5 from '@Component/Headings/H5';
import { Colors } from '@Theme/Colors';
import Metrics from '@Utility/Metrics';
import Fonts from '@Theme/Fonts';

const PlayerSelectionModal = ({
  changeDeleteModalVisible,
  setIsDeleteAccountVisible,
  isDeleteAccountVisible,
}) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  const handleSubmit = (bool) => {
    changeDeleteModalVisible(selectedPlayer);
    setIsDeleteAccountVisible(false);
  };

  const handleBackDrop = (bool) => {
    setIsDeleteAccountVisible(bool);
  };

  const handlePlayerSelect = (player) => {
    setSelectedPlayer(player);
  };

  return (
    <ReactNativeModal
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      backdropOpacity={0.5}
      onBackdropPress={()=>handleBackDrop(false)}
      isVisible={isDeleteAccountVisible}
      backdropTransitionOutTiming={0}
    >
      <View style={styles.modal}>
        <H4 text="Select Player" style={{ color: Colors.WHITE }} />
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly', marginTop: Metrics.doubleBaseMargin }}>
          <ButtonView style={{ borderColor: selectedPlayer === 'Stacy Gwen' ? 'white' : 'transparent', borderWidth: 1 }} onPress={() => handlePlayerSelect('Stacy Gwen')}>
            <ImageBackground
              source={FemalePlayer}
              style={{ height: 150, width: 120, justifyContent: 'flex-end' }}
            >
              <H5 text="Stacy Gwen" style={{ alignSelf: 'center', color: Colors.WHITE, marginBottom: Metrics.baseMargin }} />
            </ImageBackground>
          </ButtonView>
          <ButtonView style={{ borderColor: selectedPlayer === 'Mary Jane' ? 'white' : 'transparent', borderWidth: 1 }} onPress={() => handlePlayerSelect('Mary Jane')}>
            <ImageBackground
              source={MalePlayer}
              style={{ height: 150, width: 120, justifyContent: 'flex-end' }}
            >
              <H5 text="Mary Jane" style={{ alignSelf: 'center', color: Colors.WHITE, marginBottom: Metrics.baseMargin }} />
            </ImageBackground>
          </ButtonView>
        </View>
        <ButtonView onPress={handleSubmit} style={{ alignItems: "center", backgroundColor: Colors.DARK_BLUE, padding: 10, marginTop: Metrics.doubleBaseMargin, borderRadius: Metrics.smallMargin, width: '85%' }}>
          <H4 text="Confirm Selection" style={{ ...Fonts.Medium(Fonts.Size.medium, Colors.DARK_BLACK), }} />
        </ButtonView>
      </View>
    </ReactNativeModal>
  );
};

const styles = StyleSheet.create({
  modal: {
    paddingTop: Metrics.verticalScale(25),
    paddingBottom: Metrics.verticalScale(25),
    paddingHorizontal: Metrics.verticalScale(18),
    backgroundColor: Colors.FAMILY_BACKGROUND,
    marginHorizontal: Metrics.scale(10),
    borderRadius: Metrics.scale(15),
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default PlayerSelectionModal;
