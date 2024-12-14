import "styled-components";
import { ThemeType } from "../styles/theme";

declare module "styled-components" {
  export type DefaultTheme = ThemeType;
}
