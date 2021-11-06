import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    background: {
      default: "#181c21",
      paper: "#22272E"
      // default: "#22272e",
      // paper: "#ffffff0D"
    },
    error: {
      main: "#ED3E3B"
    },
    grey: {
      50: "#E8EBEE",
      100: "#A1ACBB",
      200: "#8695A7",
      300: "#6C7E94",
      400: "#58677A",
      500: "#526071",
      600: "#475261",
      700: "#3D4754",
      800: "#343C47",
      900: "#2B323B",
      A100: "#22272E",
      A200: "#181C21",
      A400: "#0F1114",
      A700: "#060608"
    },
    info: {
      main: "#64B5F6"
    },
    primary: {
      main: "#0D86E7"
    },
    secondary: {
      main: "#0D86E7"
    },
    success: {
      main: "#45D14C"
    },
    type: "dark",
    warning: {
      main: "#FF9250"
    },
    divider: "rgba(255,255,255,.05)"
  }
});
export default theme;
