export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export type ThemeContextProps = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};