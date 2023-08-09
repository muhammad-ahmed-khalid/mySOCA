import H2 from '@Component/Headings/H2';
import Fonts from '@Theme/Fonts';
import { Colors } from '@Theme/index';
import moment from 'moment';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { DATE_FORMATS } from '../../utility/DateUtils';
import Metrics from '../../utility/Metrics';
import ButtonView from '../ButtonView';
import { getImage } from '@Utility/ImageUploadUtil';
import H4 from '@Component/Headings/H4';
import H3 from '@Component/Headings/H3';
import H6 from '@Component/Headings/H6';
import { CalendarIcon, CancelIconSimple, CancelRoundIcon } from '@Asset/logo';
import { toastConfig } from '@Constants/toastUtils';
import { MAX_IMAGE_SIZE } from '@Constants/constants';

const FormImageInput = React.forwardRef((props: any, ref) => {
  const { value } = props
  const [image, setImage] = React.useState({
    img: { keyName: 'img', value: value || '', error: null },
  });
  const [state, setState] = React.useState({
    isErr: false,
    err: '',
    value: value || '',
  });

  React.useEffect(
    () =>
      setState(s => ({
        ...s,
        value: value,
        isErr: false,
        err: '',
      })),
    [value],
  );

  React.useImperativeHandle(ref, () => ({
    setError: (isErr: boolean, err: string) => {
      setState(s => ({
        ...s,
        isErr,
        err: err?.length ? err : props.err,
      }));
    },
    getValue: () => state.value,
    setValue: (value: string) => {
      setState(s => ({
        ...s,
        value,
      }));
    }
  }));

  const handleUploadImage = () => {
    getImage(1, setImage, image, 'img')
      .then(response => {
        if (response.assets[0]?.fileSize > MAX_IMAGE_SIZE) {
          toastConfig.error({
            type: 'error',
            text1: 'Error',
            text2: 'File size should be less than 6MB',
          });
          return 'File size should be less than 6MB';
        } else {
          setState(s => ({
            ...s,
            value: response?.assets[0].fileName,
            err: null,
            isErr: false,
          }));
        }
      })
      .catch(e => { });
  };

  const clearImage = () => {
    setState(s => ({
      ...s,
      value: '',
      err: null,
      isErr: false,
    }));
    setImage({
      img: { keyName: 'img', value: '', error: null },
    });
  };

  return (
    <View style={[styles.mainContainer, { width: props.width }]}>
      <View style={[styles.datePickerInput, props.wrapperStyle]}>
        {image.img.value?.fileName ? (
          <>
            <H6
              text={image.img.value?.fileName}
              numberOfLines={1}
              style={styles.imagePathText}
            />
            <ButtonView onPress={clearImage} style={styles.cancelIconWrapper}>
              <CancelIconSimple />
            </ButtonView>
          </>
        ) : (
          <View style={styles.innerWrapper}>
            <ButtonView
              onPress={handleUploadImage}
              style={styles.uploadBtnStyle}>
              <H4 text="Upload" textStyle={styles.uploadBtTxt} />
            </ButtonView>
            <H4 text="No file Uploaded" textStyle={styles.noUploadBtTxt} />
          </View>
        )}
      </View>
      {!!state.isErr && <H2 style={styles.errorMessage} text={state.err} />}
    </View>
  );
});

export default FormImageInput;
const styles = StyleSheet.create({
  innerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  uploadBtnStyle: {
    backgroundColor: Colors.Colors.DISABLED_BTN_BG,
    paddingHorizontal: Metrics.scale(45),
    paddingVertical: Metrics.scale(10),
    borderRadius: 25,
    marginRight: Metrics.scale(10),
  },
  uploadBtTxt: {
    ...Fonts.SemiBold(Fonts.Size.xSmall, Colors.Colors.WHITE),
  },
  noUploadBtTxt: {
    ...Fonts.Regular(Fonts.Size.xSmall, Colors.Colors.DARK_BLACK),
  },
  imagePathText: {
    ...Fonts.Medium(Fonts.Size.normal, Colors.Colors.DARK_BLACK),
  },
  cancelIconWrapper: {
    position: 'absolute',
    right: 10,
    width: 30,
    height: 30,
    backgroundColor: Colors.Colors.DISABLED_BTN_BG,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  mainContainer: {
    marginVertical: Metrics.verticalScale(10),
  },
  errorMessage: {
    ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.Colors.TOMATO),
    marginTop: Metrics.scale(5),
  },
  datePickerInput: {
    borderWidth: 1,
    borderColor: Colors.Colors.MEDIUM_GRAY,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Metrics.scale(8),
    paddingRight: Metrics.scale(50),
    position: 'relative',
    width: '100%',
    borderRadius: 10,
  },
});
