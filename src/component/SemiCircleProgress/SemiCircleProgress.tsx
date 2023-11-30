import H5 from '@Component/Headings/H5';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Svg, Circle} from 'react-native-svg';

const SemiCircleProgress = ({progress, strokeWidth, radius}) => {
  const diameter = radius * 2;
  const circumference = Math.PI * diameter;
  const progressValue = (progress / 12) * circumference;
  return (
    <View style={{alignItems: 'center'}}>
      <Svg
        width={diameter}
        height={radius}
        fill={'transparent'}
        viewBox={`0 0 ${diameter} ${radius}`}>
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke="#35363A" // Background color
          strokeWidth={strokeWidth}
        />
        <Circle
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          stroke="white" // Progress color
          strokeWidth={strokeWidth}
          strokeDasharray={`${progressValue}, ${circumference}`}
        />
      </Svg>
      <Text
        style={{
          textAlign: 'center',
          position: 'absolute',
          top: 45,
          bottom: 0,
          left: 0,
          right: 0,
          fontSize: 50,
          color: 'white',
        }}>{`${progress}`}</Text>
      <H5
        text="Months this year"
        style={{color: 'white', marginTop: Metrics.verticalScale(15)}}
      />
    </View>
  );
};

export default SemiCircleProgress;

const styles = StyleSheet.create({});
