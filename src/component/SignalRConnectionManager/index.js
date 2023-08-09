import {AppState} from 'react-native';
import NetInfo, {useNetInfo} from '@react-native-community/netinfo';
import {useEffect} from 'react';
import SignalRConnection from '@Service/SingnalR';

const SignalRConnectionManager = () => {
  const net = useNetInfo();
  useEffect(() => {
    // Subscribe to network state change events
    const unsubscribe = NetInfo.addEventListener(handleConnectivityChange);

    // Subscribe to AppState change events
    const subscription = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );

    return () => {
      unsubscribe && unsubscribe();
      subscription && subscription.remove();
    };
  }, []);

  const handleConnectivityChange = netInfo => {
    if (netInfo.isConnected) {
      if (!SignalRConnection.getIsConnected()) {
        SignalRConnection.reConnect();
      }
    }
  };

  const handleAppStateChange = nextAppState => {
    // if app comes to foreground and connection is not connected, start connection
    if (nextAppState === 'active') reConnectToSignalR();
  };

  // reconnect to signalR
  const reConnectToSignalR = () => {
    if (!SignalRConnection.getIsConnected()) {
      SignalRConnection.reConnect();
    }
  };

  return null;
};

export default SignalRConnectionManager;
