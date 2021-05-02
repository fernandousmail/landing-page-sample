import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {  purple } from "@material-ui/core/colors";
import Header from "./components/Header";
import Hero from "./components/Hero";

const theme = createMuiTheme({
  palette:{
    primary: {
      main: purple[600]
    }
  },
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Hero />
    </ThemeProvider>
  );
}

export default App;
