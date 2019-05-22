//App.js
import React, { useContext } from "react"
import { MenuItemsContext } from "./MenuItemsContext"

function App() {
  const { state, dispatch } = useContext(MenuItemsContext)
  const { hamburgerCount, friesCount, milkshakeCount } = state

  return (
    <div>
      <div>
        <p>Great news, John - This is how much food you have...</p>
      </div>
      <div>
        <p onClick={() => dispatch({ type: "incrementHamburgers" })}>
          {`\u{1F354}`} {hamburgerCount}
        </p>
        <p onClick={() => dispatch({ type: "incrementFries" })}>
          {`\u{1F35F}`} {friesCount}
        </p>
        <p onClick={() => dispatch({ type: "incrementMilkshake" })}>
          {`\u{1F95B}`}
          {milkshakeCount}
        </p>
      </div>
    </div>
  )
}

export default App
