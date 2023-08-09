import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';
import SmallLoader from '@Component/SmallLoader/index';
import {Colors} from '@Theme/index';
interface ICustomWebView {
  webViewURL?: any;
}

const CustomWebView = ({
  webViewURL,
}: ICustomWebView) => {
  const isFocused = useIsFocused();
  const handleLoading = () => {
    return (
      <View style={styles.loaderWrapper}>
        <SmallLoader size={'small'} hidesWhenStopped={true} />
      </View>
    );
  };
  return (
    <View style={styles.webviewWrapper}>
      <WebView
        originWhitelist={['*']}
        startInLoadingState={true}
        renderLoading={handleLoading}
        source={isFocused ? webViewURL : webViewURL}
        style={styles.WebViewStling}
        javaScriptEnabled={true}
        mixedContentMode="always"
        allowUniversalAccessFromFileURLs={true}
        cacheEnabled={true}
      />
    </View>
  );
};

export default CustomWebView;

const styles = StyleSheet.create({
  loaderWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  webviewWrapper: {flex: 1, padding: 10, backgroundColor: Colors.Colors.WHITE},
  WebViewStling: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
