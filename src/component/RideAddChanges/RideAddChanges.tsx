import ButtonView from '@Component/ButtonView';
import CustomCheckBox from '@Component/CustomCheckBox/CustomCheckBox';
import CustomSpinner from '@Component/CustomSpinner/CustomSpinner';
import H1 from '@Component/Headings/H1';
import H5 from '@Component/Headings/H5';
import Input from '@Component/Input';
import Fonts from '@Theme/Fonts';
import {Colors} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import Utils from '@Utility/Utils';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Platform, ScrollView, StyleSheet, TextInput, View} from 'react-native';

interface IRideAddChanges {
  label?: string;
  handleConformation?: any;
  isLoading?: boolean;
}

const RideAddChanges = ({
  label,
  handleConformation,
  isLoading,
}: IRideAddChanges) => {
  const {t} = useTranslation(['common']);
  const [isToggleCheckBox, setToggleCheckBox] = React.useState(false);
  const [toolFees, setToolFees] = useState(0);
  const [addNote, setAddNote] = useState('');

  const handleSubmit = () => {
    if (toolFees?.length || isToggleCheckBox) {
      let payload = {
        fee: Number(toolFees),
        note: addNote,
        isAirportFee: isToggleCheckBox,
      };
      handleConformation(payload);
    }
  };

  return (
  
    <View>
      <H1 style={styles.mainLable} text={label} />
      <Input
        placeholder={'Note'}
        placeholderTextColor={Colors.Colors.DARK_PLACEHOLDER}
        onChangeText={e => setAddNote(e)}
        returnKeyType="next"
      />

      <Input
        placeholder={t('tollFeeAdd')}
        placeholderTextColor={Colors.Colors.DARK_PLACEHOLDER}
        onChangeText={e => setToolFees(e)}
        keyboardType="number-pad"
        returnKeyType="done"
      />
      <View style={styles.checkBoxWrapper}>
        <CustomCheckBox
          isToggleCheckBox={isToggleCheckBox}
          setToggleCheckBox={setToggleCheckBox}
        />
      </View>
      <ButtonView
        enableClick={
          (!isToggleCheckBox && Utils.conditionRendering(toolFees, '==', 0)) ||
          isLoading
        }
        disabled={
          (!isToggleCheckBox && Utils.conditionRendering(toolFees, '==', 0)) ||
          isLoading
        }
        style={styles.handleConfirmbtn}
        onPress={() => handleSubmit()}>
        {isLoading ? (
          <CustomSpinner />
        ) : (
          <H5 text={'addChanges'} style={styles.btnText} />
        )}
      </ButtonView>
    </View>
  );
};

export default RideAddChanges;

const styles = StyleSheet.create({
  mainWrapper: {flex: 1},
  mainLable: {
    ...Fonts.Bold(Fonts.Size.large, Colors.Colors.DARK_BLACK),
    textAlign: 'center',
    marginBottom: Metrics.scale(20),
    marginTop: Metrics.scale(10),
  },
  handleConfirmbtn: {
    backgroundColor: Colors.Colors.YELLOW,
    borderRadius: Metrics.scale(100),
    marginBottom: Metrics.scale(20),
    shadowColor: Colors.Colors.BLACK,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 4,
    height: Metrics.scale(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    ...Fonts.SemiBold(Fonts.Size.medium, Colors.Colors.DARK_BLACK),
    textAlign: 'center',
  },
  checkBoxWrapper: {
    marginTop: Metrics.scale(22),
    marginBottom: Metrics.scale(40),
  },
});
