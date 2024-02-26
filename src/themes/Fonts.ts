import {APP_PRIMARY_TEXT} from "./Colors";
import Metrics from "../utility/Metrics";
import { TextStyle } from "react-native";
export default class Fonts {
  static FontFamily = {
    default: "Montserrat",
    secondary : "PlusJakartaSans"
  };

  static Type = {
    Bold: "Bold",
    ExtraLight: "ExtraLight",
    Light: "Light",
    Medium: "Medium",
    Regular: "Regular",
    SemiBold: "SemiBold",
    Thin: "Thin",
  };

  static Size = {
    xxxxSmall : 10,
    xxxSmall: 12,
    xxSmall: 13,
    xSmall: 14,
    small: 15,
    normal: 16,
    medium: 18,
    mLarge: 20,
    large: 22,
    xLarge: 24,
    xxLarge: 28,
    xxxLarge: 32,
    huge: 34,
    xhuge: 37,
    xxhuge: 40,
    xxxhuge: 43,
  };

  static font = (
    type: string = Fonts.Type.Regular,
    size: number = Fonts.Size.normal,
    color: string = APP_PRIMARY_TEXT,
    family: string = Fonts.FontFamily.default,
  ): TextStyle => {
    return {
      fontFamily: family + "-" + type,
      fontSize: Metrics.generatedFontSize(size),
      color,
    };
  };

  // Fonts;
  static Regular = (
    size: number = Fonts.Size.normal,
    color = APP_PRIMARY_TEXT,
    family=Fonts.FontFamily.default
  ) => {
    return Fonts.font(Fonts.Type.Regular, size, color,family);
  };
  static Bold = (
    size: number = Fonts.Size.normal,
    color = APP_PRIMARY_TEXT,
    family=Fonts.FontFamily.default
  ) => {
    return Fonts.font(Fonts.Type.Bold, size, color,family);
  };
  static SemiBold = (
    size: number = Fonts.Size.normal,
    color = APP_PRIMARY_TEXT,
    family=Fonts.FontFamily.default
  ) => {
    return Fonts.font(Fonts.Type.SemiBold, size, color,family);
  };
  static Light = (
    size: number = Fonts.Size.normal,
    color = APP_PRIMARY_TEXT,
    family=Fonts.FontFamily.default
  ) => {
    return Fonts.font(Fonts.Type.Light, size, color,family);
  };
  static ExtraLight = (
    size: number = Fonts.Size.normal,
    color = APP_PRIMARY_TEXT,
    family=Fonts.FontFamily.default
  ) => {
    return Fonts.font(Fonts.Type.ExtraLight, size, color,family);
  };
  static Medium = (
    size: number = Fonts.Size.normal,
    color = APP_PRIMARY_TEXT,
    family=Fonts.FontFamily.default
  ) => {
    return Fonts.font(Fonts.Type.Medium, size, color,family);
  };
  static Thin = (
    size: number = Fonts.Size.normal,
    color = APP_PRIMARY_TEXT,
    family=Fonts.FontFamily.default
  ) => {
    return Fonts.font(Fonts.Type.Thin, size, color,family);
  };
}
