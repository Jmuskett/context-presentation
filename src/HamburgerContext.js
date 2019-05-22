//HamburgerContext.js
import React from "react"

const HamburgerContext = React.createContext()

const HamburgerContextProvider = props => (
  <HamburgerContext.Provider value={{ hamburgerCount: 5 }}>
    {props.children}
  </HamburgerContext.Provider>
)

const FriesContext = React.createContext()

const FriesContextProvider = props => (
  <FriesContext.Provider value={{ friesCount: 2 }}>
    {props.children}
  </FriesContext.Provider>
)

export {
  HamburgerContext,
  HamburgerContextProvider,
  FriesContext,
  FriesContextProvider
}
