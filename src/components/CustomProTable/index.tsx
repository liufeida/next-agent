import { ParamsType, ProTable, ProTableProps } from "@ant-design/pro-components";
import { ConfigProvider } from "antd";
import classnames from "classnames";
import { ReactNode } from "react";
import "./index.css";

export const CustomProTable = <
  DataType extends Record<string, unknown>,
  Params extends ParamsType = ParamsType,
  ValueType = "text",
>(
  props: ProTableProps<DataType, Params, ValueType>,
): ReactNode => {
  const { className, scroll, ...restProps } = props;
  return (
    <ConfigProvider theme={{ components: { Form: { labelFontSize: 16 } } }}>
      <ProTable
        className={classnames("custom-pro-table hairlines", className)}
        {...restProps}
        scroll={scroll ? scroll : { x: 1200, y: 650 }}
      />
    </ConfigProvider>
  );
};
