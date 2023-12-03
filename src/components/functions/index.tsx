import React from 'react'
import Colours from '../../constants/Colours';
import { Appearance } from 'react-native';

export type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colours.light & keyof typeof Colours.dark
) {
  const isDarkTheme = Appearance.getColorScheme() === 'dark' ? 'dark' : 'light' ;
  const colorFromProps = props[isDarkTheme];
    if (colorFromProps) {  
      return colorFromProps;
    } else {    
      return Colours[isDarkTheme][colorName];
    }
}