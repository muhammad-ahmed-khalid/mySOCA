import {deleteUser, getPlayerSelection} from '@Api/Auth';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import loginContext from '@Context/loginContext';
import {LoginContext} from '@Context/loginContext/types';
import {reset} from '@Service/navigationService';
import {useMutation, useQuery} from '@tanstack/react-query';
import React, {useContext} from 'react';

export default function usePlayerSelectionContainer(parentId) {
  const refForm = React.useRef();
  const {setUserAuthentication, handleLogoutUser} = useContext(
    loginContext,
  ) as LoginContext;

  const {data: selectionPlayerData, isLoading} = useQuery(
    [STORAGE_KEYS.GET_ALL_PLAYERS_DATA],
    () => getPlayerSelection({parentId}),
    {
      onSuccess: data => {
        setUserAuthentication(data);
      },
    },
  );

  const {mutate: deleteAccount} = useMutation(deleteUser, {
    onSuccess: data => {
      handleLogoutUser();
    },
    onError: (e: object) => {
      console.log(e, 'error');
    },
  });

  return {
    refForm,
    selectionPlayerData,
    isLoading,
    deleteAccount,
  };
}
