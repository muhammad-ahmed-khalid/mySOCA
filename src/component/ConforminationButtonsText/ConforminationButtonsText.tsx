import ButtonView from '@Component/ButtonView';
import CustomSpinner from '@Component/CustomSpinner/CustomSpinner';
import H1 from '@Component/Headings/H1';
import H5 from '@Component/Headings/H5';
import Fonts from '@Theme/Fonts';
import { Colors } from '@Theme/index';
import Metrics from '@Utility/Metrics';
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

interface IConforminationButtonsText {
  label?: string;
  handleConformation?: Function;
  handleCancelation?: Function;
  confirmBtnText?: string;
  cancelBtntext?: string;
  isLoading?: boolean;
}

const ConforminationButtonsText = ({
  label,
  handleConformation,
  handleCancelation,
  confirmBtnText = 'yes',
  cancelBtntext = 'no',
  isLoading,
}: IConforminationButtonsText) => {
  return (
    <View style={styles.mainWrapper}>
      <H1 style={styles.mainLable} text={label} />
      <View style={styles.btnWrapper}>
        <ButtonView
          enableClick={!isLoading ? false : true}
          disabled={isLoading ? true : false}
          style={styles.handleConfirmbtn}
          onPress={handleConformation}>
          {isLoading ? (
            <CustomSpinner />
          ) : (
            <H5 text={confirmBtnText} style={styles.btnText} />
          )}
        </ButtonView>
        <ButtonView
          enableClick={!isLoading ? false : true}
          disabled={isLoading ? true : false}
          style={styles.handleCancelbtn}
          onPress={handleCancelation}>
          <H5 text={cancelBtntext} style={styles.btnText} />
        </ButtonView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: { flex: 1, paddingTop: 10 },
  mainLable: {
    ...Fonts.Bold(Fonts.Size.large, Colors.Colors.DARK_BLACK),
    textAlign: 'center',
    marginBottom: Metrics.scale(40),
  },
  btnWrapper: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  handleConfirmbtn: {
    backgroundColor: Colors.Colors.YELLOW,
    borderRadius: Metrics.scale(100),
    marginBottom: Metrics.scale(20),
    height: Metrics.scale(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
  handleCancelbtn: {
    backgroundColor: Colors.Colors.MEDIUM_GREY,
    padding: Metrics.scale(19),
    borderRadius: Metrics.scale(100),
  },
  btnText: {
    ...Fonts.SemiBold(Fonts.Size.medium, Colors.Colors.BLACK),
    textAlign: 'center',
  },
});

export default ConforminationButtonsText;
