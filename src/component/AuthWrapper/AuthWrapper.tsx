import {AppLogo, SOCAPng, SOCASvg, SocaLogo} from '@Asset/logo';
import H1 from '@Component/Headings/H1';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';
import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  Image,
} from 'react-native';

interface IAuthWrapper {
  wrapperStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  scrollEnabled?: Boolean;
}

export default function AuthWrapper({
  wrapperStyle,
  children,
  scrollEnabled = false,
}: IAuthWrapper) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        scrollEnabled ? {minHeight: '100%'} : {minHeight: '125%'},
      ]} // Remove height: '100%'
      alwaysBounceVertical={false}
      bounces={false}
      style={{
        width: '100%',
        backgroundColor: '#374051',
        // marginBottom: 20,
      }}>
      <SafeAreaView style={styles.container}>
        <Image source={SOCAPng} style={{height: 250, width: 250}} />
        <H1 text="MySOCA" style={{color: Colors.WHITE}} />

        <View style={wrapperStyle}>{children}</View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Metrics.verticalScale(60),
    alignItems: 'center',
    flex: 1,
    // marginHorizontal: Metrics.scale(20),
  },
});
