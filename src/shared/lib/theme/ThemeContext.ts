import { createContext } from "react";

export type TTheme = "dark" | "light";

export interface ThemeContextType {
  theme: TTheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);
