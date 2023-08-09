import {CurrentLocationIcon} from '@Asset/logo';
import ButtonView from '@Component/ButtonView';
import {Colors} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {StyleSheet} from 'react-native';

interface ICurrentLocation {
  handlePress?: Function;
  Position?: number;
}

const CurrentLocation = ({handlePress, Position}: ICurrentLocation) => {
  return (
    <ButtonView
      style={[styles.wrapper, {bottom: Position}]}
      onPress={handlePress}>
      <CurrentLocationIcon />
    </ButtonView>
  );
};

export default CurrentLocation;

const styles = StyleSheet.create({
  wrapper: {
    width: Metrics.scale(50),
    height: Metrics.scale(50),
    backgroundColor: Colors.Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Metrics.scale(50),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.19,
    shadowRadius: 3.65,
    elevation: 7,
    position: 'absolute',
    top: Metrics.verticalScale(-80),
    right: Metrics.scale(20),
    zIndex: 999,
  },
});
