import {BottomSheetName} from '@Constants/user';
import EndTrip from '@Container/AppContainer/HomeEndTripBottomSheet/EndTrip';
import FinishTripWithRating from '@Container/AppContainer/HomeFinishTripWithRatingBottomSheet/FinishTripWithRating';
import ReachingPickupPoint from '@Container/AppContainer/HomeReachingPickupPointBottomSheet/ReachingPickupPoint';
import WaitingAndStartTrip from '@Container/AppContainer/HomeWaitingAndStartTripBottomSheet/WaitingAndStartTrip';
import React from 'react';

const RenderOpenComp = (
  currenRideStepZustand,
  handleCurrentLocation,
  currentRideDataZustand,
  arriveForPickupMutate,
  startTripMutate,
  endTripMutateLoading,
  currentLocationZustand,
  endTripMutate,
  finishTripMutateLoading,
  finishTripMutate,
) => {
  const renderOpen = () => {
    switch (currenRideStepZustand?.compName) {
      case BottomSheetName.REACHING_PICKUP_POINT:
        return (
          <ReachingPickupPoint
            key={BottomSheetName.REACHING_PICKUP_POINT} 
            handleCurrentLocation={handleCurrentLocation}
            currentRideDataZustand={currentRideDataZustand}
            setCurrentRideStepZustand={() =>
              arriveForPickupMutate({id: currentRideDataZustand?.rideId})
            }
          />
        );
      case BottomSheetName.WAITING_AND_START_TRIP:
        return (
          <WaitingAndStartTrip
            key={BottomSheetName.WAITING_AND_START_TRIP}
            handleCurrentLocation={handleCurrentLocation}
            currentRideDataZustand={currentRideDataZustand}
            setCurrentRideStepZustand={() =>
              startTripMutate({id: currentRideDataZustand?.rideId})
            }
          />
        );
      case BottomSheetName.END_TRIP:
        return (
          <EndTrip
            key={BottomSheetName.END_TRIP}
            handleCurrentLocation={handleCurrentLocation}
            currentRideDataZustand={currentRideDataZustand}
            isLoading={endTripMutateLoading}
            currentLocationZustand={currentLocationZustand}
            setCurrentRideStepZustand={data =>
              endTripMutate({id: currentRideDataZustand?.rideId, ...data})
            }
          />
        );
      case BottomSheetName.FINISH_TRIP_WITH_RATING:
        return (
          <FinishTripWithRating
            key={BottomSheetName.FINISH_TRIP_WITH_RATING}
            handleCurrentLocation={handleCurrentLocation}
            currentRideDataZustand={currentRideDataZustand}
            isLoading={finishTripMutateLoading}
            setCurrentRideStepZustand={rating => {
              finishTripMutate({id: currentRideDataZustand?.rideId, rating});
            }}
          />
        );
      default:
        return null;
    }
  };
  return <>{renderOpen()}</>;
};

export default RenderOpenComp;
