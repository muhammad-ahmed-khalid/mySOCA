import { FaqsIcon } from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import CustomSelectionModal from '@Component/CustomSelectionModal';
import FormDataInput from '@Component/FormDateInput';
import FormHandler from '@Component/FormHandler';
import H4 from '@Component/Headings/H4';
import H6 from '@Component/Headings/H6';
import Input from '@Component/Input';
import { Colors } from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import useTeamSelectionModalContainer from './TeamSelectionModalContainer';
import useCoachContainer from '@Container/AppContainer/CoachHome/CoachContainer';

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

  const { getAgeGroupList,getLocationList }  = useTeamSelectionModalContainer();
  const {getCoachAttendacneList} = useCoachContainer()
  const [isTourneyModalVisible, setIsTourneyModalVisible] = useState(false);
  const [isTeamModalVisible,setIsTeamModalVisible]=useState(false)
  const [selectedTourney, setSelectedTourney] = useState('');
  const [selectedTeam,setIsSelectedTeam]=useState('')

  const toggleTourneyModal = () => {
    setIsTourneyModalVisible(!isTourneyModalVisible);
  };

  const toggleTeamModal=()=>{
    setIsTeamModalVisible(!isTeamModalVisible)
  }

  const handleTourneySelection = (tourney) => {
    setSelectedTourney(tourney);
    setIsTourneyModalVisible(false);
  };

  const handleTeamSelection=(team)=>{
    setIsSelectedTeam(team)
    setIsTeamModalVisible(false)
  }

  const handleBackDrop = (bool: boolean) => {
    setIsDeleteAccountVisible(bool);
  };
  const handleTourneyDrop = (bool: boolean) => {
    setIsTourneyModalVisible(bool);
  };
  const handleTeamDrop=(bool: boolean)=>{
      setIsTeamModalVisible(bool)
  }

  const handlePressConfirmSelection = () => {
    const selectedDate = refForm?.current?.getInputRef('dob').getValue()
    // if(selectedDate && selectedTourney && selectedTeam){
      let payload = {
        dob: selectedDate,
        tourney: selectedTourney,
        team: selectedTeam
      }
      console.log(payload,"payload")
      getCoachAttendacneList({coachId: 2})
      setIsDeleteAccountVisible(false);
    // }
  }


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
                <H6 text="Select Age Group" style={{ ...Fonts.Medium(Fonts.Size.xSmall, Colors.DARK_BLUE) }} />
                <TouchableOpacity onPress={toggleTourneyModal}>
                  <Input rightIcon={<FaqsIcon />}  placeholder={getAgeGroupList?.data[0]["Coaching Age Group"]} placeholderTextColor={Colors.WHITE} value={selectedTourney} isDisabled={true} style={{ backgroundColor: 'transparent', borderColor: Colors.DARK_BLUE, borderWidth: 1, borderRadius: 10, ...Fonts.Medium(Fonts.Size.xSmall, Colors.WHITE), paddingHorizontal: Metrics.scale(15), marginVertical: Metrics.verticalScale(10), }} />
                </TouchableOpacity>
                <H6 text="Select Location" style={{ ...Fonts.Medium(Fonts.Size.xSmall, Colors.DARK_BLUE) }} />
                <TouchableOpacity onPress={toggleTeamModal}>
                  <Input rightIcon={<FaqsIcon />} placeholder={getLocationList?.data[0]["Coaching Locations"]} placeholderTextColor={Colors.WHITE} value={selectedTeam} isDisabled={true} style={{ backgroundColor: 'transparent', borderColor: Colors.DARK_BLUE, borderWidth: 1, borderRadius: 10, ...Fonts.Medium(Fonts.Size.xSmall, Colors.WHITE), paddingHorizontal: Metrics.scale(15), marginVertical: Metrics.verticalScale(10), }} />
                </TouchableOpacity>
             
                <ButtonView onPress={handlePressConfirmSelection} style={{alignItems:"center",backgroundColor:Colors.DARK_BLUE, padding:10,marginTop:Metrics.doubleBaseMargin,borderRadius:Metrics.smallMargin}}>
                    <H4 text="Confirmaa Selection" style={{...Fonts.Bold(Fonts.Size.medium, Colors.DARK_BLACK),}}/>
                </ButtonView>
              </>
            );
          }}
        </FormHandler>
      </View>
      <CustomSelectionModal
        isModalVisible={isTourneyModalVisible}
        handleSelection={handleTourneySelection}
        title={"Select Age Group"}
        handleDropOffPress={handleTourneyDrop}
        modalData={getAgeGroupList?.data}
      />
         <CustomSelectionModal
        isModalVisible={isTeamModalVisible}
        handleSelection={handleTeamSelection}
        title={"Select Location"}
        handleDropOffPress={handleTeamDrop}
        modalData={getLocationList?.data}
      />
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
