import {DUMMY_LIST_FOR_SKELETON} from '@Constants/dummyData';
import {Colors} from '@Theme/index';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Metrics from '../../utility/Metrics';

const AddressesIconSkeleton = () => {
  return (
    <>
      {DUMMY_LIST_FOR_SKELETON.map((item, index) => {
        return (
          <View key={index} style={styles.wrapper}>
            <SkeletonPlaceholder enabled={true} style={styles.skeletonWrapper}>
              <View style={styles.innerWrapper}>
                <View style={styles.image} />
                <View style={styles.title} />
              </View>
            </SkeletonPlaceholder>
          </View>
        );
      })}
    </>
  );
};

export default AddressesIconSkeleton;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Metrics.verticalScale(0),
    backgroundColor: Colors.Colors.WHITE,
    borderRadius: 15,
  },
  skeletonWrapper: {width: '100%', marginBottom: 0},
  innerWrapper: {
    width: Metrics.scale(80),
  },
  image: {
    width: Metrics.scale(60),
    height: Metrics.scale(60),
    borderRadius: Metrics.scale(60),
  },
  title: {
    marginTop: Metrics.scale(5),
    width: '90%',
    height: Metrics.scale(20),
  },
});
