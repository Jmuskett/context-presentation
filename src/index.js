//index.js
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { MenuItemsContextProvider } from "./MenuItemsContext"

ReactDOM.render(
  <MenuItemsContextProvider>
    <App />
  </MenuItemsContextProvider>,
  document.getElementById("root")
)
