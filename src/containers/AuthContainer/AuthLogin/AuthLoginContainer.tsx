import { login } from '@Api/Auth';
import { useMutation } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthLoginResponse } from './types';
import loginContext from '@Context/loginContext';
import { LoginContext } from '@Context/loginContext/types';

export default function useAuthLoginContainer() {
  const refForm = React.useRef();
  const { setUserAuthentication } = useContext(loginContext) as LoginContext;
  const { mutate: loginMutation } = useMutation(login, {
    onSuccess: (data: AuthLoginResponse, payload) => {
      //todo set context is auth true
      setUserAuthentication(data);
    },
  });

  const onSubmitForm = () => {
    const data = refForm.current?.onSubmitForm();
    if (data != null) {
      loginMutation(data);
    }
  };

  return {
    refForm,
    onSubmitForm,
  };
}
