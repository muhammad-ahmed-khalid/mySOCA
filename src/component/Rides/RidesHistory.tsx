import FlatListHandler from '@Component/FlatlistHandler';
import BookingsSkeleton from '@Component/SkeletonComponents/BookingsSkeleton';
import { Colors } from '@Theme/index';
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import useRidesContainer from './RidesContainer';
import RideHistoryComponent from '@Component/RideHistory/RideHistory';
import FlashListHandler from '@Component/FlashListHandler';
import CustomLottie from '@Component/EmptyCustomLottie/CustomLottie';

const RidesHistory = () => {
  const { getAllRideHistory, allRideHistoryMeta } = useRidesContainer();
  const renderItem = ({ item, index }: any) => {
    return <RideHistoryComponent key={index} item={item || {}} />;
  };

  return (
    <View style={styles.root}>
      <FlashListHandler
        data={getAllRideHistory}
        renderItem={renderItem}
        meta={allRideHistoryMeta}
        listEmptyText={'No Ride History Found'}
        skeletenComponent={<BookingsSkeleton />}
        ItemSeparatorComponent={() => {
          return <View style={styles.bottomLine} />;
        }}
        emptyCustomComponent={<CustomLottie text="No Ride History Found" />}
      />
    </View>
  );
};
export default RidesHistory;
const styles = StyleSheet.create({
  root: {
    borderColor: Colors.Colors.GREY,
    backgroundColor: Colors.Colors.WHITE_FOUR,
    flex: 1,
  },
  bottomLine: {
    width: '100%',
    height: 1,
    position: 'absolute',
    backgroundColor: Colors.Colors.GREY,
    bottom: 0,
    marginRight: 'auto',
  },
});
