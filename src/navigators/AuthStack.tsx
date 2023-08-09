import AppHeader from '@Component/Header/AppHeader';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from '@Theme/Colors';
import * as React from 'react';
import {useTranslation} from 'react-i18next';
import NavigationRoutes from './NavigationRoutes';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  const {t} = useTranslation(['pageTitles']);
  return (
    <Stack.Navigator
      initialRouteName={NavigationRoutes.AUTH_STACK.LOGIN}
      screenOptions={{
        header: props => {
          let state = props.navigation.getState();
          let routeIndex = state?.routes[state?.index]?.state?.index;
          let routeName = state.routes[state.index].name;
          return (
            <AppHeader
              {...props}
              routeName={routeName}
              routeIndex={routeIndex}
            />
          );
        },
        contentStyle: {
          backgroundColor: Colors.WHITE_FOUR,
        },
      }}>
      <Stack.Screen
        options={{title: 'Auth Login', headerShown: false}}
        name={NavigationRoutes.AUTH_STACK.LOGIN}
        getComponent={() =>
          require('@Container/AuthContainer/AuthLogin/AuthLogin').default
        }
      />
    </Stack.Navigator>
  );
}
