import { createTheme } from "@material-ui/core";

const MyTheme = createTheme({
  palette: {
    primary: {
      light: "#FFDAEC",
      main: "#FC5DAF",
      dark: "#c52180",
    }
  },
  typography: {
    fontFamily: "Poppins",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

export default MyTheme;
