import {RightArrowLarge} from '@Asset/logo';
import AuthWrapper from '@Component/AuthWrapper/AuthWrapper';
import AppButton from '@Component/Buttons/AppButton';
import FormHandler from '@Component/FormHandler';
import {Colors} from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {Platform, StyleSheet, View, Keyboard} from 'react-native';
import useAuthLoginContainer from './AuthLoginContainer';
import Input from '@Component/Input';

const AuthLogin = () => {
  const {refForm, onSubmitForm} = useAuthLoginContainer();
  return (
    <>
      <AuthWrapper>
        <View>
          <View style={styles.Input}>
            <FormHandler ref={refForm} validateOnChange>
              {SCHEMAS => {
                return (
                  <>
                    <View style={styles.inputWrapperWidth}>
                      <Input
                        {...SCHEMAS.email('email')}
                        placeholder="Enter your email"
                        returnKeyType={'next'}
                      />
                    </View>
                    <View style={styles.inputWrapperWidth}>
                      <Input
                        {...SCHEMAS.password('password')}
                        placeholder="Enter your password"
                        returnKeyType={'done'}
                        secureTextEntry={true}
                        blurOnSubmit
                        onSubmitEditing={() => {
                          Keyboard.dismiss();
                        }}
                      />
                    </View>
                  </>
                );
              }}
            </FormHandler>
          </View>
          <View style={styles.bottomWrapper}>
            <AppButton
              title={'next'}
              imageSource={RightArrowLarge}
              iconAfterText={true}
              onPress={() => onSubmitForm()}
            />
          </View>
        </View>
      </AuthWrapper>
    </>
  );
};

export default AuthLogin;

const styles = StyleSheet.create({
  Input: {
    marginBottom: Metrics.verticalScale(60),
  },
  underLineBTnStyle: {
    ...Fonts.SemiBold(Fonts.Size.medium, Colors.BLUE_LINK),
  },
  inputWrapperWidth: {width: '100%'},
  bottomWrapper: {
    marginTop: Metrics.verticalScale(70),
    marginBottom:
      Platform.OS === 'ios'
        ? Metrics.verticalScale(0)
        : Metrics.verticalScale(20),
  },
});
