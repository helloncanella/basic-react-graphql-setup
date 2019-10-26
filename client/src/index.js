import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import MomentUtils from "@date-io/moment"
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import "moment/locale/pt-br"

ReactDOM.render(
  <ThemeProvider theme={createMuiTheme()}>
    <MuiPickersUtilsProvider utils={MomentUtils} locale="pt-br">
      <App></App>
    </MuiPickersUtilsProvider>
  </ThemeProvider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
