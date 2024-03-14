import { Email, FaqsIcon, LogoSvg, LogoutSvg } from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import FormDataInput from '@Component/FormDateInput';
import H2 from '@Component/Headings/H2';
import H4 from '@Component/Headings/H4';
import Input from '@Component/Input';
import { Colors } from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import FormHandler from '@Component/FormHandler';
import { DATE_FORMATS } from '@Utility/DateUtils';
import SimpleModal from '@Component/SimpleModal/SimpleModal';
import H6 from '@Component/Headings/H6';

const tourneyList = [
  {
    id: 0,
    name: 'Tournament 01',
  },
  {
    id: 1,
    name: 'Tournament 02',
  },
  {
    id: 2,
    name: 'Tournament 03',
  },
];

interface ICustomModal {
  title?: string;
  desc?: string;
  changeDeleteModalVisible: Function;
  setIsDeleteAccountVisible: Function;
  isDeleteAccountVisible: boolean;
  isShowDesc?: boolean;
  isNetConnection?: boolean;
  primaryBtnTxt?: string;
}

const TeamSelectionModal = ({
  changeDeleteModalVisible,
  setIsDeleteAccountVisible,
  isDeleteAccountVisible,
  title = 'title',
  desc = 'desc',
  isShowDesc = true,
  isNetConnection = true,
  primaryBtnTxt = 'yes',
}: ICustomModal) => {
  const refForm = React.useRef();

  const [isTourneyModalVisible, setIsTourneyModalVisible] = useState(false);
  const [selectedGender, setSelectedGender] = useState('');

  const toggleGenderModal = () => {
    setIsTourneyModalVisible(!isTourneyModalVisible);
  };

  const handleTourneySelection = (tourney) => {
    setSelectedGender(tourney);
    setIsTourneyModalVisible(false);
  };



  const handleBackDrop = (bool: boolean) => {
    setIsDeleteAccountVisible(bool);
  };
  const handleTourneyDrop = (bool: boolean) => {
    setIsTourneyModalVisible(bool);
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
        <H4 text="Select Game" style={{ ...Fonts.Medium(Fonts.Size.medium, Colors.WHITE), alignSelf: 'center' }} />
        <FormHandler ref={refForm} validateOnChange>
          {SCHEMAS => {
            return (
              <>
                <FormDataInput
                  {...SCHEMAS.dob('dob')}
                  mode="date"
                  minimumDate={new Date()}
                  placeholder={"Select Date"}
                  label="Select Date"

                />
                <H6 text="Select Tourney" style={{ ...Fonts.Medium(Fonts.Size.xSmall, Colors.DARK_BLUE) }} />
                <TouchableOpacity onPress={toggleGenderModal}>
                  <Input  rightIcon={<FaqsIcon/>}  placeholder='Tournament 00' placeholderTextColor={Colors.WHITE} value={selectedGender} isDisabled={true} style={{ backgroundColor: 'transparent', borderColor: Colors.DARK_BLUE, borderWidth: 1, borderRadius: 10, ...Fonts.Medium(Fonts.Size.xSmall, Colors.WHITE), paddingHorizontal: Metrics.scale(15), marginVertical: Metrics.verticalScale(10), }} />
                </TouchableOpacity>

              </>
            );
          }}
        </FormHandler>
      </View>
      <ReactNativeModal isVisible={isTourneyModalVisible} animationIn={'fadeIn'}
        animationOut={'fadeOut'}
        backdropOpacity={0.7}
        onBackdropPress={!isNetConnection ? null : () => handleTourneyDrop(false)}
        backdropTransitionOutTiming={0}>
        <View style={styles.modal}>
          <Text style={{ ...Fonts.Medium(Fonts.Size.medium, Colors.DARK_BLUE),alignSelf:'center',marginBottom:Metrics.baseMargin}}>Select Tourney</Text>
          {tourneyList.map((item) => (
            <TouchableOpacity
              key={item.id}
              
              onPress={() => handleTourneySelection(item.name)}>
                
              <Text style={{ ...Fonts.Medium(Fonts.Size.small, Colors.WHITE),marginVertical:Metrics.smallMargin}}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ReactNativeModal>
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
    backgroundColor: Colors.FAMILY_BACKGROUND,
    marginHorizontal: Metrics.scale(10),
    borderRadius: Metrics.scale(15),
    justifyContent: 'center',
    // alignItems:'center'
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
    borderRadius: Metrics.scale(10),
    borderWidth: Metrics.scale(1),
    borderColor: Colors.GREY_BORDER,
    justifyContent: 'center',
    backgroundColor: Colors.ICE_BLUE
  },
  title: {
    ...Fonts.SemiBold(Fonts.Size.medium, Colors.WHITE),
    marginBottom: Metrics.verticalScale(15),
    textAlign: 'center',
  },
  confirmText: {
    textAlign: 'center',
    marginBottom: Metrics.verticalScale(20),
    ...Fonts.SemiBold(Fonts.Size.normal, Colors.WHITE),
  },
});

export default TeamSelectionModal;
