import {getPlayerSelection, login} from '@Api/Auth';
import {useMutation, useQuery} from '@tanstack/react-query';
import React, {useContext} from 'react';
import {AuthLoginResponse} from './types';
import loginContext from '@Context/loginContext';
import {LoginContext} from '@Context/loginContext/types';
import {navigate} from '@Service/navigationService';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import {getPlayer} from '@Api/App';

export default function useAuthPlayerSelectionContainer(parentId) {
  const refForm = React.useRef();
  const {setUserAuthentication, setIsAuth, authUser} = useContext(
    loginContext,
  ) as LoginContext;

  //   const {mutate: loginMutation} = useMutation(getPlayerSelection, {
  //     onSuccess: (data: AuthLoginResponse, payload) => {
  //       //todo set context is auth true
  //       setUserAuthentication(data);
  //       //   navigate(NavigationRoutes.AUTH_STACK.PLAYER_SELECTION, {data});
  //     },
  //   });

  const {data: selectionPlayerData} = useQuery(
    [STORAGE_KEYS.GET_ALL_PLAYERS_DATA],
    () => getPlayerSelection({parentId}),
    {
      onSuccess: data => {
        // setUserAuthentication(data)
      },
    },
  );

  return {
    refForm,
    selectionPlayerData,
  };
}
