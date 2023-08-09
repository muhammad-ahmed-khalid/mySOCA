import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import {Colors} from '../../themes';

interface IToggle {
  toggleStyle?: {};
  value: boolean;
  changeSetValue: Function;
}

const ToggleButton = ({value, changeSetValue, toggleStyle}: IToggle) => {
  return (
    <View style={[toggleStyle]}>
      <ToggleSwitch
        isOn={value}
        thumbOnStyle={styles.thumbOnStyle}
        thumbOffStyle={styles.thumbOffStyle}
        onColor={Colors.Colors.TOGGLE_COLOR}
        offColor={Colors.Colors.GREY}
        labelStyle={{color: Colors.Colors.BLACK}}
        onToggle={changeSetValue}
        trackOnStyle={styles.trackOnStyle}
        trackOffStyle={styles.trackOffStyle}
      />
    </View>
  );
};

export default memo(ToggleButton);

const styles = StyleSheet.create({
  thumbOnStyle: {
    backgroundColor: '#47A7DD',
    width: 19,
    height: 19,
    marginHorizontal: -2,
  },
  thumbOffStyle: {
    backgroundColor: '#707070',
    marginLeft: -5,
    width: 19,
    height: 19,
  },
  trackOnStyle: {paddingVertical: 6, maxWidth: 30},
  trackOffStyle: {paddingVertical: 6, maxWidth: 30},
});
