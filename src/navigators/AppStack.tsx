import AppHeader from '@Component/Header/AppHeader';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '@Theme/Colors';
import NavigationRoutes from './NavigationRoutes';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName={NavigationRoutes.APP_STACK.BOTTOM_TABS}
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
        options={{ title: 'Bottom Tabs', headerShown: false }}
        name={NavigationRoutes.APP_STACK.BOTTOM_TABS}
        getComponent={() =>
          require('@Navigator/BottomStack').default
        }
      />
      <Stack.Screen
        options={{ title: 'HOME', headerShown: false }}
        name={NavigationRoutes.APP_STACK.HOME}
        getComponent={() =>
          require('@Container/AppContainer/Home/HomeScreen').default
        }
      />
      <Stack.Screen
        options={{ title: 'Profile' }}
        name={NavigationRoutes.APP_STACK.PROFILE}
        getComponent={() =>
          require('@Container/AppContainer/Profile/Profile').default
        }
      />
    </Stack.Navigator>
  );
}
