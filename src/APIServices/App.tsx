import {API_CONFIG, CONTENT_TYPE, PAGE_SIZE} from '@Constants/api';
import {apiRequest} from '@Service/ServiceAction';
import {SERVICE_CONFIG_URLS} from '../constants/api_urls';

export const getUserDetails = async (params: any) => {
  const {data} = await apiRequest({
    url: SERVICE_CONFIG_URLS.PLAYER.USER_DETAILS,
    method: API_CONFIG.GET,
    params,
    showLoader: false,
  });
  return data;
};

export const getPlayer = async (params: any) => {
  const {data} = await apiRequest({
    url: `${SERVICE_CONFIG_URLS.PLAYER.GET_PLAYER}${params.playerId}/profile`,
    method: API_CONFIG.GET,
    params,
    showLoader: false,
  });
  return data;
};

export const getAnnouncements = async () => {
  const {data} = await apiRequest({
    url: `${SERVICE_CONFIG_URLS.PLAYER.GET_ANNOUNCEMENTS}`,
    method: API_CONFIG.GET,
    showLoader: false,
  });
  return data;
};

export const getFmailyPlayers = async (params: any) => {
  console.log(params, "params getFmailyPlayers")
  const {data} = await apiRequest({
    url: `${SERVICE_CONFIG_URLS.PLAYER.GET_ALL_PLAYERS_DATA}/${params.playerId}`,
    method: API_CONFIG.GET,
    params,
    showLoader: false,
  });
  return data;
};

export const getAllFaqs = async () => {
  const {data} = await apiRequest({
    url: `${SERVICE_CONFIG_URLS.PLAYER.FAQS}`,
    method: API_CONFIG.GET,
    showLoader: false,
  });
  return data;
};

export const getTier = async (params: any) => {
  const {data} = await apiRequest({
    url: SERVICE_CONFIG_URLS.PLAYER.GET_TIER,
    method: API_CONFIG.GET,
    params,
    showLoader: false,
  });
  return data;
};

export const getRedeem = async (params: any) => {
  const {data} = await apiRequest({
    url: `${SERVICE_CONFIG_URLS.PLAYER.GET_REDEEM}${params.playerId}`,
    method: API_CONFIG.GET,
    params,
    showLoader: false,
  });
  return data;
};

export const getActivity = async (params: any) => {
  const {data} = await apiRequest({
    url: `${SERVICE_CONFIG_URLS.PLAYER.GET_ACTIVITY}CLB-135`,
    method: API_CONFIG.GET,
    params,
    showLoader: false,
    showToast: false,
  });

  return data;
};

export const getPerformance = async (params: any) => {
  const {data} = await apiRequest({
    url: `${SERVICE_CONFIG_URLS.PLAYER.GET_PLAYER}${params.playerId}/performance`,
    method: API_CONFIG.GET,
    params,
    showLoader: false,
  });
  return data;
};

export const getPayment = async (params: any) => {
  const {data} = await apiRequest({
    url: `${SERVICE_CONFIG_URLS.PLAYER.GET_PLAYER}payments/${params.playerId}`,
    method: API_CONFIG.GET,
    params,
    showLoader: false,
  });
  return data;
};

export const getCoachInfo = async (params: any) => {
  
  const {data} = await apiRequest({
    url: `${SERVICE_CONFIG_URLS.COACH.COACH_INFO}${params?.parentId}`,
    method: API_CONFIG.GET,
    params,
    showLoader: false,
  });
  return data;
};

export const getParentDetail = async (params: any) => {
  const {data} = await apiRequest({
    url: `${SERVICE_CONFIG_URLS.PLAYER.PARENT_DATA}${params.parentId}`,
    method: API_CONFIG.GET,
    params,
    showLoader: false,
  });
  return data;
};

export const getCoachBatch = async (params: any) => {
  
  const {data} = await apiRequest({
    url: `${SERVICE_CONFIG_URLS.COACH.COACH_BATCH}1`,
    method: API_CONFIG.GET,
    params,
    showLoader: false,
  });
  return data;
};

export const getCoachActivity = async (params: any) => {
  
  const {data} = await apiRequest({
    url: `${SERVICE_CONFIG_URLS.COACH.COACH_ACTIVITY}1`,
    method: API_CONFIG.GET,
    params,
    showLoader: false,
  });
  return data;
};


export const getAgeGroup = async () => {
  const {data} = await apiRequest({
    url: SERVICE_CONFIG_URLS.COACH.AGE_GROUP,
    method: API_CONFIG.GET,
    showLoader: false,
  });
  return data;
};

export const getLocation = async () => {
  const {data} = await apiRequest({
    url: SERVICE_CONFIG_URLS.COACH.LOCATION,
    method: API_CONFIG.GET,
    showLoader: false,
  });
  return data;
};

export const getCoachAttendanceList = async (params) => {
  console.log(params, "params OF getCoachAttendanceList")
  const {data} = await apiRequest({
    url: `${SERVICE_CONFIG_URLS.COACH.GET_COACH_ATTENDANCE_LIST}/${params.coachId}`,
    method: API_CONFIG.GET,
    showLoader: false,
  });
  return data;
};

export const updateCoachAttendanceList = async (params) => {
  console.log(params, "params OF updateCoachAttendanceList")
  const {data} = await apiRequest({
    url: `${SERVICE_CONFIG_URLS.COACH.GET_COACH_ATTENDANCE_LIST}/${params.playerId}/${params.coachId}`,
    method: API_CONFIG.PUT,
    showLoader: false,
    params: {attendance: params?.attendance},
  });
  return data;
};