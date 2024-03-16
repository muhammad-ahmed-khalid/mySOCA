// import {
//   HidePassword,
//   MapHome,
//   RightArrowLarge,
//   ShowPassword,
// } from '@Asset/logo';
// import AuthWrapper from '@Component/AuthWrapper';
// import AppButton from '@Component/Buttons/AppButton';
// import FormHandler from '@Component/FormHandler';
// import {Colors} from '@Theme/Colors';
// import Fonts from '@Theme/Fonts';
// import Metrics from '@Utility/Metrics';
// import React from 'react';
// import {
//   Platform,
//   StyleSheet,
//   View,
//   Keyboard,
//   ScrollView,
//   TouchableOpacity,
//   Dimensions,
// } from 'react-native';
// import Input from '@Component/Input';
// import AuthDefaultHeading from '@Component/AuthDefaultHeading';
// import AuthDefaultBottom from '@Component/AuthDefaultBottom/AuthDefaultBottom';
// import {navigate} from '@Service/navigationService';
// import NavigationRoutes from '@Navigator/NavigationRoutes';
// import useAuthSignupContainer from './AuthSignupContainer';
// import H7 from '@Component/Headings/H7';

// const AuthSignup = () => {
//   const {onSubmitForm, refForm} = useAuthSignupContainer();
//   const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
//   const [isPassVisible, setIsPassVisible] = React.useState(false);
//   const {width, height} = Dimensions.get('window');
//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible(prev => !prev);
//   };
//   const togglePassVisibility = () => {
//     setIsPassVisible(prev => !prev);
//   };
//   return (
//     <>
//       {/* <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : null}
//       style={{flex: 1}}
//     ></KeyboardAvoidingView> */}
//       <AuthWrapper wrapperStyle={{flex: 1, width: '100%'}}>
//         <View
//           style={{
//             flex: 1,
//             // marginTop: Metrics.verticalScale(40),
//             // marginHorizontal: Metrics.scale(20),
//             width: '100%',
//             backgroundColor: 'white',
//             borderTopLeftRadius: Metrics.doubleBaseMargin,
//             borderTopRightRadius: Metrics.doubleBaseMargin,
//             marginTop: Metrics.verticalScale(30),
//             shadowColor: Colors.BLACK,
//             shadowOffset: {
//               width: 0,
//               height: 3,
//             },
//             shadowOpacity: 0.29,
//             shadowRadius: 4.65,
//             elevation: 1,
//           }}>
//           <FormHandler ref={refForm} validateOnChange>
//             {SCHEMAS => {
//               return (
//                 <View style={{marginTop: Metrics.doubleBaseMargin}}>
//                   <AuthDefaultHeading title="Signup To Your Account" />
//                   <View style={{marginTop: Metrics.baseMargin}}>
//                     <View style={styles.inputWrapperWidth}>
//                       <Input
//                         {...SCHEMAS.text('parentId')}
//                         placeholder="Enter Your Parent ID"
//                         label="Parent Id"
//                         returnKeyType={'next'}
//                       />
//                     </View>
//                     {/* <View style={styles.inputWrapperWidth}>
//                       <Input
//                         {...SCHEMAS.text('parentName')}
//                         placeholder="Enter Parent Name"
//                         label="Parent Name"
//                         returnKeyType={'next'}
//                       />
//                     </View> */}
//                     <View style={styles.inputWrapperWidth}>
//                       <Input
//                         {...SCHEMAS.password('password')}
//                         placeholder="Enter your password"
//                         label="Password"
//                         returnKeyType={'next'}
//                         secureTextEntry={isPasswordVisible ? false : true}
//                       />
//                       <TouchableOpacity
//                         onPress={togglePasswordVisibility}
//                         style={
//                           width <= 340
//                             ? styles.iconFourInchContainer
//                             : width >= 380
//                             ? styles.iconSixInchContainer
//                             : styles.iconContainer
//                         }>
//                         {isPasswordVisible ? (
//                           <ShowPassword />
//                         ) : (
//                           <HidePassword />
//                         )}
//                       </TouchableOpacity>
//                     </View>
//                     <View style={styles.inputWrapperWidth}>
//                       <Input
//                         {...SCHEMAS.confirmPassword('confirmPassword')}
//                         placeholder="Enter your confirm password"
//                         label="Confirm Password"
//                         returnKeyType={'done'}
//                         secureTextEntry={isPassVisible ? false : true}
//                       />
//                       <TouchableOpacity
//                         onPress={togglePassVisibility}
//                         style={
//                           width <= 340
//                             ? styles.iconFourInchContainer
//                             : width >= 380
//                             ? styles.iconSixInchContainer
//                             : styles.iconContainer
//                         }>
//                         {isPassVisible ? <ShowPassword /> : <HidePassword />}
//                       </TouchableOpacity>
//                     </View>
//                   </View>
//                 </View>
//               );
//             }}
//           </FormHandler>
//           <View style={styles.bottomWrapper}>
//             <AppButton
//               title={'SignUp'}
//               // imageSource={RightArrowLarge}
//               // iconAfterText={true}
//               onPress={() => onSubmitForm()}
//               textStyle={{color: Colors.WHITE}}
//               style={{opacity: 0.9, marginTop: 10}}
//             />
//             <View
//               style={{
//                 marginTop: Metrics.smallMargin,
//                 alignItems: 'center',
//               }}>
//               <AuthDefaultBottom
//                 text={'Already have an account'}
//                 btnText={'Login'}
//                 action={() => {
//                   navigate(NavigationRoutes.AUTH_STACK.LOGIN);
//                 }}
//               />
//               <H7
//                 text="copyright ©️ 2023 SOCA"
//                 style={{
//                   marginTop: -5,
//                   ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.GREY),
//                 }}
//               />
//             </View>
//           </View>
//         </View>
//       </AuthWrapper>
//     </>
//   );
// };

// export default AuthSignup;

// const styles = StyleSheet.create({
//   Input: {
//     marginBottom: Metrics.verticalScale(60),
//   },
//   underLineBTnStyle: {
//     ...Fonts.SemiBold(Fonts.Size.medium, Colors.BLUE_LINK),
//   },
//   inputWrapperWidth: {
//     width: '80%',
//     alignSelf: 'center',
//     marginTop: Metrics.smallMargin,
//   },
//   bottomWrapper: {
//     position: 'absolute',
//     // bottom: 20,
//     top: 320,
//     width: '80%',
//     alignSelf: 'center',
//   },
//   iconContainer: {
//     // padding: 10,
//     position: 'absolute',
//     left: 265,
//     right: 0,
//     top: 20,
//     bottom: 0,
//   },
//   iconFourInchContainer: {
//     // padding: 10,
//     position: 'absolute',
//     left: 225,
//     right: 0,
//     top: 15,
//     bottom: 0,
//   },
//   iconSixInchContainer: {
//     // padding: 10,
//     position: 'absolute',
//     left: 300,
//     right: 0,
//     top: 20,
//     bottom: 0,
//   },
// });

import AuthDefaultHeading from '@Component/AuthDefaultHeading';
import AuthRouting from '@Component/AuthRouting';
import AuthWrapper from '@Component/AuthWrapper';
import ButtonWithInnerLoader from '@Component/ButtonWithInnerLoader';
import Metrics from '@Utility/Metrics';
import * as React from 'react';
import {View} from 'react-native';
import styles from './style';
import FormHandler from '@Component/FormHandler';
import Input from '@Component/Input';
import { Email } from '@Asset/logo';
import AuthDefaultBottom from '@Component/AuthDefaultBottom/AuthDefaultBottom';
import { navigate } from '@Service/navigationService';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import useAuthSignupContainer from './AuthSignupContainer';

export default function AuthLoginScreen() {
  const {onSubmitForm, refForm, loginUserLoading} =
  useAuthSignupContainer();

  return (
    <>
      <AuthWrapper wrapperStyle={{paddingTop: Metrics.verticalScale(120)}}>
        <AuthDefaultHeading
          title={'Sign Up'}
          desc={'Create an account'}
        />
        <View style={styles.innerWrapper}>
          <View>
            <LoginForm refForm={refForm} />
          </View>
         <View>
         <ButtonWithInnerLoader
            onPress={onSubmitForm}
            buttonText={'SignUp'}
            loading={loginUserLoading}
            btnStyle={styles.appBtnStyle}
          />
           <AuthDefaultBottom
                text={"Already have an account?"}
                btnText={'Sign In'}
                action={() => {
                  navigate(NavigationRoutes.AUTH_STACK.LOGIN);
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
              <Input
                 {...SCHEMAS.text('parentId')}
                placeholder="Enter your Email"
                value='test@test.com'
                returnKeyType={'next'}
                placeholderTextColor={'#fff'}
                rightIcon={<Email/>}
              />
                 <Input
                 {...SCHEMAS.text('parentName')}
                placeholder="Enter your Parent Name"
                value='Ahmed'
                returnKeyType={'next'}
                placeholderTextColor={'#fff'}
              />
             <Input
              {...SCHEMAS.password('password')}
                placeholder="Enter your password"
                returnKeyType={'next'}
                value='1234'
                secureTextEntry={true}
                isPassword={true}
                placeholderTextColor={'#fff'}
              />
              <Input
                 {...SCHEMAS.password('confirmPassword')}
                placeholder="Confirm password"
                returnKeyType={'done'}
                value='1234'
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
