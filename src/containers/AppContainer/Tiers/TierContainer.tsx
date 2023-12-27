import {getTier} from '@Api/App';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import {useQuery} from '@tanstack/react-query';

export default function useTierContainer() {
  const {data: getTierData, isLoading} = useQuery(
    [STORAGE_KEYS.GET_TIER],
    getTier,
    {
      cacheTime: 0,
      staleTime: 0,
    },
  );

  return {
    getTierData,
    isLoading,
  };
}
