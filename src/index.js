//index.js
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import {
  HamburgerContextProvider,
  FriesContextProvider
} from "./HamburgerContext"

ReactDOM.render(
  <HamburgerContextProvider>
    <FriesContextProvider>
      <App />
    </FriesContextProvider>
  </HamburgerContextProvider>,
  document.getElementById("root")
)
