import React, { createContext, useState, useEffect } from 'react';
import { Appearance } from 'react-native';

import LightTheme from './themes/LightTheme';
import DarkTheme from './themes/DarkTheme';

interface Theme {
  backgroundColor: string;
  textColor: string;
}

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: LightTheme,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(
    Appearance.getColorScheme() === 'dark' ? DarkTheme : LightTheme
  );

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === LightTheme ? DarkTheme : LightTheme));
  };

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setTheme(colorScheme === 'dark' ? DarkTheme : LightTheme);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
