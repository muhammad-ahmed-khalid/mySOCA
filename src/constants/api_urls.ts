const authController = 'Authentication';
const student = 'student';
const common = 'common';
const driver = 'driver';
const auth = 'auth'
export const SERVICE_CONFIG_URLS = {
  AUTH: {
    LOGIN: `${auth}/login`,
    SIGNUP:`${auth}/create`,

    ME: `${authController}/me`,
    REQUEST_OTP: `${driver}/tokens/request-otp`,
    VERIFY_OTP: `${driver}/tokens/verify-otp`,
    PRIVACY_POLICY: `${driver}/personal/privacy-policy`,
  },
  PLAYER: {
    REQUEST_OTP: `${student}/tokens/request-otp`,
    VERIFY_OTP: `${student}/tokens/verify-otp`,
    GET_CITIES: `${student}/preference/cities`,
    USER_DETAILS: `${student}/personal/profile`,
    GET_LANGUAGES: `${student}/preference/languages`,
    UPDATE_LANGUAGE: `${student}/preference/language`,
    GET_PLAYER:`player/`,
    GET_PLAYER_SELECTION:`players/`,
    GET_TIER:`/tiers`,
    GET_REDEEM:`redeemable/`,
    GET_ACTIVITY:'player/activity/'
  },
};
