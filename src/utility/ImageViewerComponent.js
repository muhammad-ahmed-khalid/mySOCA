import {CancelIcon} from '@Asset/logo';
import {Colors} from '@Theme/index';
import React from 'react';
import {
  ActivityIndicator,
  Modal,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import ImageViewer from 'react-native-image-zoom-viewer';

const ImageViewerComponent = ({
  images,
  visible = false,
  onClose = () => {},
}) => {
  const handleLoading = () => {
    return <ActivityIndicator size={'large'} color={Colors.Colors.WHITE} />;
  };
  const handleImage = props => {
    return <FastImage {...props} />;
  };
  return (
    <Modal visible={visible}>
      <TouchableOpacity
        activeOpacity={0.8}
        hitSlop={styles.hitSlop}
        style={styles.closeBtn}
        onPress={onClose}>
        <CancelIcon />
      </TouchableOpacity>
      <ImageViewer
        imageUrls={images}
        enableSwipeDown={true}
        onSwipeDown={onClose}
        loadingRender={handleLoading}
        renderImage={handleImage}
        renderIndicator={() => null}
      />
    </Modal>
  );
};

export default ImageViewerComponent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer: {
    backgroundColor: Colors.Colors.WHITE,
    paddingHorizontal: 30,
    paddingVertical: 40,
    marginHorizontal: 15,
    borderRadius: 20,
  },
  heading: {
    color: Colors.Colors.DARK_BLACK,
  },
  text: {
    color: Colors.Colors.DARK_BLACK,
    lineHeight: 22,
    marginBottom: 30,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonStyle: {
    width: 130,
    marginHorizontal: 5,
  },
  closeBtn: {
    padding: 5,
    borderRadius: 30,
    position: 'absolute',
    top: Platform.OS == 'android' ? 10 : 50,
    right: 20,
    zIndex: 999,
  },
  closeImg: {
    height: 20,
    width: 20,
  },
});
