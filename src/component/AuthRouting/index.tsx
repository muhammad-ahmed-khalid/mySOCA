import ButtonView from "@Component/ButtonView";
import H5 from "@Component/Headings/H5";
import React from "react";
import { View } from "react-native";
import styles from "./style";

interface IAuthRouting {
  buttonText?: string;
  onPress: Function;
  style?: {};
  text?: string;
  forgotText?: string;
}

const  AuthRouting = ({
  buttonText = "",
  onPress,
  style,
  text,
  forgotText = "",
}: IAuthRouting) => {
  return (
    <View style={[styles.container, style]}>
      {text && <H5 text={text} style={styles.text} />}
      <ButtonView onPress={onPress} style={styles.buttonWrapper}>
        <H5 text={forgotText} style={styles.forgotText} />
       {buttonText && <H5 text={buttonText} style={styles.buttonText} />} 
      </ButtonView>
    </View>
  );
};

export default AuthRouting;