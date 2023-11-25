import {RightArrowLarge} from '@Asset/logo';
import AuthWrapper from '@Component/AuthWrapper/AuthWrapper';
import AppButton from '@Component/Buttons/AppButton';
import FormHandler from '@Component/FormHandler';
import {Colors} from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {Platform, StyleSheet, View, Keyboard, ScrollView} from 'react-native';
import Input from '@Component/Input';
import AuthDefaultHeading from '@Component/AuthDefaultHeading/AuthDefaultHeading';
import AuthDefaultBottom from '@Component/AuthDefaultBottom/AuthDefaultBottom';
import {navigate} from '@Service/navigationService';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import useAuthSignupContainer from './AuthSignupContainer';
import H7 from '@Component/Headings/H7';

const AuthSignup = () => {
  const {onSubmitForm, refForm} = useAuthSignupContainer();
  return (
    <>
      {/* <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1}}
    ></KeyboardAvoidingView> */}
      <AuthWrapper wrapperStyle={{flex: 1, width: '100%'}}>
        <View
          style={{
            flex: 1,
            // marginTop: Metrics.verticalScale(40),
            // marginHorizontal: Metrics.scale(20),
            width: '100%',
            backgroundColor: 'white',
            borderTopLeftRadius: Metrics.doubleBaseMargin,
            borderTopRightRadius: Metrics.doubleBaseMargin,
            marginTop: Metrics.verticalScale(30),
            shadowColor: Colors.BLACK,
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.29,
            shadowRadius: 4.65,
            elevation: 1,
          }}>
          <FormHandler ref={refForm} validateOnChange>
            {SCHEMAS => {
              return (
                <View style={{marginTop: Metrics.doubleBaseMargin}}>
                  <AuthDefaultHeading title="Login To Your Account" />
                  <View style={{marginTop: Metrics.baseMargin}}>
                    <View style={styles.inputWrapperWidth}>
                      <Input
                        {...SCHEMAS.text('parentId')}
                        placeholder="Enter your ID"
                        label="Parent Id"
                        returnKeyType={'next'}
                      />
                    </View>
                    <View style={styles.inputWrapperWidth}>
                      <Input
                        {...SCHEMAS.text('parentName')}
                        placeholder="Enter your ID"
                        label="Parent Name"
                        returnKeyType={'next'}
                      />
                    </View>
                    <View style={styles.inputWrapperWidth}>
                      <Input
                        {...SCHEMAS.password('password')}
                        placeholder="Enter your password"
                        label="Password"
                        returnKeyType={'next'}
                        secureTextEntry={false}
                      />
                    </View>
                    <View style={styles.inputWrapperWidth}>
                      <Input
                        {...SCHEMAS.confirmPassword('confirmPassword')}
                        placeholder="Enter your confirm password"
                        label="Confirm Password"
                        returnKeyType={'done'}
                        secureTextEntry={false}
                      />
                    </View>
                  </View>
                </View>
              );
            }}
          </FormHandler>
          <View style={styles.bottomWrapper}>
            <AppButton
              title={'SignUp'}
              // imageSource={RightArrowLarge}
              // iconAfterText={true}
              onPress={() => onSubmitForm()}
              textStyle={{color: Colors.WHITE}}
              style={{opacity: 0.9, marginTop: 10}}
            />
            <View
              style={{
                marginTop: Metrics.smallMargin,
                alignItems: 'center',
              }}>
              <AuthDefaultBottom
                text={'Already have an account'}
                btnText={'Login'}
                action={() => {
                  navigate(NavigationRoutes.AUTH_STACK.LOGIN);
                }}
              />
              <H7
                text="copyright ©️ 2023 SOCA"
                style={{
                  marginTop: -5,
                  ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.GREY),
                }}
              />
            </View>
          </View>
        </View>
      </AuthWrapper>
    </>
  );
};

export default AuthSignup;

const styles = StyleSheet.create({
  Input: {
    marginBottom: Metrics.verticalScale(60),
  },
  underLineBTnStyle: {
    ...Fonts.SemiBold(Fonts.Size.medium, Colors.BLUE_LINK),
  },
  inputWrapperWidth: {
    width: '80%',
    alignSelf: 'center',
    marginTop: Metrics.smallMargin,
  },
  bottomWrapper: {
    position: 'absolute',
    // bottom: 20,
    top: 420,
    width: '80%',
    alignSelf: 'center',
  },
});
