import LottieView from 'lottie-react-native';
import * as React from 'react';
import {AppState, Modal, StyleSheet, View} from 'react-native';

const LottieWrapper = ({handleSubmit}) => {
  let animations = React.useRef(null);
  const handleAppStateChange = nextAppState => {
    if (nextAppState === 'background') {
      animations.current.play();
      console.log('App has come to the foreground!', nextAppState);
    }
  };
  const handleModalAnimationFinish = () => {
    handleSubmit();
  };
  React.useEffect(() => {
    const appStateListener = AppState.addEventListener(
      'change',
      handleAppStateChange,
    );
    return () => {
      appStateListener.remove();
    };
  }, []);
  return (
    <Modal statusBarTranslucent={true} visible={true} style={styles.root}>
      <View style={styles.container}>
        <LottieView
          ref={animations}
          onAnimationFinish={handleModalAnimationFinish}
          style={styles.lottieStyle}
          resizeMode="cover"
          autoPlay={true}
          loop={false}
          source={require('../../../ios/splash.json')}
        />
      </View>
    </Modal>
  );
};

export default LottieWrapper;

const styles = StyleSheet.create({
  root: {
    width: '100%',
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottieStyle: {
    flex: 1,
    width: '100%',
  },
});
