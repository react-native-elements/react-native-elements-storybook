import { Dimensions, Platform } from "react-native";

// Device information
const iPhoneXAspectRatio = 2.16;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const isSmallScreen = deviceHeight < 700;
const isXSmallScreen = deviceHeight < 570;
const platform = Platform.OS;
const isPad = Platform.isPad;
const isIOS = platform === "ios";
const isAndroid = platform === "android";
const hasiPhoneXAspectRatio = () => {
  if (platform === "ios") {
    const screenAspectRatio = Number((deviceHeight / deviceWidth).toFixed(2));
    return screenAspectRatio === iPhoneXAspectRatio;
  }
  return false;
};

const isIphoneX =
  (platform === "ios" && (deviceHeight === 812 || deviceWidth === 812)) ||
  hasiPhoneXAspectRatio() ||
  Platform.isPad;

// Components
const actionButtonHeight = isIphoneX ? 90 : 50;
const actionButtonPaddingBottom = isIphoneX ? 30 : 10;

export default {
  // Device
  iPhoneXAspectRatio,
  deviceHeight,
  deviceWidth,
  isSmallScreen,
  isXSmallScreen,
  platform,
  isPad,
  isIOS,
  isAndroid,
  isIphoneX,

  // Components
  actionButtonHeight,
  actionButtonPaddingBottom,
};
