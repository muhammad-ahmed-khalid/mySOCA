import { RightArrowLarge } from '@Asset/logo';
import AuthWrapper from '@Component/AuthWrapper/AuthWrapper';
import AppButton from '@Component/Buttons/AppButton';
import FormHandler from '@Component/FormHandler';
import { Colors } from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import React from 'react';
import { Platform, StyleSheet, View, Keyboard } from 'react-native';
import useAuthLoginContainer from './AuthLoginContainer';
import Input from '@Component/Input';

const AuthLogin = () => {
  const { refForm, onSubmitForm } = useAuthLoginContainer();
  return (
    <>
      <AuthWrapper wrapperStyle={{ flex: 1, width: '100%' }}>
        <View style={{ flex: 1, marginTop: Metrics.verticalScale(40), marginHorizontal: Metrics.scale(20) }}>
          <FormHandler ref={refForm} validateOnChange>
            {SCHEMAS => {
              return (
                <>
                  <View style={styles.inputWrapperWidth}>
                    <Input
                      {...SCHEMAS.email('Email')}
                      placeholder="Enter your email"
                      returnKeyType={'next'}
                    />
                  </View>
                  <View style={styles.inputWrapperWidth}>
                    <Input
                      {...SCHEMAS.password('Password')}
                      placeholder="Enter your password"
                      returnKeyType={'done'}
                      secureTextEntry={true}

                    />
                  </View>
                </>
              );
            }}
          </FormHandler>
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
  inputWrapperWidth: { width: '100%' },
  bottomWrapper: {
    position: 'absolute',
    bottom: 10,
    left: 0, right: 0
  }
});
