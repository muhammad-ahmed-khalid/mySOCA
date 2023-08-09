import CustomWebView from '@Component/CustomWebView/CustomWebView';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const WebView = ({route}) => {
  const {params} = route || {};
  const {webviewUrl} = params || {};

  return (
    <View style={styles.container}>
      <CustomWebView
        webViewURL={{
          uri: `${webviewUrl}`,
        }}
      />
    </View>
  );
};

export default WebView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
