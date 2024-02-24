import { Colors } from '@Theme/index';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import styles from './style';

const CustomSpinner = ({ color = Colors.Colors.INPUT_LABEL, spinnerStyle }: any) => {
  return (
    <ActivityIndicator
      color={color}
      style={[styles.spinnerStyle, spinnerStyle]}
    />
  );
};

export default CustomSpinner;