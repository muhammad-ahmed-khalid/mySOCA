import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {Image, Platform, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  Card1,
  Card2,
  HomeIconBot,
  MalePng,
  RewardIcon,
  TiersIcon,
  account,
} from '../assets/logo';

import NavigationRoutes from './NavigationRoutes';
import Profile from '@Container/AppContainer/Profile/Profile';
import HomeScreen from '@Container/AppContainer/Home/HomeScreen';
import {Colors} from '@Theme/Colors';
import TierScreen from '@Container/AppContainer/Tiers/TierScreen';
import RewardScreen from '@Container/AppContainer/Rewards/RewardScreen';
import AccountScreen from '@Container/AppContainer/Accounts/AccountScreen';
const Tab = createBottomTabNavigator();

const RenderTabBarIcon = ({source, color, focused}) => {
  return (
    <View style={styles.tabBarIconWrapper}>
      {focused && (
        <View
          style={[
            styles.tabBarShape,
            {top: Platform.OS === 'android' ? -12 : -19},
          ]}
        />
      )}

      <Image
        source={source}
        style={{
          width: '100%',
          resizeMode: 'contain',
          flex: 1,
          tintColor: color,
        }}
      />
    </View>
  );
};

const tabRoutes = [
  {
    name: NavigationRoutes.APP_STACK.HOME,
    component: HomeScreen,
    options: {
      tabBarIcon: ({color, focused}) => (
        <RenderTabBarIcon
          source={HomeIconBot}
          color={color}
          focused={focused}
        />
      ),
      title: 'Home',
    },
  },
  {
    name: NavigationRoutes.APP_STACK.TIERS,
    component: TierScreen,
    options: {
      tabBarIcon: ({color, focused}) => (
        <RenderTabBarIcon source={TiersIcon} color={color} focused={focused} />
      ),
      title: 'Tiers',
    },
  },

  {
    name: NavigationRoutes.APP_STACK.REWARDS,
    component: RewardScreen,
    options: {
      tabBarIcon: ({color, focused}) => (
        <RenderTabBarIcon source={RewardIcon} color={color} focused={focused} />
      ),
      title: 'Rewards',
    },
  },
  {
    name: NavigationRoutes.APP_STACK.ACCOUNTS,
    component: AccountScreen,
    options: {
      tabBarIcon: ({color, focused}) => (
        <RenderTabBarIcon source={MalePng} color={color} focused={focused} />
      ),
      title: 'Account',
    },
  },
];

const BottomTabs = props => {


  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: Colors.DARKISH,
          alignSelf: 'center',
          marginBottom: 10,
          borderRadius: 30,
          shadowColor: Colors.BLACK,
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,
          elevation: 8,
          width: '90%',
          height:
            Platform.OS === 'android'
              ? 65
              : 85 - insets.bottom + (insets.bottom ? +40 : 0),
          paddingTop:
            insets.bottom !== 0 ? (Platform.OS === 'android' ? 0 : 20) : 0,
        },
        tabBarLabelStyle: {
          includeFontPadding: false,
          fontFamily: 'Montserrat-Medium',
          fontSize: 10,
          marginTop: 10,
          position: 'relative',
          top: Platform.OS === 'android' ? -15 : 0,
        },
        tabBarItemStyle: {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 0,
        },
        tabBarAllowFontScaling: false,
        tabBarActiveTintColor: Colors.WHITE,
        tabBarInactiveTintColor: '#ADB0C2',
      }}
      sceneContainerStyle={{
        backgroundColor: '#F7F7F7',
      }}
      initialRouteName={NavigationRoutes.APP_STACK.HOME}>
      {tabRoutes.map(({name, component, options}) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={options}
          initialParams={{item: props?.route?.params?.item}}
        />
      ))}
    </Tab.Navigator>
  );
};
export default BottomTabs;

const styles = StyleSheet.create({
  tabBarIconWrapper: {
    width: 30,
    height: 20,
  },
  tabBarShape: {
    width: '100%',
    height: 5,
    position: 'absolute',
    // backgroundColor: '#000',
    top: -19,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
});
