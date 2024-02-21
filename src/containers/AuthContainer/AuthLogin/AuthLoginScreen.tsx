import AuthDefaultHeading from "@Component/AuthDefaultHeading";
import AuthRouting from "@Component/AuthRouting";
import AuthWrapper from "@Component/AuthWrapper";
import ButtonWithInnerLoader from "@Component/ButtonWithInnerLoader";
import Metrics from "@Utility/Metrics";
import * as React from "react";
import { View } from "react-native";
import styles from "./style";
import useAuthLoginContainer from "./AuthLoginContainer";
import FormHandler from '@Component/FormHandler';
import Input from "@Component/Input";

export default function AuthLoginScreen() {
  const {handleOnForgotPassord, onSubmitForm, refForm, loginUserLoading} = useAuthLoginContainer();

  return (
    <>
      <AuthWrapper wrapperStyle={{ paddingTop: Metrics.verticalScale(140) }}>
        <AuthDefaultHeading
          title={"TEXT"}
          desc={"AFJA:ISJFJAS"}
        />
        <View style={styles.innerWrapper}>
          <View >
            <LoginForm refForm={refForm} />
            <View style={styles.forgotText}>
              <AuthRouting
                forgotText={"Forget Password"}
                onPress={handleOnForgotPassord}
              />
            </View>
          </View>
          <ButtonWithInnerLoader
            onPress={onSubmitForm}
            buttonText={"Login"}
            loading={loginUserLoading}
            btnStyle={styles.appBtnStyle}
          />
        </View>
      </AuthWrapper>
    </>
  );
}
interface ILoginFormProps {
    refForm: any;
}

const LoginForm = ({ refForm }: ILoginFormProps) => {
    return (
      <View style={styles.container}>
        <FormHandler ref={refForm} validateOnChange>
          {(SCHEMAS: any) => {
            return (
              <>
                {/* <AnimatedInputField
                  {...SCHEMAS.text("userName")}
                  label={LABELS.USERNAME}
                  value="testpro1"
                  returnKeyType={"next"}
                  autoCapitalize="none"
                  blurOnSubmit
                /> */}
                 <Input
                        {...SCHEMAS.text('parentId')}
                        placeholder="Enter your ID"
                        label="Parent Id"
                        returnKeyType={'next'}
                      />
                        <Input
                        {...SCHEMAS.text('password')}
                        placeholder="Enter your password"
                        label="Password"
                        returnKeyType={'done'}
                        secureTextEntry={true}
                        isPassword={true}
                      />
                {/* <AnimatedInputField
                  {...SCHEMAS.password("Password")}
                  label={LABELS.PASSWORD}
                  value="User123#"
                  returnKeyType={"done"}
                  autoCapitalize="none"
                  blurOnSubmit
                  isPassword={true}
                  onSubmitEditing={() => {
                    Keyboard.dismiss();
                  }}
                /> */}
              </>
            );
          }}
        </FormHandler>
      </View>
    );
  };