import Metrics from "@Utility/Metrics";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  forgotText: {
    alignSelf: "flex-end",
    marginTop: Metrics.verticalScale(25),
  },
  appBtnStyle: {
    width: "100%",
    alignSelf: "center",
  },
  innerWrapper: {
    width: "100%",
    justifyContent: "space-between",
    flex: 1
  },
  container:{
    marginBottom: 0
  }
});
export default styles;
