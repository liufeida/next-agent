import type { ThemeConfig } from "antd";

export const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: "#7cb305", // lime-6，主色
    fontSize: 16,
  },
  components: {
    Button: {
      primaryColor: "#fff",
      colorPrimary: "#7cb305", // lime-6
      colorPrimaryHover: "#a0d911", // lime-5
    },
    Table: {
      headerBg: "#f4ffb8", // lime-0
    },
    Menu: {
      itemSelectedColor: "#7cb305", // lime-6
      subMenuItemSelectedColor: "#fff",
    },
    Checkbox: {
      lineHeight: 1.8,
    },
    Form: {
      itemMarginBottom: 8,
      labelFontSize: 18,
      verticalLabelMargin: 2,
    },
    Radio: {
      wrapperMarginInlineEnd: 80,
    },
    Pagination: {
      colorPrimary: "#7cb305", // lime-6
      itemActiveBg: "#f4ffb8", // lime-0
    },
  },
  hashed: false,
};
