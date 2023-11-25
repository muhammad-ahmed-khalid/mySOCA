import Metrics from './Metrics';
import DeviceInfo from 'react-native-device-info';
import {Platform, StyleSheet} from 'react-native';

export const paginationDataWithReturn = apiData => {
  let allData = apiData?.pages
    ? apiData?.pages.map(page => page?.data).flat()
    : apiData?.data;
  return allData;
};

export const commonAbsoluteCss = StyleSheet.create({
  openSheetWrapper: {
    position: 'absolute',
    bottom: Metrics.scale(0),
    right: Metrics.scale(0),
    left: Metrics.scale(0),
  },
});

export const CheckNull = data => {
  if (data != undefined && data != null) {
    return data;
  } else {
    return 'N/A';
  }
};

export const getDeviceId = () => {
  return DeviceInfo.getDeviceId();
};

export const getDeviceName = () => {
  return DeviceInfo.getSystemName();
};
