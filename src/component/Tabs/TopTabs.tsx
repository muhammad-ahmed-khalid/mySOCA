import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Colors} from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {StyleSheet} from 'react-native';

const Tab = createMaterialTopTabNavigator();
const {Navigator, Screen} = Tab;

interface ITopTabs {
  component?: Array<{
    name: string;
    component: React.ComponentType<any>;
    title: string;
  }>;
  data?: any;
  isTrip?: boolean;
  handleClose?: any;
}

const TopTabs = ({component, data, isTrip = false, handleClose}: ITopTabs) => {
  const tabBarOptions = React.useMemo(() => {
    return {
      tabBarStyle: styles.tabBarStyle,
      tabBarLabelStyle: {
        ...styles.tabBarLabelStyle,
        color: isTrip ? Colors.VIA_COLOR : Colors.DARK_BLACK,
      },
      tabBarIndicatorStyle: {
        ...styles.tabBarIndicatorStyle,
        backgroundColor: isTrip ? Colors.VIA_COLOR : Colors.DARK_BLACK,
      },
      tabBarAndroidRipple: {borderless: false},
    };
  }, [isTrip]);

  return (
    <Navigator screenOptions={tabBarOptions}>
      {component?.map(
        (
          item: {
            name: string;
            component: React.ComponentType<any>;
            title: string;
          },
          index: number,
        ) => {
          const {name, component} = item;
          let initialParams;
          if (data) {
            initialParams = {
              data: data[index],
              handleClose: handleClose,
            };
          }

          return (
            <Screen
              key={`${index}+${name}`}
              name={name}
              component={component}
              initialParams={initialParams}
            />
          );
        },
      )}
    </Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: Colors.TRANSPARENT,
    elevation: 0,
  },
  tabBarLabelStyle: {
    textTransform: 'none',
    ...Fonts.Bold(Fonts.Size.xSmall, Colors.DARK_BLACK),
    top: 5,
  },
  tabBarIndicatorStyle: {
    height: Metrics.verticalScale(3),
  },
});

export default TopTabs;
