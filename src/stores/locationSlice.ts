interface LocationSlice {}
const initialLocationState: LocationSlice = {};
export const createLocationSlice = (set: any) => ({
  ...initialLocationState,
  reset: () => set(initialLocationState),
});
