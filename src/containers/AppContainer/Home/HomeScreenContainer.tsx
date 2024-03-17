import {getFmailyPlayers, getPlayer, getUserDetails} from '@Api/App';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import loginContext from '@Context/loginContext';
import {LoginContext} from '@Context/loginContext/types';
import { getItem } from '@Service/storageService';
import {useQuery} from '@tanstack/react-query';
import {useContext} from 'react';

export default function useHomeScreenContainer(PlayerID) {
  const {setUserAuthentication} = useContext(loginContext) as LoginContext;
  const userData = getItem(STORAGE_KEYS.GET_PARENT_USER_DETAILS)

  // const {data: getAllUserDetails} = useQuery(
  //   [STORAGE_KEYS.GET_USER],
  //   getUserDetails,
  //   {
  //     onSuccess: data => {
  //       setUserAuthentication(data);
  //     },
  //   },
  // );

  // const {data: playerData} = useQuery([STORAGE_KEYS.GET_PLAYER], getPlayer);

  const {data: playerData, isLoading: playerLoading} = useQuery(
    [STORAGE_KEYS.GET_PLAYER],
    () => getPlayer({playerId: PlayerID}),
    {cacheTime: 0, staleTime: 0},
  );

  const {data: getFamilyplayerData, isLoading: getFamilyplayerDataLoading} = useQuery(
    [STORAGE_KEYS.GET_FAMILY_PLAYERS],
    () => getFmailyPlayers({playerId: userData}),
    {cacheTime: 0, staleTime: 0, enabled: userData ? true :false},
  );


  return {
    // getAllUserDetails,
    playerData,
    playerLoading,
    getFamilyplayerData,
    getFamilyplayerDataLoading
  };
}
