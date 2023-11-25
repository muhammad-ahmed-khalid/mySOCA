import {login, signup} from '@Api/Auth';
import {useMutation} from '@tanstack/react-query';
import React, {useContext} from 'react';
import {AuthLoginResponse} from './types';
import loginContext from '@Context/loginContext';
import {LoginContext} from '@Context/loginContext/types';
import {pop} from '@Service/navigationService';

export default function useAuthSignupContainer() {
  const refForm = React.useRef();
  const {setUserAuthentication, setIsAuth} = useContext(
    loginContext,
  ) as LoginContext;
  const {mutate: signupMutation} = useMutation(signup, {
    onSuccess: data => {
      //todo set context is auth true
      pop();
      //   setUserAuthentication(data);
    },
  });

  const onSubmitForm = () => {
    const data = refForm.current?.onSubmitForm();
    console.log(data, 'this is the data');

    if (data != null) {
      signupMutation(data);
    }
  };

  return {
    refForm,
    onSubmitForm,
  };
}
