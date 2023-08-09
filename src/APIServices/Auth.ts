import {API_CONFIG, CONTENT_TYPE, PAGE_SIZE} from '@Constants/api';
import {apiRequest} from '@Service/ServiceAction';
import {SERVICE_CONFIG_URLS} from '../constants/api_urls';
import {LoginPayload} from '../containers/loginContainer/types';
import {getUserType} from '../containers/startupContainer/types';
import apiService from '../services/apiService';
import versionService from '../services/versionService';

export const login = async (payload: LoginPayload) => {
  const {ok, response, data} = await apiService.post(
    SERVICE_CONFIG_URLS.AUTH.LOGIN,
    payload,
  );
  if (ok) {
    return data;
  }
  throw response.message;
};

export const getUser = async () => {
  const payload: getUserType = {
    version: versionService.getVersionNumber(),
  };
  const {ok, response, data} = await apiService.post(
    SERVICE_CONFIG_URLS.STUDENT.USER_DETAILS,
    payload,
  );
  if (ok) {
    return data;
  }
  throw response.message;
};

export const logout = async (params: any) => {
  const {data} = await apiRequest({
    url: SERVICE_CONFIG_URLS.STUDENT.SIGN_OUT,
    method: API_CONFIG.POST,
    params,
  });
  return data;
};

export const getPrivacyPolicy = async (params: any) => {
  const {data} = await apiRequest({
    url: SERVICE_CONFIG_URLS.AUTH.PRIVACY_POLICY,
    method: API_CONFIG.GET,
    params,
    showLoader: false,
  });
  return data;
};
