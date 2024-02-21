import { Colors, Fonts } from "@Theme/index";
import Metrics from "@Utility/Metrics";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    marginTop: Metrics.verticalScale(35),
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    alignSelf: "center",

  },
  textCenter: {
    textAlign: "center",
    ...Fonts.SemiBold(Fonts.Size.xLarge, Colors.Colors.DARK),
    marginHorizontal: 20,
  },
  desc: {
    textAlign: "center",
    color: Colors.Colors.WARM_GREY,
    lineHeight: Metrics.verticalScale(26),
    ...Fonts.Regular(Fonts.Size.xSmall, Colors.Colors.MEDIUM_GREY),
    marginTop: Metrics.verticalScale(5),
  },
});
export default styles;
