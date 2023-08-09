import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import useStartupContainer from './containers/startupContainer/StartupContainer';
import AppStack from './navigators/AppStack';
import AuthStack from './navigators/AuthStack';
import {navigationRef} from './services/navigationService';

export default function AuthNavigator() {
  const {initialRouteName, isAuth} = useStartupContainer();

  console.log('3333333333333', isAuth);
  return (
    <NavigationContainer ref={navigationRef}>
      {isAuth ? (
        <AppStack initialRouteName={initialRouteName} />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
}
