import React from 'react'
import { View as DefaultView } from 'react-native';
import Colours from '../../constants/Colours';
import { useThemeColor, ThemeProps } from '../functions';

type ViewProps = ThemeProps & DefaultView['props'];

const AppView = ( props: ViewProps) => {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
    return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />
}

export default AppView