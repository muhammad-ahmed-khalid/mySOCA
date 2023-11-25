import {getRedeem, getTier} from '@Api/App';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import {useQuery} from '@tanstack/react-query';

export default function useRewardContainer(PlayerID) {
  const {data: getRedeemData} = useQuery(
    [STORAGE_KEYS.GET_REDEEM],
    () => getRedeem({playerId: PlayerID}),
    {
      cacheTime: 0,
      staleTime: 0,
    },
  );

  return {
    getRedeemData,
  };
}
