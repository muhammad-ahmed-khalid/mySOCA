import AppHeader from '@Component/Header/AppHeader';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from '@Theme/Colors';
import {useTranslation} from 'react-i18next';
import NavigationRoutes from './NavigationRoutes';

const Stack = createNativeStackNavigator();

type AppStackProps = {
  initialRouteName: string;
};

export default function AppStack(props: AppStackProps) {
  const {initialRouteName} = props;
  const {t} = useTranslation(['pageTitles']);
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
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
        options={{title: t('HOME'), headerShown: false}}
        name={NavigationRoutes.APP_STACK.HOME}
        getComponent={() =>
          require('@Container/AppContainer/Home/HomeScreen').default
        }
      />
      <Stack.Screen
        options={{title: t('Profile')}}
        name={NavigationRoutes.APP_STACK.PROFILE}
        getComponent={() =>
          require('@Container/AppContainer/Profile/Profile').default
        }
      />
    </Stack.Navigator>
  );
}
