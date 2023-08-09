import {AppLogo} from '@Asset/logo';
import Metrics from '@Utility/Metrics';
import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

interface IAuthWrapper {
  wrapperStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

export default function AuthWrapper({wrapperStyle, children}: IAuthWrapper) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{minHeight: '100%'}}
      alwaysBounceVertical={false}
      bounces={false}
      style={{width: '100%'}}>
      <SafeAreaView style={styles.container}>
        <AppLogo />

        <View style={wrapperStyle}>{children}</View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Metrics.verticalScale(140),
    alignItems: 'center',
    flex: 1,
    marginHorizontal: Metrics.scale(20),
  },
});
