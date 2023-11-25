import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '@Theme/index';

const CustomFlatListSeperator = () => {
  return <View style={styles.bottomLine} />;
};

export default CustomFlatListSeperator;

const styles = StyleSheet.create({
  bottomLine: {
    width: '100%',
    height: 1,
    position: 'absolute',
    backgroundColor: Colors.Colors.GREY,
    bottom: 0,
    marginRight: 'auto',
  },
});
