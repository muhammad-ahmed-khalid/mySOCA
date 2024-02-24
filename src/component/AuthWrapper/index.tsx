import {commonFullWidth} from '@Constants/constants';
import * as React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import styles from './style';
import {AuthBG, BGWithLayer, LOGO, LOGOSVG} from '@Asset/logo';

interface IAuthWrapper {
  wrapperStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

export default function AuthWrapper({wrapperStyle, children}: IAuthWrapper) {
  return (
    <>
       <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentStyle}
      alwaysBounceVertical={false}
      bounces={false}
      style={commonFullWidth}>
      <View style={[styles.container, wrapperStyle]}>
        <LOGOSVG />
        <View style={commonFullWidth}>{children}</View>
      </View>
    </ScrollView>
    
    <ImageBackground 
    source={BGWithLayer}
    style={styles.imageBackground}
    />
    </>
  );
}
