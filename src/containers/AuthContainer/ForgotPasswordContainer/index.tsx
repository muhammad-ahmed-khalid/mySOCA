import AuthDefaultHeading from "@Component/AuthDefaultHeading";
import AuthWrapper from "@Component/AuthWrapper";
import ButtonWithInnerLoader from "@Component/ButtonWithInnerLoader";
import * as React from "react";
import { View } from "react-native";
import useForgotPasswordContainer from "./ForgotPasswordContainer";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import styles from "./style";

export default function ForgotPasswordScreen() {
  const { onSubmitForm, refForm } = useForgotPasswordContainer();

  return (
    <>
      <AuthWrapper>
        <AuthDefaultHeading
          title={"COMMON_TEXT.FORGOT_PASSWORD_TITLE"}
          desc={"COMMON_TEXT.ENTER_EMAIL_TO_CONTINUE"}
        />
        <View style={styles.innerWrapper}>
          <ForgotPasswordForm refForm={refForm} />
          <ButtonWithInnerLoader
            onPress={onSubmitForm}
            buttonText={"BUTTON_TEXT.CONTINUE"}
            loading={false}
            btnStyle={styles.appBtnStyle}
          />
        </View>
      </AuthWrapper>
    </>
  );
}
