import { Colors, Fonts } from "@Theme/index";
import Metrics from "@Utility/Metrics";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: Metrics.scale(0),
        flexDirection: "row",
      },
      buttonText: {
        ...Fonts.Medium(Fonts.Size.small, Colors.Colors.DARK),
      },
      text: {
        ...Fonts.Medium(Fonts.Size.small, Colors.Colors.WARM_GREY),
      },
      forgotText: {
        ...Fonts.Regular(Fonts.Size.xSmall, Colors.Colors.DARK),
        marginTop: Metrics.verticalScale(-5),
        textDecorationLine: "underline", 
      },
      buttonWrapper:{ flexDirection: "row" }
});
export default styles;
