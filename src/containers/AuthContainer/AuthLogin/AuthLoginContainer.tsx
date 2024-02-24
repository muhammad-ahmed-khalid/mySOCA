import {login} from '@Api/Auth';
import {useMutation} from '@tanstack/react-query';
import React, {useCallback, useContext} from 'react';
import {AuthLoginResponse} from './types';
import loginContext from '@Context/loginContext';
import {LoginContext} from '@Context/loginContext/types';
import {navigate} from '@Service/navigationService';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import {setItem} from '@Service/storageService';

export default function useAuthLoginContainer() {
  const refForm = React.useRef();
  const {setUserAuthentication, setIsAuth} = useContext(
    loginContext,
  ) as LoginContext;
  const {mutate: loginMutation, isLoading: loginUserLoading} = useMutation(login, {
    onSuccess: (data: AuthLoginResponse, payload) => {
      //todo set context is auth true
      setItem(STORAGE_KEYS.PARENTID, data?.parentId);
      setUserAuthentication(data);
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
