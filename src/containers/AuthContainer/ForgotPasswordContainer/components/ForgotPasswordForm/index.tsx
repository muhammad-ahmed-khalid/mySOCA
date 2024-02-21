import AnimatedInputField from "@Component/AnimatedInput";
import FormHandler from "@Component/FormHandler";
import Input from "@Component/Input";
import { LABELS } from "@Constants/common";
import Metrics from "@Utility/Metrics";
import React from "react";
import { StyleSheet, View } from "react-native";

interface IForgotPasswordForm {
  refForm: any;
}

const ForgotPasswordForm = ({ refForm }: IForgotPasswordForm) => {
  return (
    <View style={styles.container}>
      <FormHandler ref={refForm} validateOnChange>
        {(SCHEMAS: any) => {
          return (
            // <AnimatedInputField
            //   {...SCHEMAS.email("Email")}
            //   label={LABELS.EMAIL}
            //   returnKeyType={"next"}
            //   autoCapitalize="none"
            //   blurOnSubmit
            // />
            <Input
            {...SCHEMAS.text('parentId')}
            placeholder="Enter your ID"
            label="Parent Id"
            returnKeyType={'next'}
          />
          );
        }}
      </FormHandler>
    </View>
  );
};
export default ForgotPasswordForm;

const styles = StyleSheet.create({
  container: {
    marginVertical: Metrics.verticalScale(10),
    marginBottom: 0,
  },
});
