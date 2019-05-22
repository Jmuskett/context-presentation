//MenuItemsContext.js
import React, { useReducer } from "react"

const menuState = {
  hamburgerCount: 0,
  friesCount: 0,
  milkshakeCount: 0
}

const MenuItemsContext = React.createContext()

const menuReducer = (state, action) => {
  switch (action.type) {
    case "incrementHamburgers":
      return { ...state, hamburgerCount: state.hamburgerCount + 1 }
    case "incrementFries":
      return { ...state, friesCount: state.friesCount + 1 }
    case "incrementMilkshake":
      return { ...state, milkshakeCount: state.milkshakeCount + 1 }
    default:
      return { ...state }
  }
}

const MenuItemsContextProvider = props => {
  const [state, dispatch] = useReducer(menuReducer, menuState)

  return (
    <MenuItemsContext.Provider value={{ state, dispatch }}>
      {props.children}
    </MenuItemsContext.Provider>
  )
}

export { MenuItemsContextProvider, MenuItemsContext }
