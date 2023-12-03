import { Dimensions } from "react-native";
import { useThemeColor } from "../components/functions";
const { width, height } = Dimensions.get("window");

const backgroundColor = useThemeColor({ light: '#1E1F20', dark: '#FFFFFF' }, 'background');
const textColor = useThemeColor({ light: '#FFFFFF', dark: '#1E1F20' }, 'text');

export const colors = {
    primary: "#00996D",
    primaryDark2: "#24C16B",
    secondaryDark2: "#0C381F",
    appBule:'#5669FF',
    appBule2:'#3D56F0',
    appBule3:'#4A43EC',
    appBule4:'#5D56F3',
    lime: "#00BA63",
    green: "#66D59A",
    green2: '#29D697',
    darkgreen: '#008159',
    primaryDark: "#194868",
    white: "#FFFFFF",
    white2: "#ffffffb3",
    lightGray: "#eff2f5",
    lightRed: "#FFF1F0",
    lightyellow: "#FFF9EC",
    lightGreen: "#E6FEF0",
    gray: "#BEC1D2",
    darkgray2: "#C3C6C7",
    gray2: "#C1C3C5",
    lightBlue: '#95A9B8',
    secondary: "#606d87",
    darkgray: '#898C95',
    black: "#1E1F20",
    blue: '#42B0FF',
    cyan: '#46CDFB',
    cyan2: '#389cdf40',
    yellow: '#FFD573',
    orange: '#F59762',
    red: '#FF0000',
    peach: '#FF615F',
    red2: "#FF4134", 
    red3: "#F0635A", 
    purple: '#8e44ad',
    transparent: "transparent",
    backgroundColor,
    textColor
};
export const sizes = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    radius2: 30,
    padding: 24,
    padding1: 10,
    padding2: 12,
    padding3: 15,

    // icon sizes 
    icon:20,
    icon2:25,
    icon3:30,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 18,
    h3: 16,
    h4: 14,
    h5: 18,
    body1: 30,
    body2: 18,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};
export const fonts = {
    largeTitle: { fontFamily: "Roboto-Black", fontSize: sizes.largeTitle, lineHeight: 55 },
    largeTitleBold: { fontFamily: "Roboto-Black", fontSize: sizes.h2 },
    h1: { fontFamily: "Roboto-Black", fontSize: sizes.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: sizes.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: sizes.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: sizes.h4, lineHeight: 22 },
    body1: { fontFamily: "Roboto-Regular", fontSize: sizes.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: sizes.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: sizes.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: sizes.body4, lineHeight: 22 },
    body5: { fontFamily: "Roboto-Regular", fontSize: sizes.body5, lineHeight: 22 },
};

const appTheme = { colors, sizes, fonts };

export default appTheme;
