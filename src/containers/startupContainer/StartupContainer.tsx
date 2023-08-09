import * as React from 'react';

import {useQuery} from '@tanstack/react-query';
import {getUser} from '../../APIServices/Auth';
import STORAGE from '../../constants/storage';
import loginContext from '../../contexts/loginContext';
import {LoginContext} from '../../contexts/loginContext/types';
import NavigationRoutes from '../../navigators/NavigationRoutes';

export default function useStartupContainer() {
  const {isAuth} = React.useContext(loginContext) as LoginContext;
  const {
    data: currentUser,
    refetch,
    isSuccess,
    isLoading,
  } = useQuery([STORAGE.GET_USER], getUser, {
    select: userData => ({status: userData.status}),
    enabled: false,
  });

  React.useEffect(() => {
    if (isSuccess && !isLoading) {
      if (currentUser && !isAuth) {
        refetch();
      }
    }
  }, [currentUser]);

  const getLandingPageFormStatus = React.useCallback((status: number) => {
    switch (status) {
      default:
        return NavigationRoutes.APP_STACK.HOME;
    }
  }, []);

  return {
    isAuth,
    initialRouteName: getLandingPageFormStatus(currentUser?.status),
  };
}
