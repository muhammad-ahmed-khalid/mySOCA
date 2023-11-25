import {getActivity, getRedeem, getTier} from '@Api/App';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import {useQuery} from '@tanstack/react-query';

export default function useActivityContainer(PlayerID) {
  const {data: getActivityData} = useQuery(
    [STORAGE_KEYS.GET_ACTIVITY],
    () => getActivity({playerId: PlayerID}),
    {
      cacheTime: 0,
      staleTime: 0,
    },
  );

  return {
    getActivityData,
  };
}
