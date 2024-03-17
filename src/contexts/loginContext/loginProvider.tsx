import React, {useState} from 'react';
import Utils from '@Utility/Utils';
import LoginContext from '.';
import {getItem, removeItem, setItem} from '../../services/storageService';
import {
  LoginContext as LoginContextType,
  LoginProvider as LoginProviderType,
} from './types';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import {queryClient} from '@Api/Client';

export default function LoginProvider(props: LoginProviderType) {
  const {children} = props;
  const [isAuth, setIsAuth] = useState(false);
  const [authUser, setAuthUser] = useState<any | null>(null);

  React.useLayoutEffect(() => {
    const data = getItem(STORAGE_KEYS.GET_USER);
    const token = getItem(STORAGE_KEYS.TOKEN);
    let finalData = {
      ...data,
      token,
    };
    if (data) {
      setUserAuthentication(finalData);
    }
  }, []);

  React.useEffect(() => {
    Utils.setLogoutAction(handleLogoutUser);
  }, []);

  const setUserAuthentication = (data: any) => {
    const {token} = data || {};

    Boolean(data) && setItem(STORAGE_KEYS.GET_USER, data || {});
    Boolean(token) && setItem(STORAGE_KEYS.TOKEN, token || '');
    setAuthUser(data);
    setIsAuth(true);
  };

  const handleLogoutUser = () => {
    setIsAuth(false);
    removeItem(STORAGE_KEYS.TOKEN);
    removeItem(STORAGE_KEYS.GET_USER);
    removeItem(STORAGE_KEYS.ROLES_LIST);
    queryClient.removeQueries();
  };

  const providerValues: LoginContextType = {
    isAuth,
    authUser,
    setIsAuth,
    setUserAuthentication,
    handleLogoutUser,
  };

  return (
    <LoginContext.Provider value={providerValues}>
      {children}
    </LoginContext.Provider>
  );
}
