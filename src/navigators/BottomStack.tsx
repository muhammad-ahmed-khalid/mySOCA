import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image, Platform, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Card1, Card2 } from '../assets/logo';

import NavigationRoutes from './NavigationRoutes';
import Profile from '@Container/AppContainer/Profile/Profile';
import HomeScreen from '@Container/AppContainer/Home/HomeScreen';
const Tab = createBottomTabNavigator();

const RenderTabBarIcon = ({ source, color, focused }) => {
  return (
    <View style={styles.tabBarIconWrapper}>
      {focused && (
        <View
          style={[
            styles.tabBarShape,
            { top: Platform.OS === 'android' ? -12 : -19 },
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
      tabBarIcon: ({ color, focused }) => (
        <RenderTabBarIcon source={Card1} color={color} focused={focused} />
      ),
      title: 'Home',
    },
  },


  {
    name: NavigationRoutes.APP_STACK.PROFILE,
    component: Profile,
    options: {
      tabBarIcon: ({ color, focused }) => (
        <RenderTabBarIcon source={Card2} color={color} focused={focused} />
      ),
      title: 'Settings',
    },
  }

];

const BottomTabs = props => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: '#fff',
          elevation: 15,
          width: '100%',
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
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#ADADAD',
      }}
      sceneContainerStyle={{
        backgroundColor: '#F7F7F7',
      }}
      initialRouteName={NavigationRoutes.APP_STACK.HOME}>
      {tabRoutes.map(({ name, component, options }) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={options}
        />
      ))}
    </Tab.Navigator>
  );
};
export default BottomTabs;

const styles = StyleSheet.create({
  tabBarIconWrapper: {
    width: 30,
    height: 18,
  },
  tabBarShape: {
    width: '100%',
    height: 5,
    position: 'absolute',
    backgroundColor: '#000',
    top: -19,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
});
