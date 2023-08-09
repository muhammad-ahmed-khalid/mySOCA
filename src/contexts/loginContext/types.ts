import {ReactElement} from 'react';

export interface LoginContext {
  isAuth: boolean;
  authUser: any | null;
  setIsAuth: (v: boolean) => void;
  setUserAuthentication: (a: any) => void;
  handleLogoutUser: () => void;
  setCurrentUser: (a: any) => void;
}

export interface LoginProvider {
  children: ReactElement;
}
