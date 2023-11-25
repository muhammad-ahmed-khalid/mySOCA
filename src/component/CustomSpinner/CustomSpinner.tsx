import { Colors } from '@Theme/index';
import Metrics from '@Utility/Metrics';
import React from 'react';
import { ActivityIndicator, Modal, StyleSheet, View } from 'react-native';

const CustomSpinner = ({ color = Colors.Colors.DARK_BLACK, spinnerStyle }) => {
  return (
    <ActivityIndicator
      color={color}
      style={[styles.spinnerStyle, spinnerStyle]}
    />
  );
};

export default CustomSpinner;

const styles = StyleSheet.create({
  spinnerStyle: {
    paddingVertical: Metrics.scale(2),
    height: Metrics.scale(60),
  },
});
