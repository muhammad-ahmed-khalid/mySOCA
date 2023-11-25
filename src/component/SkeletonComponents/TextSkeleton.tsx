import {Colors} from '@Theme/index';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const TextSkeleton = () => {
  return (
    <>
          <View style={styles.wrapper}>
            <SkeletonPlaceholder enabled={true} style={styles.skeletonWrapper}>
                <View style={styles.articelTextFull} />
            </SkeletonPlaceholder>
          </View>
    </>
  );
};

export default TextSkeleton;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.Colors.WHITE,
    borderRadius: 15,
  },
  skeletonWrapper: {width: '100%'},
  articelTextFull: {width: '100%', height: 18,
   marginTop: 5
},
});
