import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import useStartupContainer from './containers/startupContainer/StartupContainer';
import AppStack from './navigators/AppStack';
import AuthStack from './navigators/AuthStack';
import { navigationRef } from './services/navigationService';

export default function AuthNavigator() {
  const { isAuth } = useStartupContainer();

  return (
    <NavigationContainer ref={navigationRef}>
      {isAuth ? (
        <AppStack />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
}
