import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: {
      "::-webkit-scrollbar": {
        width: "8px",
      },
      "::-webkit-scrollbar-track": {
        backgroundColor: "#f0f0f0",
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: "#747373",
      },
    },
  },
});

export default theme;
