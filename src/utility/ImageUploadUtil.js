import {imagePicker} from '@Asset/logo';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
export const getImage = (
  selectionLimit = 1,
  setStateForm = null,
  formData = null,
  FormKeyName = null,
) => {
  return new Promise((resolve, reject) => {
    const options = {
      quality: 0.5,
      mediaType: 'photo',
      selectionLimit,
      includeBase64: false,
      storageOptions: {
        skipBackup: true,
        path: 'images',
        cameraRoll: true,
        waitUntilSaved: true,
      },
    };
    launchImageLibrary(options, response => {
      try {
        if (response.didCancel) {
          console.log(response.didCancel, 'response.didCancel');
        } else if (response.error) {
          console.log(response.error, 'response.error');
        } else if (response.customButton) {
          console.log(response.customButton, 'response.customButton');
        } else {
          if (setStateForm) {
            let formObject = {...formData};
            if (Array.isArray(formObject[`${FormKeyName}`].value)) {
              if (formObject[`${FormKeyName}`].value.length) {
                formObject[`${FormKeyName}`] = {
                  ...formObject[`${FormKeyName}`],
                  value: [
                    ...formObject[`${FormKeyName}`].value,
                    response.assets[0],
                  ],
                  error: null,
                };
              } else {
                formObject[`${FormKeyName}`] = {
                  ...formObject[`${FormKeyName}`],
                  value: [response?.assets[0]],
                  error: null,
                };
              }
            } else {
              formObject[`${FormKeyName}`] = {
                ...formObject[`${FormKeyName}`],
                value: response?.assets[0],
                updated: true,
                error: null,
              };
            }
            setStateForm(formObject);
            resolve(response);
          } else {
            resolve(response);
          }
        }
      } catch (e) {
        console.log(e, 'error');
      }
    });
  });
};
export const getImageWithCamera = (setStateForm, formData, FormKeyName) => {
  return new Promise((resolve, reject) => {
    try {
      const options = {
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        mediaType: 'photo',
        includeExtra: true,
        includeBase64: true,
        storageOptions: {
          skipBackup: true,
          path: 'images',
          cameraRoll: true,
          waitUntilSaved: true,
        },
      };
      launchCamera(options, response => {
        if (response.didCancel) {
          reject(false);
        } else if (response.error) {
          reject(false);
        } else if (response.customButton) {
          reject(false);
        } else {
          let formObject = {...formData};
          formObject[`${FormKeyName}`] = {
            ...formObject[`${FormKeyName}`],
            value: response,
            updated: true,
            error: null,
            isDocument: false,
          };
          setStateForm(formObject);
          resolve(response);
        }
      });
    } catch (e) {
      reject(e);
      reject(false);
    }
  });
};

export const getProfileImage = profile => {
  if (profile === null || profile === undefined) {
    return false;
  }
};
export const getImageURIFromServer = profileImagePath => {
  return profileImagePath
    ? {uri: getProfileImage(profileImagePath)}
    : imagePicker;
};
export const getLocalImageURI = (uri, imagePicker) => {
  return uri ? {uri} : imagePicker ? imagePicker : imagePicker;
};
export const getSignatureFromServer = signature => {
  return signature ? {uri: getProfileImage(signature)} : null;
};
