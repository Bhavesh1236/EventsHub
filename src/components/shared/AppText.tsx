import React from 'react'
import { Text as DefaultText } from 'react-native';
import Colours from '../../constants/Colours';
import { useThemeColor,ThemeProps } from '../functions';

type TextProps = ThemeProps & DefaultText['props'];

const AppText = (props: TextProps) => {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
    return <DefaultText style={[{ color, fontFamily:'Roboto-Medium' }, style]} {...otherProps} />;
}

export default AppText