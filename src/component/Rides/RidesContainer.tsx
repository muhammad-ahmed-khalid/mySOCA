import {getAllRides} from '@Api/App';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import {useInfiniteQuery} from '@tanstack/react-query';
import {paginationDataWithReturn} from '@Utility/common';

export default function useRidesContainer() {
  const {data: getAllRideHistory, ...allRideHistoryMeta} = useInfiniteQuery(
    [STORAGE_KEYS.GET_RIDE_HISTORY],
    injectedProps =>
      getAllRides(injectedProps, {
        //status 2 for Completed Ride
        BookingStatus: 2,
      }),
    {
      select(data) {
        return paginationDataWithReturn(data);
      },
      getNextPageParam: (lastPage: any) => {
        if (lastPage?.meta?.hasNextPage) {
          return lastPage?.meta?.currentPage;
        }
        return lastPage?.meta?.hasNextPage;
      },
    },
  );

  const {data: getAllRideScheduled, ...allRideScheduledMeta} = useInfiniteQuery(
    [STORAGE_KEYS.GET_ALL_RIDE_SCHEDULED],
    injectedProps =>
      getAllRides(injectedProps, {
        //status 1 for Scheduled  Ride
        BookingStatus: 1,
      }),
    {
      select(data) {
        return paginationDataWithReturn(data);
      },
      getNextPageParam: (lastPage: any) => {
        if (lastPage?.meta?.hasNextPage) {
          return lastPage?.meta?.currentPage;
        }
        return lastPage?.meta?.hasNextPage;
      },
    },
  );

  return {
    getAllRideHistory,
    allRideHistoryMeta,
    getAllRideScheduled,
    allRideScheduledMeta,
  };
}
