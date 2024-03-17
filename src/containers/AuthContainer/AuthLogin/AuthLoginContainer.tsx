import {getUserRoles, login} from '@Api/Auth';
import {useMutation, useQuery} from '@tanstack/react-query';
import React, {useCallback, useContext, useState} from 'react';
import {AuthLoginResponse} from './types';
import loginContext from '@Context/loginContext';
import {LoginContext} from '@Context/loginContext/types';
import {navigate} from '@Service/navigationService';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import {setItem} from '@Service/storageService';

export default function useAuthLoginContainer() {
  const refForm = React.useRef();
  const {setUserAuthentication, setIsAuth, setIsShowRoles} = useContext(
    loginContext,
  ) as LoginContext;

  const [parentID, setParentID] = useState("")

  const {data: selectionPlayerData} = useQuery(
    [STORAGE_KEYS.GET_ROLES],
    () => getUserRoles({parentID}),
    {
      enabled: parentID ? true : false,
      onSuccess: data => {
        console.log(data, 'data OF USER ROLES');
        if(data?.data?.length > 0){
          setItem(STORAGE_KEYS.ROLES_LIST, data?.data)
          const parentID = data?.data[0]?.id_parent_or_coach
          setItem(STORAGE_KEYS.PARENTID, parentID);
          setUserAuthentication(data?.data)
        }
        else{
          setUserAuthentication(true)
        }
      },
    },
  );


  const {mutate: loginMutation, isLoading: loginUserLoading} = useMutation(login, {
    onSuccess: (data: AuthLoginResponse, payload) => {
      setParentID(data?.parentId)
      setItem(STORAGE_KEYS.TOKEN, data?.token);
      setItem(STORAGE_KEYS.GET_PARENT_USER_DETAILS, data?.parentId);
    },
  });
  const handleOnForgotPassord = useCallback(() => {
    navigate(NavigationRoutes.AUTH_STACK.FORGET_PASSWORD);
  }, []);

  const onSubmitForm = () => {
    const data = refForm.current?.onSubmitForm();
    console.log(data, 'this is the data');

    if (data != null) {
      loginMutation(data);
    }
  };

  return {
    refForm,
    onSubmitForm,
    handleOnForgotPassord,
    loginUserLoading
  };
}
