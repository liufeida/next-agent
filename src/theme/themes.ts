import type { ThemeConfig } from "antd";

/**
 * 默认主题（青柠色系）
 */
export const defaultTheme: ThemeConfig = {
  token: {
    colorPrimary: "#7cb305", // lime-6，主色
    colorPrimaryHover: "#a0d911", // lime-5
    colorPrimaryActive: "#5b8c00", // lime-7
    colorPrimaryTextHover: "#a0d911",
    colorPrimaryText: "#7cb305",
    colorPrimaryTextActive: "#5b8c00",
    fontSize: 16,
    colorBgLayout: "#f9f9f9",
    colorBgContainer: "#ffffff",
    colorText: "#171717",
    colorTextSecondary: "#555555",
    colorLink: "#7cb305",
    colorLinkHover: "#a0d911",
    colorLinkActive: "#5b8c00",
    colorInfo: "#7cb305",
    colorSuccess: "#7cb305",
    colorSuccessHover: "#a0d911",
    colorSuccessActive: "#5b8c00",
    colorWarning: "#d48806",
    colorWarningHover: "#faad14",
    colorWarningActive: "#ad6800",
    colorError: "#ff4d4f",
    colorErrorHover: "#ff7875",
    colorErrorActive: "#d9363e",
  },
  components: {
    Button: {
      primaryColor: "#fff",
      colorPrimary: "#7cb305", // lime-6
      colorPrimaryHover: "#a0d911", // lime-5
      colorPrimaryActive: "#5b8c00", // lime-7
      defaultColor: "#7cb305",
      defaultHoverColor: "#a0d911",
      defaultActiveColor: "#5b8c00",
      defaultBorderColor: "#7cb305",
      defaultHoverBorderColor: "#a0d911",
      defaultActiveBorderColor: "#5b8c00",
    },
    Table: {
      headerBg: "#f4ffb8", // lime-1
      headerColor: "#5b8c00", // lime-7
      rowHoverBg: "#fcffe6", // lime-0
      borderColor: "#eaff8f", // lime-2
    },
    Menu: {
      // 浅色菜单 tokens
      itemSelectedColor: "#7cb305",
      itemHoverColor: "#a0d911",
      itemSelectedBg: "#f4ffb8",
      itemHoverBg: "#fcffe6",
      itemBg: "#ffffff",
      subMenuItemSelectedColor: "#7cb305",
      // 暗色菜单 tokens
      darkItemBg: "#1f2937",
      darkItemHoverBg: "#404e4e",
      darkItemHoverColor: "#14d4c9",
      darkItemSelectedBg: "#4c545f",
      darkItemSelectedColor: "#fff",
      darkSubMenuItemBg: "#1f2937",
      darkPopupBg: "#1f2937",
    },
    Checkbox: {
      lineHeight: 1.8,
      colorPrimary: "#7cb305",
    },
    Form: {
      itemMarginBottom: 8,
      labelFontSize: 18,
      verticalLabelMargin: 2,
    },
    Radio: {
      wrapperMarginInlineEnd: 80,
      colorPrimary: "#7cb305",
    },
    Pagination: {
      colorPrimary: "#7cb305", // lime-6
      itemActiveBg: "#f4ffb8", // lime-1
    },
    Input: {
      activeBorderColor: "#7cb305",
      hoverBorderColor: "#a0d911",
    },
    Select: {
      optionSelectedBg: "#f4ffb8", // lime-1
      colorPrimary: "#7cb305",
    },
    DatePicker: {
      colorPrimary: "#7cb305",
      cellHoverBg: "#fcffe6",
      cellActiveWithRangeBg: "#f4ffb8",
    },
    Switch: {
      colorPrimary: "#7cb305",
      colorPrimaryHover: "#a0d911",
    },
    Tag: {
      colorPrimary: "#7cb305",
    },
    Alert: {
      colorInfo: "#7cb305",
      colorInfoBg: "#fcffe6",
      colorInfoBorder: "#eaff8f",
      colorSuccess: "#7cb305",
      colorSuccessBg: "#fcffe6",
      colorSuccessBorder: "#eaff8f",
      colorWarning: "#d48806",
      colorWarningBg: "#fff7e6",
      colorWarningBorder: "#ffd591",
      colorError: "#ff4d4f",
      colorErrorBg: "#fff1f0",
      colorErrorBorder: "#ffa39e",
    },
    Progress: {
      colorSuccess: "#7cb305",
    },
    Steps: {
      colorPrimary: "#7cb305",
      colorSuccess: "#7cb305",
    },
    Breadcrumb: {
      colorPrimary: "#7cb305",
    },
  },
  hashed: false,
};

/**
 * 暗夜主题
 */
export const darkTheme: ThemeConfig = {
  token: {
    colorPrimary: "#7cb305", // lime-6，暗夜也用青柠主色
    colorPrimaryHover: "#a0d911",
    colorPrimaryActive: "#5b8c00",
    fontSize: 16,
    colorBgLayout: "#0a0a0a",
    colorBgContainer: "#141414",
    colorBgElevated: "#1f1f1f",
    colorText: "#ffffff",
    colorTextSecondary: "#a0a0a0",
    colorBorder: "#333333",
    colorBorderSecondary: "#262626",
    colorSplit: "#262626",
    colorLink: "#7cb305",
    colorLinkHover: "#a0d911",
    colorLinkActive: "#5b8c00",
    colorInfo: "#7cb305",
    colorSuccess: "#7cb305",
    colorSuccessHover: "#a0d911",
    colorSuccessActive: "#5b8c00",
    colorWarning: "#d48806",
    colorWarningHover: "#faad14",
    colorWarningActive: "#ad6800",
    colorError: "#ff4d4f",
    colorErrorHover: "#ff7875",
    colorErrorActive: "#d9363e",
  },
  components: {
    Button: {
      primaryColor: "#fff",
      colorPrimary: "#7cb305",
      colorPrimaryHover: "#a0d911",
      colorPrimaryActive: "#5b8c00",
      defaultColor: "#ffffff",
      defaultBg: "#1f1f1f",
      defaultBorderColor: "#333333",
      defaultHoverColor: "#a0d911",
      defaultHoverBg: "#2a2a2a",
      defaultHoverBorderColor: "#a0d911",
    },
    Table: {
      headerBg: "#1a1a1a",
      headerColor: "#a0d911",
      rowHoverBg: "#1f1f1f",
      borderColor: "#333333",
      headerBorderRadius: 0,
      cellPaddingBlock: 16,
    },
    Menu: {
      // 浅色菜单 tokens
      itemSelectedColor: "#a0d911",
      itemHoverColor: "#a0d911",
      itemSelectedBg: "#1f1f1f",
      itemHoverBg: "#2a2a2a",
      itemBg: "#0a0a0a",
      subMenuItemSelectedColor: "#a0d911",
      // 暗色菜单 tokens
      darkItemBg: "#0a0a0a",
      darkItemHoverBg: "#1f1f1f",
      darkItemHoverColor: "#a0d911",
      darkItemSelectedBg: "#1f1f1f",
      darkItemSelectedColor: "#a0d911",
      darkSubMenuItemBg: "#0a0a0a",
      darkPopupBg: "#0a0a0a",
    },
    Checkbox: {
      lineHeight: 1.8,
      colorPrimary: "#7cb305",
    },
    Form: {
      itemMarginBottom: 8,
      labelFontSize: 18,
      verticalLabelMargin: 2,
      labelColor: "#ffffff",
    },
    Radio: {
      wrapperMarginInlineEnd: 80,
      colorPrimary: "#7cb305",
    },
    Pagination: {
      colorPrimary: "#7cb305",
      itemActiveBg: "#1a1a1a",
      itemBg: "#1f1f1f",
    },
    Input: {
      colorBgContainer: "#1f1f1f",
      colorText: "#ffffff",
      activeBg: "#2a2a2a",
      hoverBg: "#2a2a2a",
      activeBorderColor: "#7cb305",
      hoverBorderColor: "#a0d911",
    },
    Select: {
      optionSelectedBg: "#1f1f1f",
      selectorBg: "#1f1f1f",
      colorText: "#ffffff",
      colorPrimary: "#7cb305",
    },
    DatePicker: {
      colorPrimary: "#7cb305",
      cellHoverBg: "#2a2a2a",
      cellActiveWithRangeBg: "#1f1f1f",
    },
    Switch: {
      colorPrimary: "#7cb305",
      colorPrimaryHover: "#a0d911",
    },
    Tag: {
      colorPrimary: "#7cb305",
    },
    Alert: {
      colorInfo: "#7cb305",
      colorInfoBg: "#1f1f1f",
      colorInfoBorder: "#333333",
      colorSuccess: "#7cb305",
      colorSuccessBg: "#1f1f1f",
      colorSuccessBorder: "#333333",
      colorWarning: "#d48806",
      colorWarningBg: "#1f1f1f",
      colorWarningBorder: "#333333",
      colorError: "#ff4d4f",
      colorErrorBg: "#1f1f1f",
      colorErrorBorder: "#333333",
    },
    Progress: {
      colorSuccess: "#7cb305",
    },
    Steps: {
      colorPrimary: "#7cb305",
      colorSuccess: "#7cb305",
    },
    Breadcrumb: {
      colorPrimary: "#7cb305",
    },
  },
  hashed: false,
};

/**
 * 酱紫主题
 */
export const purpleTheme: ThemeConfig = {
  token: {
    colorPrimary: "#722ed1", // 紫色主色
    colorPrimaryHover: "#9254de",
    colorPrimaryActive: "#531dab",
    fontSize: 16,
    colorBgLayout: "#faf5ff",
    colorBgContainer: "#ffffff",
    colorText: "#1a1a2e",
    colorTextSecondary: "#6b6b8d",
    colorLink: "#722ed1",
    colorLinkHover: "#9254de",
    colorLinkActive: "#531dab",
    colorInfo: "#722ed1",
    colorInfoHover: "#9254de",
    colorInfoActive: "#531dab",
    colorSuccess: "#722ed1",
    colorSuccessHover: "#9254de",
    colorSuccessActive: "#531dab",
    colorWarning: "#9254de",
    colorWarningHover: "#b37feb",
    colorWarningActive: "#531dab",
    colorError: "#ff4d4f",
    colorErrorHover: "#ff7875",
    colorErrorActive: "#d9363e",
  },
  components: {
    Button: {
      primaryColor: "#fff",
      colorPrimary: "#722ed1",
      colorPrimaryHover: "#9254de",
      colorPrimaryActive: "#531dab",
      defaultColor: "#722ed1",
      defaultHoverColor: "#9254de",
      defaultActiveColor: "#531dab",
      defaultBorderColor: "#722ed1",
      defaultHoverBorderColor: "#9254de",
      defaultActiveBorderColor: "#531dab",
    },
    Table: {
      headerBg: "#f9f0ff",
      headerColor: "#531dab",
      rowHoverBg: "#f0e6ff",
      borderColor: "#d3adf7",
    },
    Menu: {
      // 浅色菜单 tokens
      itemSelectedColor: "#722ed1",
      itemHoverColor: "#9254de",
      itemSelectedBg: "#f9f0ff",
      itemHoverBg: "#f0e6ff",
      itemBg: "#ffffff",
      subMenuItemSelectedColor: "#722ed1",
      // 暗色菜单 tokens
      darkItemBg: "#1a1a2e",
      darkItemHoverBg: "#2d1f4e",
      darkItemHoverColor: "#b37feb",
      darkItemSelectedBg: "#3d2766",
      darkItemSelectedColor: "#fff",
      darkSubMenuItemBg: "#1a1a2e",
      darkPopupBg: "#1a1a2e",
    },
    Checkbox: {
      lineHeight: 1.8,
      colorPrimary: "#722ed1",
    },
    Form: {
      itemMarginBottom: 8,
      labelFontSize: 18,
      verticalLabelMargin: 2,
    },
    Radio: {
      wrapperMarginInlineEnd: 80,
      colorPrimary: "#722ed1",
    },
    Pagination: {
      colorPrimary: "#722ed1",
      itemActiveBg: "#f9f0ff",
    },
    Input: {
      activeBorderColor: "#722ed1",
      hoverBorderColor: "#9254de",
    },
    Select: {
      optionSelectedBg: "#f9f0ff",
      colorPrimary: "#722ed1",
    },
    DatePicker: {
      colorPrimary: "#722ed1",
      cellHoverBg: "#f0e6ff",
      cellActiveWithRangeBg: "#f9f0ff",
    },
    Switch: {
      colorPrimary: "#722ed1",
      colorPrimaryHover: "#9254de",
    },
    Tag: {
      colorPrimary: "#722ed1",
    },
    Alert: {
      colorInfo: "#722ed1",
      colorInfoBg: "#f0e6ff",
      colorInfoBorder: "#d3adf7",
      colorSuccess: "#722ed1",
      colorSuccessBg: "#f0e6ff",
      colorSuccessBorder: "#d3adf7",
      colorWarning: "#9254de",
      colorWarningBg: "#f0e6ff",
      colorWarningBorder: "#d3adf7",
      colorError: "#ff4d4f",
      colorErrorBg: "#fff1f0",
      colorErrorBorder: "#ffa39e",
    },
    Progress: {
      colorSuccess: "#722ed1",
    },
    Steps: {
      colorPrimary: "#722ed1",
      colorSuccess: "#722ed1",
    },
    Breadcrumb: {
      colorPrimary: "#722ed1",
    },
  },
  hashed: false,
};

/**
 * 日暮主题（橙色系）
 */
export const orangeTheme: ThemeConfig = {
  token: {
    colorPrimary: "#d46b08", // orange-6
    colorPrimaryHover: "#fa8c16", // orange-5
    colorPrimaryActive: "#ad4e00", // orange-7
    fontSize: 16,
    colorBgLayout: "#fffbe6",
    colorBgContainer: "#ffffff",
    colorText: "#171717",
    colorTextSecondary: "#555555",
    colorLink: "#d46b08",
    colorLinkHover: "#fa8c16",
    colorLinkActive: "#ad4e00",
    colorInfo: "#d46b08",
    colorSuccess: "#d46b08",
    colorSuccessHover: "#fa8c16",
    colorSuccessActive: "#ad4e00",
    colorWarning: "#d46b08",
    colorWarningHover: "#fa8c16",
    colorWarningActive: "#ad4e00",
    colorError: "#ff4d4f",
    colorErrorHover: "#ff7875",
    colorErrorActive: "#d9363e",
  },
  components: {
    Button: {
      primaryColor: "#fff",
      colorPrimary: "#d46b08",
      colorPrimaryHover: "#fa8c16",
      colorPrimaryActive: "#ad4e00",
      defaultColor: "#d46b08",
      defaultHoverColor: "#fa8c16",
      defaultActiveColor: "#ad4e00",
      defaultBorderColor: "#d46b08",
      defaultHoverBorderColor: "#fa8c16",
      defaultActiveBorderColor: "#ad4e00",
    },
    Table: {
      headerBg: "#fff7e6",
      headerColor: "#ad4e00",
      rowHoverBg: "#ffe7ba",
      borderColor: "#ffd591",
    },
    Menu: {
      itemSelectedColor: "#d46b08",
      itemHoverColor: "#fa8c16",
      itemSelectedBg: "#fff7e6",
      itemHoverBg: "#ffe7ba",
      itemBg: "#ffffff",
      subMenuItemSelectedColor: "#d46b08",
      darkItemBg: "#3d2000",
      darkItemHoverBg: "#5c3000",
      darkItemHoverColor: "#ffa940",
      darkItemSelectedBg: "#704200",
      darkItemSelectedColor: "#fff",
      darkSubMenuItemBg: "#3d2000",
      darkPopupBg: "#3d2000",
    },
    Checkbox: {
      lineHeight: 1.8,
      colorPrimary: "#d46b08",
    },
    Form: {
      itemMarginBottom: 8,
      labelFontSize: 18,
      verticalLabelMargin: 2,
    },
    Radio: {
      wrapperMarginInlineEnd: 80,
      colorPrimary: "#d46b08",
    },
    Pagination: {
      colorPrimary: "#d46b08",
      itemActiveBg: "#fff7e6",
    },
    Input: {
      activeBorderColor: "#d46b08",
      hoverBorderColor: "#fa8c16",
    },
    Select: {
      optionSelectedBg: "#fff7e6",
      colorPrimary: "#d46b08",
    },
    DatePicker: {
      colorPrimary: "#d46b08",
      cellHoverBg: "#ffe7ba",
      cellActiveWithRangeBg: "#fff7e6",
    },
    Switch: {
      colorPrimary: "#d46b08",
      colorPrimaryHover: "#fa8c16",
    },
    Tag: {
      colorPrimary: "#d46b08",
    },
    Alert: {
      colorInfo: "#d46b08",
      colorInfoBg: "#fff7e6",
      colorInfoBorder: "#ffd591",
      colorSuccess: "#d46b08",
      colorSuccessBg: "#fff7e6",
      colorSuccessBorder: "#ffd591",
      colorWarning: "#d46b08",
      colorWarningBg: "#fff7e6",
      colorWarningBorder: "#ffd591",
      colorError: "#ff4d4f",
      colorErrorBg: "#fff1f0",
      colorErrorBorder: "#ffa39e",
    },
    Progress: {
      colorSuccess: "#d46b08",
    },
    Steps: {
      colorPrimary: "#d46b08",
      colorSuccess: "#d46b08",
    },
    Breadcrumb: {
      colorPrimary: "#d46b08",
    },
  },
  hashed: false,
};

/**
 * 金盏花主题（金黄色系）
 */
export const goldTheme: ThemeConfig = {
  token: {
    colorPrimary: "#d48806", // gold-6
    colorPrimaryHover: "#faad14", // gold-5
    colorPrimaryActive: "#ad6800", // gold-7
    fontSize: 16,
    colorBgLayout: "#fffbe6",
    colorBgContainer: "#ffffff",
    colorText: "#171717",
    colorTextSecondary: "#555555",
    colorLink: "#d48806",
    colorLinkHover: "#faad14",
    colorLinkActive: "#ad6800",
    colorInfo: "#d48806",
    colorSuccess: "#d48806",
    colorSuccessHover: "#faad14",
    colorSuccessActive: "#ad6800",
    colorWarning: "#d48806",
    colorWarningHover: "#faad14",
    colorWarningActive: "#ad6800",
    colorError: "#ff4d4f",
    colorErrorHover: "#ff7875",
    colorErrorActive: "#d9363e",
  },
  components: {
    Button: {
      primaryColor: "#fff",
      colorPrimary: "#d48806",
      colorPrimaryHover: "#faad14",
      colorPrimaryActive: "#ad6800",
      defaultColor: "#d48806",
      defaultHoverColor: "#faad14",
      defaultActiveColor: "#ad6800",
      defaultBorderColor: "#d48806",
      defaultHoverBorderColor: "#faad14",
      defaultActiveBorderColor: "#ad6800",
    },
    Table: {
      headerBg: "#fffbe6",
      headerColor: "#ad6800",
      rowHoverBg: "#fff1b8",
      borderColor: "#ffe58f",
    },
    Menu: {
      itemSelectedColor: "#d48806",
      itemHoverColor: "#faad14",
      itemSelectedBg: "#fffbe6",
      itemHoverBg: "#fff1b8",
      itemBg: "#ffffff",
      subMenuItemSelectedColor: "#d48806",
      darkItemBg: "#3d2e00",
      darkItemHoverBg: "#5c4400",
      darkItemHoverColor: "#ffc53d",
      darkItemSelectedBg: "#705000",
      darkItemSelectedColor: "#fff",
      darkSubMenuItemBg: "#3d2e00",
      darkPopupBg: "#3d2e00",
    },
    Checkbox: {
      lineHeight: 1.8,
      colorPrimary: "#d48806",
    },
    Form: {
      itemMarginBottom: 8,
      labelFontSize: 18,
      verticalLabelMargin: 2,
    },
    Radio: {
      wrapperMarginInlineEnd: 80,
      colorPrimary: "#d48806",
    },
    Pagination: {
      colorPrimary: "#d48806",
      itemActiveBg: "#fffbe6",
    },
    Input: {
      activeBorderColor: "#d48806",
      hoverBorderColor: "#faad14",
    },
    Select: {
      optionSelectedBg: "#fffbe6",
      colorPrimary: "#d48806",
    },
    DatePicker: {
      colorPrimary: "#d48806",
      cellHoverBg: "#fff1b8",
      cellActiveWithRangeBg: "#fffbe6",
    },
    Switch: {
      colorPrimary: "#d48806",
      colorPrimaryHover: "#faad14",
    },
    Tag: {
      colorPrimary: "#d48806",
    },
    Alert: {
      colorInfo: "#d48806",
      colorInfoBg: "#fffbe6",
      colorInfoBorder: "#ffe58f",
      colorSuccess: "#d48806",
      colorSuccessBg: "#fffbe6",
      colorSuccessBorder: "#ffe58f",
      colorWarning: "#d48806",
      colorWarningBg: "#fffbe6",
      colorWarningBorder: "#ffe58f",
      colorError: "#ff4d4f",
      colorErrorBg: "#fff1f0",
      colorErrorBorder: "#ffa39e",
    },
    Progress: {
      colorSuccess: "#d48806",
    },
    Steps: {
      colorPrimary: "#d48806",
      colorSuccess: "#d48806",
    },
    Breadcrumb: {
      colorPrimary: "#d48806",
    },
  },
  hashed: false,
};

/**
 * 明青主题（青色系）
 */
export const cyanTheme: ThemeConfig = {
  token: {
    colorPrimary: "#08979c", // cyan-6
    colorPrimaryHover: "#13c2c2", // cyan-5
    colorPrimaryActive: "#006d75", // cyan-7
    fontSize: 16,
    colorBgLayout: "#e6fffb",
    colorBgContainer: "#ffffff",
    colorText: "#171717",
    colorTextSecondary: "#555555",
    colorLink: "#08979c",
    colorLinkHover: "#13c2c2",
    colorLinkActive: "#006d75",
    colorInfo: "#08979c",
    colorSuccess: "#08979c",
    colorSuccessHover: "#13c2c2",
    colorSuccessActive: "#006d75",
    colorWarning: "#08979c",
    colorWarningHover: "#13c2c2",
    colorWarningActive: "#006d75",
    colorError: "#ff4d4f",
    colorErrorHover: "#ff7875",
    colorErrorActive: "#d9363e",
  },
  components: {
    Button: {
      primaryColor: "#fff",
      colorPrimary: "#08979c",
      colorPrimaryHover: "#13c2c2",
      colorPrimaryActive: "#006d75",
      defaultColor: "#08979c",
      defaultHoverColor: "#13c2c2",
      defaultActiveColor: "#006d75",
      defaultBorderColor: "#08979c",
      defaultHoverBorderColor: "#13c2c2",
      defaultActiveBorderColor: "#006d75",
    },
    Table: {
      headerBg: "#e6fffb",
      headerColor: "#006d75",
      rowHoverBg: "#b5f5ec",
      borderColor: "#87e8de",
    },
    Menu: {
      itemSelectedColor: "#08979c",
      itemHoverColor: "#13c2c2",
      itemSelectedBg: "#e6fffb",
      itemHoverBg: "#b5f5ec",
      itemBg: "#ffffff",
      subMenuItemSelectedColor: "#08979c",
      darkItemBg: "#003035",
      darkItemHoverBg: "#00474f",
      darkItemHoverColor: "#36cfc9",
      darkItemSelectedBg: "#005a64",
      darkItemSelectedColor: "#fff",
      darkSubMenuItemBg: "#003035",
      darkPopupBg: "#003035",
    },
    Checkbox: {
      lineHeight: 1.8,
      colorPrimary: "#08979c",
    },
    Form: {
      itemMarginBottom: 8,
      labelFontSize: 18,
      verticalLabelMargin: 2,
    },
    Radio: {
      wrapperMarginInlineEnd: 80,
      colorPrimary: "#08979c",
    },
    Pagination: {
      colorPrimary: "#08979c",
      itemActiveBg: "#e6fffb",
    },
    Input: {
      activeBorderColor: "#08979c",
      hoverBorderColor: "#13c2c2",
    },
    Select: {
      optionSelectedBg: "#e6fffb",
      colorPrimary: "#08979c",
    },
    DatePicker: {
      colorPrimary: "#08979c",
      cellHoverBg: "#b5f5ec",
      cellActiveWithRangeBg: "#e6fffb",
    },
    Switch: {
      colorPrimary: "#08979c",
      colorPrimaryHover: "#13c2c2",
    },
    Tag: {
      colorPrimary: "#08979c",
    },
    Alert: {
      colorInfo: "#08979c",
      colorInfoBg: "#e6fffb",
      colorInfoBorder: "#87e8de",
      colorSuccess: "#08979c",
      colorSuccessBg: "#e6fffb",
      colorSuccessBorder: "#87e8de",
      colorWarning: "#08979c",
      colorWarningBg: "#e6fffb",
      colorWarningBorder: "#87e8de",
      colorError: "#ff4d4f",
      colorErrorBg: "#fff1f0",
      colorErrorBorder: "#ffa39e",
    },
    Progress: {
      colorSuccess: "#08979c",
    },
    Steps: {
      colorPrimary: "#08979c",
      colorSuccess: "#08979c",
    },
    Breadcrumb: {
      colorPrimary: "#08979c",
    },
  },
  hashed: false,
};

/**
 * 法式洋红主题（洋红色系）
 */
export const magentaTheme: ThemeConfig = {
  token: {
    colorPrimary: "#c41d7f", // magenta-6
    colorPrimaryHover: "#eb2f96", // magenta-5
    colorPrimaryActive: "#9e1068", // magenta-7
    fontSize: 16,
    colorBgLayout: "#fff0f6",
    colorBgContainer: "#ffffff",
    colorText: "#171717",
    colorTextSecondary: "#555555",
    colorLink: "#c41d7f",
    colorLinkHover: "#eb2f96",
    colorLinkActive: "#9e1068",
    colorInfo: "#c41d7f",
    colorSuccess: "#c41d7f",
    colorSuccessHover: "#eb2f96",
    colorSuccessActive: "#9e1068",
    colorWarning: "#c41d7f",
    colorWarningHover: "#eb2f96",
    colorWarningActive: "#9e1068",
    colorError: "#ff4d4f",
    colorErrorHover: "#ff7875",
    colorErrorActive: "#d9363e",
  },
  components: {
    Button: {
      primaryColor: "#fff",
      colorPrimary: "#c41d7f",
      colorPrimaryHover: "#eb2f96",
      colorPrimaryActive: "#9e1068",
      defaultColor: "#c41d7f",
      defaultHoverColor: "#eb2f96",
      defaultActiveColor: "#9e1068",
      defaultBorderColor: "#c41d7f",
      defaultHoverBorderColor: "#eb2f96",
      defaultActiveBorderColor: "#9e1068",
    },
    Table: {
      headerBg: "#fff0f6",
      headerColor: "#9e1068",
      rowHoverBg: "#ffd6e7",
      borderColor: "#ffadd2",
    },
    Menu: {
      itemSelectedColor: "#c41d7f",
      itemHoverColor: "#eb2f96",
      itemSelectedBg: "#fff0f6",
      itemHoverBg: "#ffd6e7",
      itemBg: "#ffffff",
      subMenuItemSelectedColor: "#c41d7f",
      darkItemBg: "#39001a",
      darkItemHoverBg: "#520339",
      darkItemHoverColor: "#f759ab",
      darkItemSelectedBg: "#780650",
      darkItemSelectedColor: "#fff",
      darkSubMenuItemBg: "#39001a",
      darkPopupBg: "#39001a",
    },
    Checkbox: {
      lineHeight: 1.8,
      colorPrimary: "#c41d7f",
    },
    Form: {
      itemMarginBottom: 8,
      labelFontSize: 18,
      verticalLabelMargin: 2,
    },
    Radio: {
      wrapperMarginInlineEnd: 80,
      colorPrimary: "#c41d7f",
    },
    Pagination: {
      colorPrimary: "#c41d7f",
      itemActiveBg: "#fff0f6",
    },
    Input: {
      activeBorderColor: "#c41d7f",
      hoverBorderColor: "#eb2f96",
    },
    Select: {
      optionSelectedBg: "#fff0f6",
      colorPrimary: "#c41d7f",
    },
    DatePicker: {
      colorPrimary: "#c41d7f",
      cellHoverBg: "#ffd6e7",
      cellActiveWithRangeBg: "#fff0f6",
    },
    Switch: {
      colorPrimary: "#c41d7f",
      colorPrimaryHover: "#eb2f96",
    },
    Tag: {
      colorPrimary: "#c41d7f",
    },
    Alert: {
      colorInfo: "#c41d7f",
      colorInfoBg: "#fff0f6",
      colorInfoBorder: "#ffadd2",
      colorSuccess: "#c41d7f",
      colorSuccessBg: "#fff0f6",
      colorSuccessBorder: "#ffadd2",
      colorWarning: "#c41d7f",
      colorWarningBg: "#fff0f6",
      colorWarningBorder: "#ffadd2",
      colorError: "#ff4d4f",
      colorErrorBg: "#fff1f0",
      colorErrorBorder: "#ffa39e",
    },
    Progress: {
      colorSuccess: "#c41d7f",
    },
    Steps: {
      colorPrimary: "#c41d7f",
      colorSuccess: "#c41d7f",
    },
    Breadcrumb: {
      colorPrimary: "#c41d7f",
    },
  },
  hashed: false,
};

/**
 * 火山主题（火红色系）
 */
export const volcanoTheme: ThemeConfig = {
  token: {
    colorPrimary: "#d4380d", // volcano-6
    colorPrimaryHover: "#fa541c", // volcano-5
    colorPrimaryActive: "#ad2102", // volcano-7
    fontSize: 16,
    colorBgLayout: "#fff2e8",
    colorBgContainer: "#ffffff",
    colorText: "#171717",
    colorTextSecondary: "#555555",
    colorLink: "#d4380d",
    colorLinkHover: "#fa541c",
    colorLinkActive: "#ad2102",
    colorInfo: "#d4380d",
    colorSuccess: "#d4380d",
    colorSuccessHover: "#fa541c",
    colorSuccessActive: "#ad2102",
    colorWarning: "#d4380d",
    colorWarningHover: "#fa541c",
    colorWarningActive: "#ad2102",
    colorError: "#ff4d4f",
    colorErrorHover: "#ff7875",
    colorErrorActive: "#d9363e",
  },
  components: {
    Button: {
      primaryColor: "#fff",
      colorPrimary: "#d4380d",
      colorPrimaryHover: "#fa541c",
      colorPrimaryActive: "#ad2102",
      defaultColor: "#d4380d",
      defaultHoverColor: "#fa541c",
      defaultActiveColor: "#ad2102",
      defaultBorderColor: "#d4380d",
      defaultHoverBorderColor: "#fa541c",
      defaultActiveBorderColor: "#ad2102",
    },
    Table: {
      headerBg: "#fff2e8",
      headerColor: "#ad2102",
      rowHoverBg: "#ffd8bf",
      borderColor: "#ffbb96",
    },
    Menu: {
      itemSelectedColor: "#d4380d",
      itemHoverColor: "#fa541c",
      itemSelectedBg: "#fff2e8",
      itemHoverBg: "#ffd8bf",
      itemBg: "#ffffff",
      subMenuItemSelectedColor: "#d4380d",
      darkItemBg: "#610b00",
      darkItemHoverBg: "#871400",
      darkItemHoverColor: "#ffa940",
      darkItemSelectedBg: "#a8071a",
      darkItemSelectedColor: "#fff",
      darkSubMenuItemBg: "#610b00",
      darkPopupBg: "#610b00",
    },
    Checkbox: {
      lineHeight: 1.8,
      colorPrimary: "#d4380d",
    },
    Form: {
      itemMarginBottom: 8,
      labelFontSize: 18,
      verticalLabelMargin: 2,
    },
    Radio: {
      wrapperMarginInlineEnd: 80,
      colorPrimary: "#d4380d",
    },
    Pagination: {
      colorPrimary: "#d4380d",
      itemActiveBg: "#fff2e8",
    },
    Input: {
      activeBorderColor: "#d4380d",
      hoverBorderColor: "#fa541c",
    },
    Select: {
      optionSelectedBg: "#fff2e8",
      colorPrimary: "#d4380d",
    },
    DatePicker: {
      colorPrimary: "#d4380d",
      cellHoverBg: "#ffd8bf",
      cellActiveWithRangeBg: "#fff2e8",
    },
    Switch: {
      colorPrimary: "#d4380d",
      colorPrimaryHover: "#fa541c",
    },
    Tag: {
      colorPrimary: "#d4380d",
    },
    Alert: {
      colorInfo: "#d4380d",
      colorInfoBg: "#fff2e8",
      colorInfoBorder: "#ffbb96",
      colorSuccess: "#d4380d",
      colorSuccessBg: "#fff2e8",
      colorSuccessBorder: "#ffbb96",
      colorWarning: "#d4380d",
      colorWarningBg: "#fff2e8",
      colorWarningBorder: "#ffbb96",
      colorError: "#ff4d4f",
      colorErrorBg: "#fff1f0",
      colorErrorBorder: "#ffa39e",
    },
    Progress: {
      colorSuccess: "#d4380d",
    },
    Steps: {
      colorPrimary: "#d4380d",
      colorSuccess: "#d4380d",
    },
    Breadcrumb: {
      colorPrimary: "#d4380d",
    },
  },
  hashed: false,
};

/**
 * 薄暮主题（红色系）
 */
export const redTheme: ThemeConfig = {
  token: {
    colorPrimary: "#cf1322", // red-6
    colorPrimaryHover: "#f5222d", // red-5
    colorPrimaryActive: "#a8071a", // red-7
    fontSize: 16,
    colorBgLayout: "#fff1f0",
    colorBgContainer: "#ffffff",
    colorText: "#171717",
    colorTextSecondary: "#555555",
    colorLink: "#cf1322",
    colorLinkHover: "#f5222d",
    colorLinkActive: "#a8071a",
    colorInfo: "#cf1322",
    colorSuccess: "#cf1322",
    colorSuccessHover: "#f5222d",
    colorSuccessActive: "#a8071a",
    colorWarning: "#cf1322",
    colorWarningHover: "#f5222d",
    colorWarningActive: "#a8071a",
    colorError: "#ff4d4f",
    colorErrorHover: "#ff7875",
    colorErrorActive: "#d9363e",
  },
  components: {
    Button: {
      primaryColor: "#fff",
      colorPrimary: "#cf1322",
      colorPrimaryHover: "#f5222d",
      colorPrimaryActive: "#a8071a",
      defaultColor: "#cf1322",
      defaultHoverColor: "#f5222d",
      defaultActiveColor: "#a8071a",
      defaultBorderColor: "#cf1322",
      defaultHoverBorderColor: "#f5222d",
      defaultActiveBorderColor: "#a8071a",
    },
    Table: {
      headerBg: "#fff1f0",
      headerColor: "#a8071a",
      rowHoverBg: "#ffccc7",
      borderColor: "#ffa39e",
    },
    Menu: {
      itemSelectedColor: "#cf1322",
      itemHoverColor: "#f5222d",
      itemSelectedBg: "#fff1f0",
      itemHoverBg: "#ffccc7",
      itemBg: "#ffffff",
      subMenuItemSelectedColor: "#cf1322",
      darkItemBg: "#5c0011",
      darkItemHoverBg: "#820014",
      darkItemHoverColor: "#ff4d4f",
      darkItemSelectedBg: "#a8071a",
      darkItemSelectedColor: "#fff",
      darkSubMenuItemBg: "#5c0011",
      darkPopupBg: "#5c0011",
    },
    Checkbox: {
      lineHeight: 1.8,
      colorPrimary: "#cf1322",
    },
    Form: {
      itemMarginBottom: 8,
      labelFontSize: 18,
      verticalLabelMargin: 2,
    },
    Radio: {
      wrapperMarginInlineEnd: 80,
      colorPrimary: "#cf1322",
    },
    Pagination: {
      colorPrimary: "#cf1322",
      itemActiveBg: "#fff1f0",
    },
    Input: {
      activeBorderColor: "#cf1322",
      hoverBorderColor: "#f5222d",
    },
    Select: {
      optionSelectedBg: "#fff1f0",
      colorPrimary: "#cf1322",
    },
    DatePicker: {
      colorPrimary: "#cf1322",
      cellHoverBg: "#ffccc7",
      cellActiveWithRangeBg: "#fff1f0",
    },
    Switch: {
      colorPrimary: "#cf1322",
      colorPrimaryHover: "#f5222d",
    },
    Tag: {
      colorPrimary: "#cf1322",
    },
    Alert: {
      colorInfo: "#cf1322",
      colorInfoBg: "#fff1f0",
      colorInfoBorder: "#ffa39e",
      colorSuccess: "#cf1322",
      colorSuccessBg: "#fff1f0",
      colorSuccessBorder: "#ffa39e",
      colorWarning: "#cf1322",
      colorWarningBg: "#fff1f0",
      colorWarningBorder: "#ffa39e",
      colorError: "#ff4d4f",
      colorErrorBg: "#fff1f0",
      colorErrorBorder: "#ffa39e",
    },
    Progress: {
      colorSuccess: "#cf1322",
    },
    Steps: {
      colorPrimary: "#cf1322",
      colorSuccess: "#cf1322",
    },
    Breadcrumb: {
      colorPrimary: "#cf1322",
    },
  },
  hashed: false,
};

/**
 * 日出主题（黄色系）
 */
export const yellowTheme: ThemeConfig = {
  token: {
    colorPrimary: "#d4b106", // yellow-6
    colorPrimaryHover: "#fadb14", // yellow-5
    colorPrimaryActive: "#ad8b00", // yellow-7
    fontSize: 16,
    colorBgLayout: "#feffe6",
    colorBgContainer: "#ffffff",
    colorText: "#171717",
    colorTextSecondary: "#555555",
    colorLink: "#d4b106",
    colorLinkHover: "#fadb14",
    colorLinkActive: "#ad8b00",
    colorInfo: "#d4b106",
    colorSuccess: "#d4b106",
    colorSuccessHover: "#fadb14",
    colorSuccessActive: "#ad8b00",
    colorWarning: "#d4b106",
    colorWarningHover: "#fadb14",
    colorWarningActive: "#ad8b00",
    colorError: "#ff4d4f",
    colorErrorHover: "#ff7875",
    colorErrorActive: "#d9363e",
  },
  components: {
    Button: {
      primaryColor: "#fff",
      colorPrimary: "#d4b106",
      colorPrimaryHover: "#fadb14",
      colorPrimaryActive: "#ad8b00",
      defaultColor: "#d4b106",
      defaultHoverColor: "#fadb14",
      defaultActiveColor: "#ad8b00",
      defaultBorderColor: "#d4b106",
      defaultHoverBorderColor: "#fadb14",
      defaultActiveBorderColor: "#ad8b00",
    },
    Table: {
      headerBg: "#feffe6",
      headerColor: "#ad8b00",
      rowHoverBg: "#fff1b8",
      borderColor: "#ffe58f",
    },
    Menu: {
      itemSelectedColor: "#d4b106",
      itemHoverColor: "#fadb14",
      itemSelectedBg: "#feffe6",
      itemHoverBg: "#fff1b8",
      itemBg: "#ffffff",
      subMenuItemSelectedColor: "#d4b106",
      darkItemBg: "#614700",
      darkItemHoverBg: "#876800",
      darkItemHoverColor: "#ffe58f",
      darkItemSelectedBg: "#ad8b00",
      darkItemSelectedColor: "#fff",
      darkSubMenuItemBg: "#614700",
      darkPopupBg: "#614700",
    },
    Checkbox: {
      lineHeight: 1.8,
      colorPrimary: "#d4b106",
    },
    Form: {
      itemMarginBottom: 8,
      labelFontSize: 18,
      verticalLabelMargin: 2,
    },
    Radio: {
      wrapperMarginInlineEnd: 80,
      colorPrimary: "#d4b106",
    },
    Pagination: {
      colorPrimary: "#d4b106",
      itemActiveBg: "#feffe6",
    },
    Input: {
      activeBorderColor: "#d4b106",
      hoverBorderColor: "#fadb14",
    },
    Select: {
      optionSelectedBg: "#feffe6",
      colorPrimary: "#d4b106",
    },
    DatePicker: {
      colorPrimary: "#d4b106",
      cellHoverBg: "#fff1b8",
      cellActiveWithRangeBg: "#feffe6",
    },
    Switch: {
      colorPrimary: "#d4b106",
      colorPrimaryHover: "#fadb14",
    },
    Tag: {
      colorPrimary: "#d4b106",
    },
    Alert: {
      colorInfo: "#d4b106",
      colorInfoBg: "#feffe6",
      colorInfoBorder: "#ffe58f",
      colorSuccess: "#d4b106",
      colorSuccessBg: "#feffe6",
      colorSuccessBorder: "#ffe58f",
      colorWarning: "#d4b106",
      colorWarningBg: "#feffe6",
      colorWarningBorder: "#ffe58f",
      colorError: "#ff4d4f",
      colorErrorBg: "#fff1f0",
      colorErrorBorder: "#ffa39e",
    },
    Progress: {
      colorSuccess: "#d4b106",
    },
    Steps: {
      colorPrimary: "#d4b106",
      colorSuccess: "#d4b106",
    },
    Breadcrumb: {
      colorPrimary: "#d4b106",
    },
  },
  hashed: false,
};

/**
 * 极客蓝主题（蓝色系）
 */
export const geekblueTheme: ThemeConfig = {
  token: {
    colorPrimary: "#1d39c4", // geekblue-6
    colorPrimaryHover: "#2f54eb", // geekblue-5
    colorPrimaryActive: "#10239e", // geekblue-7
    fontSize: 16,
    colorBgLayout: "#f0f5ff",
    colorBgContainer: "#ffffff",
    colorText: "#171717",
    colorTextSecondary: "#555555",
    colorLink: "#1d39c4",
    colorLinkHover: "#2f54eb",
    colorLinkActive: "#10239e",
    colorInfo: "#1d39c4",
    colorSuccess: "#1d39c4",
    colorSuccessHover: "#2f54eb",
    colorSuccessActive: "#10239e",
    colorWarning: "#1d39c4",
    colorWarningHover: "#2f54eb",
    colorWarningActive: "#10239e",
    colorError: "#ff4d4f",
    colorErrorHover: "#ff7875",
    colorErrorActive: "#d9363e",
  },
  components: {
    Button: {
      primaryColor: "#fff",
      colorPrimary: "#1d39c4",
      colorPrimaryHover: "#2f54eb",
      colorPrimaryActive: "#10239e",
      defaultColor: "#1d39c4",
      defaultHoverColor: "#2f54eb",
      defaultActiveColor: "#10239e",
      defaultBorderColor: "#1d39c4",
      defaultHoverBorderColor: "#2f54eb",
      defaultActiveBorderColor: "#10239e",
    },
    Table: {
      headerBg: "#f0f5ff",
      headerColor: "#10239e",
      rowHoverBg: "#d6e4ff",
      borderColor: "#adc6ff",
    },
    Menu: {
      itemSelectedColor: "#1d39c4",
      itemHoverColor: "#2f54eb",
      itemSelectedBg: "#f0f5ff",
      itemHoverBg: "#d6e4ff",
      itemBg: "#ffffff",
      subMenuItemSelectedColor: "#1d39c4",
      darkItemBg: "#061178",
      darkItemHoverBg: "#061178",
      darkItemHoverColor: "#85a5ff",
      darkItemSelectedBg: "#10239e",
      darkItemSelectedColor: "#fff",
      darkSubMenuItemBg: "#061178",
      darkPopupBg: "#061178",
    },
    Checkbox: {
      lineHeight: 1.8,
      colorPrimary: "#1d39c4",
    },
    Form: {
      itemMarginBottom: 8,
      labelFontSize: 18,
      verticalLabelMargin: 2,
    },
    Radio: {
      wrapperMarginInlineEnd: 80,
      colorPrimary: "#1d39c4",
    },
    Pagination: {
      colorPrimary: "#1d39c4",
      itemActiveBg: "#f0f5ff",
    },
    Input: {
      activeBorderColor: "#1d39c4",
      hoverBorderColor: "#2f54eb",
    },
    Select: {
      optionSelectedBg: "#f0f5ff",
      colorPrimary: "#1d39c4",
    },
    DatePicker: {
      colorPrimary: "#1d39c4",
      cellHoverBg: "#d6e4ff",
      cellActiveWithRangeBg: "#f0f5ff",
    },
    Switch: {
      colorPrimary: "#1d39c4",
      colorPrimaryHover: "#2f54eb",
    },
    Tag: {
      colorPrimary: "#1d39c4",
    },
    Alert: {
      colorInfo: "#1d39c4",
      colorInfoBg: "#f0f5ff",
      colorInfoBorder: "#adc6ff",
      colorSuccess: "#1d39c4",
      colorSuccessBg: "#f0f5ff",
      colorSuccessBorder: "#adc6ff",
      colorWarning: "#1d39c4",
      colorWarningBg: "#f0f5ff",
      colorWarningBorder: "#adc6ff",
      colorError: "#ff4d4f",
      colorErrorBg: "#fff1f0",
      colorErrorBorder: "#ffa39e",
    },
    Progress: {
      colorSuccess: "#1d39c4",
    },
    Steps: {
      colorPrimary: "#1d39c4",
      colorSuccess: "#1d39c4",
    },
    Breadcrumb: {
      colorPrimary: "#1d39c4",
    },
  },
  hashed: false,
};

/**
 * 拂晓蓝主题（亮蓝色系）
 */
export const blueTheme: ThemeConfig = {
  token: {
    colorPrimary: "#0958d9", // blue-6
    colorPrimaryHover: "#1677ff", // blue-5
    colorPrimaryActive: "#003eb3", // blue-7
    fontSize: 16,
    colorBgLayout: "#e6f4ff",
    colorBgContainer: "#ffffff",
    colorText: "#171717",
    colorTextSecondary: "#555555",
    colorLink: "#0958d9",
    colorLinkHover: "#1677ff",
    colorLinkActive: "#003eb3",
    colorInfo: "#0958d9",
    colorSuccess: "#0958d9",
    colorSuccessHover: "#1677ff",
    colorSuccessActive: "#003eb3",
    colorWarning: "#0958d9",
    colorWarningHover: "#1677ff",
    colorWarningActive: "#003eb3",
    colorError: "#ff4d4f",
    colorErrorHover: "#ff7875",
    colorErrorActive: "#d9363e",
  },
  components: {
    Button: {
      primaryColor: "#fff",
      colorPrimary: "#0958d9",
      colorPrimaryHover: "#1677ff",
      colorPrimaryActive: "#003eb3",
      defaultColor: "#0958d9",
      defaultHoverColor: "#1677ff",
      defaultActiveColor: "#003eb3",
      defaultBorderColor: "#0958d9",
      defaultHoverBorderColor: "#1677ff",
      defaultActiveBorderColor: "#003eb3",
    },
    Table: {
      headerBg: "#e6f4ff",
      headerColor: "#003eb3",
      rowHoverBg: "#bae0ff",
      borderColor: "#91caff",
    },
    Menu: {
      itemSelectedColor: "#0958d9",
      itemHoverColor: "#1677ff",
      itemSelectedBg: "#e6f4ff",
      itemHoverBg: "#bae0ff",
      itemBg: "#ffffff",
      subMenuItemSelectedColor: "#0958d9",
      darkItemBg: "#001d66",
      darkItemHoverBg: "#00228c",
      darkItemHoverColor: "#4096ff",
      darkItemSelectedBg: "#003eb3",
      darkItemSelectedColor: "#fff",
      darkSubMenuItemBg: "#001d66",
      darkPopupBg: "#001d66",
    },
    Checkbox: {
      lineHeight: 1.8,
      colorPrimary: "#0958d9",
    },
    Form: {
      itemMarginBottom: 8,
      labelFontSize: 18,
      verticalLabelMargin: 2,
    },
    Radio: {
      wrapperMarginInlineEnd: 80,
      colorPrimary: "#0958d9",
    },
    Pagination: {
      colorPrimary: "#0958d9",
      itemActiveBg: "#e6f4ff",
    },
    Input: {
      activeBorderColor: "#0958d9",
      hoverBorderColor: "#1677ff",
    },
    Select: {
      optionSelectedBg: "#e6f4ff",
      colorPrimary: "#0958d9",
    },
    DatePicker: {
      colorPrimary: "#0958d9",
      cellHoverBg: "#bae0ff",
      cellActiveWithRangeBg: "#e6f4ff",
    },
    Switch: {
      colorPrimary: "#0958d9",
      colorPrimaryHover: "#1677ff",
    },
    Tag: {
      colorPrimary: "#0958d9",
    },
    Alert: {
      colorInfo: "#0958d9",
      colorInfoBg: "#e6f4ff",
      colorInfoBorder: "#91caff",
      colorSuccess: "#0958d9",
      colorSuccessBg: "#e6f4ff",
      colorSuccessBorder: "#91caff",
      colorWarning: "#0958d9",
      colorWarningBg: "#e6f4ff",
      colorWarningBorder: "#91caff",
      colorError: "#ff4d4f",
      colorErrorBg: "#fff1f0",
      colorErrorBorder: "#ffa39e",
    },
    Progress: {
      colorSuccess: "#0958d9",
    },
    Steps: {
      colorPrimary: "#0958d9",
      colorSuccess: "#0958d9",
    },
    Breadcrumb: {
      colorPrimary: "#0958d9",
    },
  },
  hashed: false,
};

/**
 * 主题映射表
 */
export const themeMap: Record<string, ThemeConfig> = {
  default: defaultTheme,
  dark: darkTheme,
  purple: purpleTheme,
  orange: orangeTheme,
  gold: goldTheme,
  cyan: cyanTheme,
  magenta: magentaTheme,
  geekblue: geekblueTheme,
  volcano: volcanoTheme,
  red: redTheme,
  yellow: yellowTheme,
  blue: blueTheme,
};

/**
 * 主题选项（用于 UI 展示）
 */
export const themeOptions = [
  { key: "default", label: "默认(青柠)", color: "#7cb305" },
  { key: "dark", label: "暗夜", color: "#0a0a0a" },
  { key: "purple", label: "酱紫", color: "#722ed1" },
  { key: "orange", label: "日暮", color: "#d46b08" },
  { key: "yellow", label: "日出", color: "#d4b106" },
  { key: "gold", label: "金盏花", color: "#d48806" },
  { key: "volcano", label: "火山", color: "#d4380d" },
  { key: "red", label: "薄暮", color: "#cf1322" },
  { key: "magenta", label: "法式洋红", color: "#c41d7f" },
  { key: "cyan", label: "明青", color: "#08979c" },
  { key: "geekblue", label: "极客蓝", color: "#1d39c4" },
  { key: "blue", label: "拂晓蓝", color: "#0958d9" },
];
