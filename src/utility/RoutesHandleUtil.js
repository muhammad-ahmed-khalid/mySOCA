import {BottomSheetName} from '@Constants/user';
import {DATE_FORMATS, getFormatedDateTime} from './DateUtils';
import {CHAT_TYPE} from '@Constants/constants';

//Write route name here
const ShowTopSheet = {};
const ShowDate = {};
const ShowSupport = {
  CHAT_SCREEN: 'CHAT_SCREEN',
};
const ShowDriverChat = {
  DRIVER_CHAT: 'DRIVER_CHAT',
};
const TripDetails = {
  TRIP_DETAILS: 'TRIP_DETAILS',
};
const Profile = {
  PROFILE: 'PROFILE',
};
const StripeConnectId = {
  STRIPE_CONNECT_ID: 'STRIPE_CONNECT_ID',
};

const BankingInfo = {
  BANKING_INFO: 'BANKING_INFO',
};

const PrivacyPolicy = {
  PRIVACY_POLICY: "PRIVACY_POLICY"
}

export const RoutesHandleUtil = (routeName, chatHeaderZustand) => {
  let routes = [];
  if (ShowDriverChat[routeName] || chatHeaderZustand === CHAT_TYPE.CUSTOMER) {
    routes.push('ShowDriverChat');
  }
  if (ShowSupport[routeName] && chatHeaderZustand === CHAT_TYPE.SUPPORT) {
    routes.push('ShowSupport');
  }
  if (ShowDate[routeName]) {
    routes.push('ShowDate');
  }
  if (ShowTopSheet[routeName]) {
    routes.push('ShowTopSheet');
  }
  if (Profile[routeName]) {
    routes.push('Profile');
  }
  if (StripeConnectId[routeName]) {
    routes.push('StripeConnectId');
  }
  if (BankingInfo[routeName]) {
    routes.push('BankingInfo');
  }
  if (PrivacyPolicy[routeName]) {
    routes.push('PrivacyPolicy');
  }
  if (TripDetails[routeName]) {
    routes.push('TripDetails');
  }
  return routes;
};
export const RouteHandleNames = {
  ShowTopSheet: 'ShowTopSheet',
  ShowDate: 'ShowDate',
  ShowSupport: 'ShowSupport',
  ShowDriverChat: 'ShowDriverChat',
  TripDetails: 'TripDetails',
  Profile: 'Profile',
  StripeConnectId: 'StripeConnectId',
  BankingInfo: 'BankingInfo',
  PrivacyPolicy: "PrivacyPolicy",
};

export const IsRideStarted = rideStatus => {
  if (
    rideStatus === BottomSheetName.REACHING_PICKUP_POINT ||
    rideStatus === BottomSheetName.WAITING_AND_START_TRIP ||
    rideStatus === BottomSheetName.END_TRIP ||
    rideStatus === BottomSheetName.FINISH_TRIP_WITH_RATING
  ) {
    return true;
  } else {
    return false;
  }
};

export const IsShowStops = rideStatus => {
  if (
    rideStatus === BottomSheetName.WAITING_AND_START_TRIP ||
    rideStatus === BottomSheetName.END_TRIP ||
    rideStatus === BottomSheetName.FINISH_TRIP_WITH_RATING
  ) {
    return true;
  } else {
    return false;
  }
};

export const IsPickupShow = rideStatus => {
  if (
    rideStatus === BottomSheetName.WAITING_AND_START_TRIP ||
    rideStatus === BottomSheetName.END_TRIP
  ) {
    return false;
  } else {
    return true;
  }
};

export const IsDropoffShow = rideStatus => {
  if (rideStatus === BottomSheetName.REACHING_PICKUP_POINT) {
    return false;
  } else {
    return true;
  }
};

export const IsMapDirectionShow = (
  rideStatus,
  rideDetails,
  cb,
  topBarMapLocationCoordinatesZustand,
  isKilledZustand
) => {
  let payload = {};
  if (rideStatus === BottomSheetName.REACHING_PICKUP_POINT) {
    payload.name =
      rideDetails?.pickupAndDropoff?.[0]?.name;
    payload.address =
      rideDetails?.pickupAndDropoff?.[0]?.address;
    payload.isArrivalTime = true;
    payload.arrivalTime = getFormatedDateTime(
      rideDetails?.arrivalETA,
      DATE_FORMATS.ARRIVAL_TIME,
    );
    payload.cb = cb;
    payload.isStartMapIcon = false;
  } else if (
    rideStatus === BottomSheetName.WAITING_AND_START_TRIP ||
    rideStatus === BottomSheetName.END_TRIP
  ) {
    payload.name = topBarMapLocationCoordinatesZustand?.name;
    payload.address = topBarMapLocationCoordinatesZustand?.address;
    payload.isArrivalTime = false;
    payload.arrivalTime = getFormatedDateTime(
      rideDetails?.arrivalETA,
      DATE_FORMATS.ARRIVAL_TIME,
    );
    payload.cb = cb;
    payload.isStartMapIcon = false;
  }

  return payload;
};
