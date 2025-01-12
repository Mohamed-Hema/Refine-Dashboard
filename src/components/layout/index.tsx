import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd";
import { Header } from "./header";

export const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <ThemedLayoutV2
      Header={Header}
      Title={(titleProps) => <ThemedTitleV2 {...titleProps} text="Refine" />}
    >
      {children}
    </ThemedLayoutV2>
  );
};
