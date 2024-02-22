import Metrics from "@Utility/Metrics";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginHorizontal: Metrics.scale(20),
    flex: 1
  },
  designImage: {
    position: "absolute",
    right: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  circleWrapper: {
    zIndex: 0,
    bottom: -40,
    left: -30,
    position: "absolute",
  },
  designImageInnerWrapper: {
    zIndex: 1,
    bottom: -50,
    position: "absolute",
    height: 400,
    width: "100%",
  },
  contentStyle: {
    minHeight: "100%",
    width: "100%",
    alignSelf: "center",
  },
  bottomDesignImage: {
    width: "100%",
    height: "100%"
  },
  imageBackground:{
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1
  }
});
export default styles;
