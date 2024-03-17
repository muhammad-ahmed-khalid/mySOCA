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
    url: `${SERVICE_CONFIG_URLS.PLAYER.GET_ACTIVITY}${params.playerId}`,
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
