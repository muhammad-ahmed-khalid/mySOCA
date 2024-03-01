import ButtonView from '@Component/ButtonView';
import H6 from '@Component/Headings/H6';
import {Colors, Fonts} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {StyleSheet, View} from 'react-native';
interface ICustomCheckBox {
  isToggleCheckBox?: any;
  setToggleCheckBox?: any;
}

const CustomCheckBox = ({
  isToggleCheckBox,
  setToggleCheckBox,
}: ICustomCheckBox) => {
  return (
    <ButtonView
      style={styles.checkboxWrapper}
      onPress={() => setToggleCheckBox(!isToggleCheckBox)}>
      <View
        onPress={() => setToggleCheckBox(!isToggleCheckBox)}
        style={styles.innerWrapper}>
        {isToggleCheckBox && (
          <View
            style={[
              styles.activeCheckbox,
              {
                backgroundColor: isToggleCheckBox
                  ? Colors.Colors.YELLOW
                  : Colors.Colors.WHITE,
              },
            ]}
          />
        )}
      </View>

      <H6 text="addAirportFee$" style={styles.textStyle} />
    </ButtonView>
  );
};

export default CustomCheckBox;

const styles = StyleSheet.create({
  checkboxWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 170,
  },
  innerWrapper: {
    width: Metrics.scale(30),
    height: Metrics.scale(30),
    borderRadius: Metrics.scale(7),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.Colors.DARK_BLACK,
  },
  textStyle: {
    ...Fonts.Bold(Fonts.Size.xSmall, Colors.Colors.DARK_BLACK),
    marginLeft: Metrics.scale(10),
    marginBottom: 3,
  },
  activeCheckbox: {
    width: Metrics.scale(22),
    height: Metrics.scale(22),
    borderRadius: Metrics.scale(7),
  },
});
