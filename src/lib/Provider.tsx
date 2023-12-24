"use client";

import theme from "@/theme/theme";
import StyledComponentsRegistry from "./AntdRegistry";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <StyledComponentsRegistry>
        <ConfigProvider theme={theme}>{children}</ConfigProvider>
      </StyledComponentsRegistry>
    </Provider>
  );
};

export default Providers;
