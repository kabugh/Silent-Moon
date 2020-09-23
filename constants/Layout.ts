import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
