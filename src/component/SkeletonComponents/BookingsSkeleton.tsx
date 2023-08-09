import {DUMMY_LIST_FOR_SKELETON} from '@Constants/dummyData';
import {Colors} from '@Theme/index';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import Metrics from '../../utility/Metrics';

const BookingsSkeleton = () => {
  return (
    <>
      {DUMMY_LIST_FOR_SKELETON.map((item, index) => {
        return (
          <View key={index} style={styles.wrapper}>
            <SkeletonPlaceholder enabled={true} style={styles.skeletonWrapper}>
              <View style={styles.articelInnerWrapper}>
                <View style={styles.articelDateTimeWrapper}>
                  <View style={styles.articelCatName} />
                </View>
                <View style={styles.addressInnerWrapper}>
                  <View style={{width: '90%'}}>
                    <View style={styles.articelTextFull} />
                    <View style={styles.articelTextFull} />
                  </View>
                  <View style={styles.icon} />
                </View>
              </View>
            </SkeletonPlaceholder>
          </View>
        );
      })}
    </>
  );
};

export default BookingsSkeleton;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Metrics.verticalScale(15),
    backgroundColor: Colors.Colors.WHITE,
    borderRadius: 15,
  },
  skeletonWrapper: {width: '100%', marginBottom: 15},
  atricelImage: {
    height: 185,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: '100%',
  },
  articelInnerWrapper: {
    paddingHorizontal: Metrics.scale(15),
    marginBottom: Metrics.verticalScale(15),
  },
  articelDateTimeWrapper: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 0,
  },
  articelCatName: {width: '75%', height: 15, marginRight: 25},
  articelTime: {width: '25%', height: 15},
  articelHeading: {width: '100%', height: 25},
  articelTextFull: {width: '100%', height: 15, marginTop: 10},
  articelTextHalf: {width: '50%', height: 15, marginTop: 10},
  icon: {
    width: Metrics.scale(30),
    height: Metrics.scale(30),
    borderRadius: Metrics.scale(30),
  },
  addressInnerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
