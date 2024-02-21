import ButtonView from "@Component/ButtonView";
import CustomSpinner from "@Component/CustomSpinner";
import H4 from "@Component/Headings/H4";
import React from "react";
import styles from "./style";

interface IButtonWithInnerLoader {
  loading?: any;
  buttonText: string;
  onPress: any;
  btnStyle?: any;
  btnTextStyle?: any;
}

const ButtonWithInnerLoader = ({
  loading,
  buttonText,
  onPress,
  btnStyle,
  btnTextStyle,
}: IButtonWithInnerLoader) => {
  return (
    <ButtonView
      disabled={loading}
      style={[styles.submitBtnStyle, btnStyle]}
      onPress={onPress}
    >
      {loading ? (
        <CustomSpinner spinnerStyle={styles.spinnerStyle} />
      ) : (
        <H4 text={buttonText} style={[styles.btnText, btnTextStyle]} />
      )}
    </ButtonView>
  );
};

export default ButtonWithInnerLoader;
