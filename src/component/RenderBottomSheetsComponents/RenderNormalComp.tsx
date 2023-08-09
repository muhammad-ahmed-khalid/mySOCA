import {BottomSheetName} from '@Constants/user';

import RideAccepted from '@Container/AppContainer/HomeRideAcceptedBottomSheet/RideAccepted';
import RideBooking from '@Container/AppContainer/HomeRideBookingBottomSheet/RideBooking';
import React from 'react';
import {LayoutAnimation} from 'react-native';

const RenderActionSheetComp = (
  currenRideStepZustand,
  currentRideDataZustand,
  startNavigationMutateLoading,
  startNavigationMutate,
) => {
  const renderActionSheet = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

    switch (currenRideStepZustand?.compName) {
      case BottomSheetName.RIDE_BOOKING:
        return (
          <RideBooking
            key={BottomSheetName.RIDE_BOOKING}
            currentRideDataZustand={currentRideDataZustand}
          />
        );
      case BottomSheetName.RIDE_ACCEPTED:
        return (
          <RideAccepted
            key={BottomSheetName.RIDE_ACCEPTED}
            currentRideDataZustand={currentRideDataZustand}
            isLoading={startNavigationMutateLoading}
            setCurrentRideStepZustand={() =>
              startNavigationMutate({id: currentRideDataZustand?.rideId})
            }
          />
        );
      default:
        return null;
    }
  };
  return <>{renderActionSheet()}</>;
};

export default RenderActionSheetComp;
