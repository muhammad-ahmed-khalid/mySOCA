import Metrics from "@Utility/Metrics";

export const STATUS = {
  PENDING: 'Pending',
  REJECT: 'Reject',
  SUCCESS: 'Success',
};

export const MAX_IMAGE_SIZE = 10485760;

export const commonFullWidth = {
  width: '100%',
  flex: 1,
  paddingBottom: Metrics.scale(20)
}

export const COACH_PLAYER_TODAY_ATTENDANCE = {
  PRESENT: 0,
  ABSENT: 1,
  UNKNOWN: 2
}