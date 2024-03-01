import AuthDefaultHeading from '@Component/AuthDefaultHeading';
import AuthRouting from '@Component/AuthRouting';
import AuthWrapper from '@Component/AuthWrapper';
import ButtonWithInnerLoader from '@Component/ButtonWithInnerLoader';
import Metrics from '@Utility/Metrics';
import * as React from 'react';
import {View} from 'react-native';
import styles from './style';
import useAuthLoginContainer from './AuthLoginContainer';
import FormHandler from '@Component/FormHandler';
import Input from '@Component/Input';
import { Email } from '@Asset/logo';
import AuthDefaultBottom from '@Component/AuthDefaultBottom/AuthDefaultBottom';
import { navigate } from '@Service/navigationService';
import NavigationRoutes from '@Navigator/NavigationRoutes';

export default function AuthLoginScreen() {
  const {handleOnForgotPassord, onSubmitForm, refForm, loginUserLoading} =
    useAuthLoginContainer();

  return (
    <>
      <AuthWrapper wrapperStyle={{paddingTop: Metrics.verticalScale(120)}}>
        <AuthDefaultHeading
          title={'Sign In'}
          desc={'Sign in to your account'}
        />
        <View style={styles.innerWrapper}>
          <View>
            <LoginForm refForm={refForm} />
            <View style={styles.forgotText}>
              <AuthRouting
                forgotText={'Forget Password?'}
                onPress={handleOnForgotPassord}
              />
            </View>
          </View>
         <View>
         <ButtonWithInnerLoader
            onPress={onSubmitForm}
            buttonText={'Login'}
            loading={loginUserLoading}
            btnStyle={styles.appBtnStyle}
          />
           <AuthDefaultBottom
                text={"Don't have an account?"}
                btnText={'SignUp'}
                action={() => {
                  navigate(NavigationRoutes.AUTH_STACK.SIGNUP);
                }}
              />
         </View>
        </View>
      </AuthWrapper>
    </>
  );
}
interface ILoginFormProps {
  refForm: any;
}

const LoginForm = ({refForm}: ILoginFormProps) => {
  return (
    <View style={styles.container}>
      <FormHandler ref={refForm} validateOnChange>
        {(SCHEMAS: any) => {
          return (
            <>
              {/* <Input
                {...SCHEMAS.email('parentEmail')}
                placeholder="Enter your Parent Email"
                returnKeyType={'next'}
                placeholderTextColor={'#fff'}
                rightIcon={<Email/>}
              /> */}
             {/* ID: 753 
            Password: test */}
              <Input
                {...SCHEMAS.text('parentId')}
                placeholder="Enter your Parent ID"
                returnKeyType={'next'}
                placeholderTextColor={'#fff'}
                rightIcon={<Email/>}
              />
              <Input
                {...SCHEMAS.password('password')}
                placeholder="Enter your password"
                returnKeyType={'done'}
                secureTextEntry={true}
                isPassword={true}
                placeholderTextColor={'#fff'}
              />
            </>
          );
        }}
      </FormHandler>
    </View>
  );
};
