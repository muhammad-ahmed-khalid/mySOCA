import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {SpinnerLoaderProps} from './types';

export default function SpinnerLoader(props: SpinnerLoaderProps) {
  const {containerStyles, size = 'small', color = 'white'} = props;
  return (
    <View style={[styles.containerStyle, containerStyles]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
