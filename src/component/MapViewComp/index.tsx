import { getTripPolyline } from '@Api/App';
import { MyLocation } from '@Asset/logo';
import H4 from '@Component/Headings/H4';
import H6 from '@Component/Headings/H6';
import { STORAGE_KEYS } from '@Constants/queryKeys';
import { BottomSheetName } from '@Constants/user';
import useTripDetailsContainer from '@Container/AppContainer/TripDetails/TripDetailsContainer';
import { useQuery } from '@tanstack/react-query';
import { Colors, Fonts } from '@Theme/index';
import { mergeCoordinatesIntoSingleArray } from '@Utility/common';
import { fetchLocation } from '@Utility/fetchLocationUtil';
import { fetchDirections } from '@Utility/GoogleAPIUtil';
import Metrics from '@Utility/Metrics';
import {
  IsDropoffShow,
  IsPickupShow,
  IsRideStarted,
  IsShowStops,
} from '@Utility/RoutesHandleUtil';
import React, {
  forwardRef,
  memo,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, {
  LatLng,
  Marker,
  Polyline,
  PROVIDER_GOOGLE,
  Region,
  Callout,
} from 'react-native-maps';

interface MapViewCompProps {
  stops?: any;
  markers?: any;
  setCurrentLocationZustand?: any;
  currentLocationZustand?: any;
  currenRideStepZustand?: any;
  currentRideDataZustand?: any;
}

export interface MapViewCompRef {
  goToMyLocation: () => void;
}

const MapViewComp = forwardRef<MapViewCompRef, MapViewCompProps>(
  (props, ref) => {
    const {
      setCurrentLocationZustand,
      currentLocationZustand,
      currenRideStepZustand,
      currentRideDataZustand,
    } = props;
    const { tripPolyine } = useTripDetailsContainer(currentRideDataZustand?.rideId)
    const mapRef = useRef<MapView>(null);
    const [coords, setCoords] = useState<LatLng>({
      latitude: 0.0,
      longitude: 0.0,
    });
    const [polyCoords, setPolyCoords] = useState<any>([]);
    const getPolylineCoordinates = async (
      currentPickup,
      destination,
      otherStop = [],
    ) => {
      const polyLineCoords = await fetchDirections(
        currentPickup,
        destination,
        otherStop,
      );
      setPolyCoords(polyLineCoords);
    };
    useEffect(() => {
      fitMarkersToCoordinates();
      if (polyCoords?.length) {
        setPolyCoords([]);
      }
    }, [currenRideStepZustand]);

    useEffect(() => {
      if (
        currentRideDataZustand?.rideId &&
        currenRideStepZustand === BottomSheetName.FINISH_TRIP_WITH_RATING
      ) {
        setTimeout(() => {
          setPolyCoords(tripPolyine);
        }, 3000)
      } else if (
        currentRideDataZustand?.pickupAndDropoff &&
        currenRideStepZustand === BottomSheetName.REACHING_PICKUP_POINT
      ) {
        getPolylineCoordinates(
          currentLocationZustand,
          currentRideDataZustand?.pickupAndDropoff?.[0],
        );
      } else if (
        currentRideDataZustand?.pickupAndDropoff &&
        currenRideStepZustand === BottomSheetName.END_TRIP
      ) {
        getPolylineCoordinates(
          currentLocationZustand,
          currentRideDataZustand?.pickupAndDropoff?.[1],
          currentRideDataZustand?.otherStops,
        );
      } else {
        setPolyCoords([]);
      }
    }, [currenRideStepZustand, currentLocationZustand, tripPolyine]);
    useEffect(() => {
      if (
        currentRideDataZustand?.pickupAndDropoff?.[0]?.coordinate?.latitude &&
        currentRideDataZustand?.pickupAndDropoff?.[0]?.coordinate?.longitude
      ) {
        setCoords(currentRideDataZustand?.pickupAndDropoff?.[0]?.coordinate);
      } else {
        getLocation();
      }
    }, [currentRideDataZustand?.pickupAndDropoff?.[0]]);

    const animateToRegion = (value: Region) => {
      mapRef.current?.animateToRegion(value);
    };
    const fitMarkersToCoordinates = async () => {
      if (
        currentLocationZustand ||
        currentRideDataZustand?.pickupAndDropoff?.length
      ) {
        let { mergedArray, fitToMap } = mergeCoordinatesIntoSingleArray(
          currentLocationZustand,
          currentRideDataZustand?.pickupAndDropoff,
          currentRideDataZustand?.otherStops,
          currenRideStepZustand,
        );
        const coordinates = mergedArray?.map((val: any) => val.coordinate);
        mapRef?.current?.fitToCoordinates(coordinates, fitToMap);
      }
    };

    const getLocation = async () => {
      try {
        // Fetch current location using the fetchLocation utility
        const position = await fetchLocation();
        const { latitude, longitude } = position.coords;
        setCoords({ latitude, longitude });
        setCurrentLocationZustand({ latitude, longitude });
        fitMarkersToCoordinates();
      } catch (error) {
        console.log('Error fetching location:', error);
      }
    };

    const onRegionComplete = (region: Region) => {
      const { latitude, longitude } = region;
      setCoords({ latitude, longitude });
    };

    useImperativeHandle(ref, () => ({
      goToMyLocation: async () => {
        try {
          getLocation();
        } catch (error) {
          console.log('Error fetching user location:', error);
        }
      },
      animateToRegion: data => {
        animateToRegion(data);
      },
      fitMarkersToCoordinates: () => {
        try {
          fitMarkersToCoordinates();
        } catch (e) {
          console.log(e, 'eeeeeeee');
        }
      },
    }));

    return (
      <MapView
        ref={mapRef}
        style={styles.flexOne}
        initialRegion={{
          latitude: coords?.latitude,
          longitude: coords?.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsMyLocationButton={false}
        maxZoomLevel={19}
        zoomEnabled={true}
        showsUserLocation={false}
        onRegionChangeComplete={onRegionComplete}
        provider={PROVIDER_GOOGLE}>
        {currentLocationZustand &&
          currenRideStepZustand != BottomSheetName.WAITING_AND_START_TRIP && (
            <Marker
              coordinate={{
                latitude: currentLocationZustand?.latitude,
                longitude: currentLocationZustand?.longitude,
              }}>
              <MyLocation />
            </Marker>
          )}
        {currentRideDataZustand?.otherStops?.length > 0 &&
          IsShowStops(currenRideStepZustand) &&
          currentRideDataZustand?.otherStops?.map((val, index) => {
            return (
              <Marker
                key={index}
                coordinate={val.coordinate}
                pinColor={Colors.Colors.STOP_BLUE_COLOR}
              />
            );
          })}
        {!!polyCoords?.length && IsRideStarted(currenRideStepZustand) && (
          <Polyline
            coordinates={polyCoords}
            // strokeColor="#47A7DD" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={[
              '#2B3D4F',
              '#47A7DD', // no color, creates a "long" gradient between the previous and next coordinate
            ]}
            strokeWidth={6}
          />
        )}
        {currentRideDataZustand?.pickupAndDropoff?.length > 0 &&
          currentRideDataZustand?.pickupAndDropoff?.[0] &&
          IsPickupShow(currenRideStepZustand) && (
            <Marker
              coordinate={
                currentRideDataZustand?.pickupAndDropoff?.[0]?.coordinate
              }>
              <Callout style={styles.calloutContainer}>
                <H6
                  key={Math.random() * 100}
                  text={currentRideDataZustand?.pickupAndDropoff?.[0]?.name}
                  style={styles.pickupTxt}
                />
              </Callout>
            </Marker>
          )}
        {currentRideDataZustand?.pickupAndDropoff?.length > 0 &&
          currentRideDataZustand?.pickupAndDropoff?.[1] &&
          IsDropoffShow(currenRideStepZustand) && (
            <Marker
              coordinate={
                currentRideDataZustand?.pickupAndDropoff?.[1]?.coordinate
              }>
              <Callout style={styles.calloutContainer}>
                <H6
                  key={Math.random() * 100}
                  text={currentRideDataZustand?.pickupAndDropoff?.[1]?.name}
                  style={styles.pickupTxt}
                />
              </Callout>
            </Marker>
          )}
      </MapView>
    );
  },
);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.Colors.WHITE,
  },
  calloutContainer: {
    width: 300,
    marginLeft: '10%',
    marginRight: 'auto',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickupTxt: {
    ...Fonts.Regular(Fonts.Size.xxxSmall, Colors.Colors.DARK_BLACK),
    paddingHorizontal: Metrics.scale(5),
    paddingVertical: Metrics.scale(10),
  },
  dropOffTxt: {
    marginBottom: 5,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: Colors.Colors.VIA_COLOR,
    padding: 10,
    ...Fonts.SemiBold(Fonts.Size.xxxSmall, Colors.Colors.WHITE),
  },
  flexOne: {
    flex: 1,
  },
  pickupCircle: {
    width: Metrics.scale(10),
    height: Metrics.scale(10),
    borderRadius: Metrics.scale(10),
    backgroundColor: Colors.Colors.WHITE,
    borderWidth: 2,
    borderColor: Colors.Colors.BLUE_LINK,
  },
  dropOfCircle: {
    width: Metrics.scale(10),
    height: Metrics.scale(10),
    borderRadius: Metrics.scale(10),
    backgroundColor: Colors.Colors.BLUE_LINK,
    borderWidth: 2,
    borderColor: Colors.Colors.WHITE,
  },
  customMarker: {
    alignItems: 'center',
    marginBottom: 10,
  },
  circle: {
    width: Metrics.scale(40),
    height: Metrics.scale(40),
    borderRadius: Metrics.scale(30),
    backgroundColor: Colors.Colors.WHITE,
    borderWidth: 2,
    borderColor: Colors.Colors.BLUE,
    justifyContent: 'center',
    alignItems: 'center',
  },

  smallCircle: {
    marginTop: 2,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.Colors.BLUE,
  },
  number: {
    ...Fonts.Bold(Fonts.Size.xxxSmall, Colors.Colors.DARK_BLACK),
  },
  label: {
    ...Fonts.SemiBold(10, Colors.Colors.DARK_BLACK),
  },
});

export default memo(MapViewComp);
