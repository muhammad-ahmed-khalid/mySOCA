import AppHeader from '@Component/Header/AppHeader';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from '@Theme/Colors';
import NavigationRoutes from './NavigationRoutes';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName={NavigationRoutes.APP_STACK.PLAYER_SELECTION}
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
        options={{title: 'Bottom Tabs', headerShown: false}}
        name={NavigationRoutes.APP_STACK.BOTTOM_TABS}
        getComponent={() => require('@Navigator/BottomStack').default}
      />
      <Stack.Screen
        options={{title: 'HOME', headerShown: false}}
        name={NavigationRoutes.APP_STACK.HOME}
        getComponent={() =>
          require('@Container/AppContainer/Home/HomeScreen').default
        }
      />
      <Stack.Screen
        options={{title: 'Rewards'}}
        name={NavigationRoutes.APP_STACK.REWARDS}
        getComponent={() =>
          require('@Container/AppContainer/Rewards/RewardScreen').default
        }
      />
      <Stack.Screen
        options={{title: 'Tiers'}}
        name={NavigationRoutes.APP_STACK.TIERS}
        getComponent={() =>
          require('@Container/AppContainer/Tiers/TierScreen').default
        }
      />
      <Stack.Screen
        options={{title: 'Player Selection', headerShown: false}}
        name={NavigationRoutes.APP_STACK.PLAYER_SELECTION}
        getComponent={() =>
          require('@Container/AppContainer/PlayerSelection/PlayerSelection')
            .default
        }
      />
      <Stack.Screen
        options={{title: 'Accounts'}}
        name={NavigationRoutes.APP_STACK.ACCOUNTS}
        getComponent={() =>
          require('@Container/AppContainer/Accounts/AccountScreen').default
        }
      />
      <Stack.Screen
        options={{title: 'Activities', headerShown: false}}
        name={NavigationRoutes.APP_STACK.ACTIVITY}
        getComponent={() =>
          require('@Container/AppContainer/Activity/ActivityScreen').default
        }
      />
      <Stack.Screen
        options={{title: 'Performance', headerShown: false}}
        name={NavigationRoutes.APP_STACK.PERFORMANCE}
        getComponent={() =>
          require('@Container/AppContainer/Performance/Performance').default
        }
      />
         <Stack.Screen
        options={{title: 'Profile Setting', headerShown: false}}
        name={NavigationRoutes.APP_STACK.PROFILE_SETTING}
        getComponent={() =>
          require('@Container/AppContainer/ProfileSetting/ProfileSetting').default
        }
      />
            <Stack.Screen
        options={{title: 'About', headerShown: false}}
        name={NavigationRoutes.APP_STACK.ABOUT}
        getComponent={() =>
          require('@Container/AppContainer/About/About').default
        }
      />
      <Stack.Screen
        options={{title: 'Payment', headerShown: false}}
        name={NavigationRoutes.APP_STACK.PAYMENT}
        getComponent={() =>
          require('@Container/AppContainer/Payment/PaymentScreen').default
        }
      />
    </Stack.Navigator>
  );
}
