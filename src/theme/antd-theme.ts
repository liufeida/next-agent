import type { ThemeConfig } from "antd";
import { defaultTheme } from "./themes";

// 保持向后兼容，导出默认主题
export const themeConfig: ThemeConfig = defaultTheme;

// 导出所有主题
export {
  cyanTheme,
  darkTheme,
  geekblueTheme,
  goldTheme,
  magentaTheme,
  orangeTheme,
  purpleTheme,
  volcanoTheme,
  redTheme,
  yellowTheme,
  blueTheme,
  themeMap,
  themeOptions,
} from "./themes";
