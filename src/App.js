import "./App.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {  purple } from "@material-ui/core/colors";
import Hero from "./Paginas/Hero";
import { Route } from "react-router-dom";
import Service from "./Paginas/Service";
import Contacto from "./Paginas/Contacto";
import Header from "./components/Header";
import { CssBaseline } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[600],
    },
    secondary: {
      main: '#ff1493',  
    },
  },
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header></Header>
      <Route exact path="/">
        <Hero />
      </Route>
      <Route path="/service">
        <Service />
      </Route>
      <Route path="/contact">
        <Contacto />
      </Route>
    </ThemeProvider>
  );
}

export default App;
