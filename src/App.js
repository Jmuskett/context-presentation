//App.js
import React from "react"
import { HamburgerContext, FriesContext } from "./HamburgerContext"

function App() {
  return (
    <HamburgerContext.Consumer>
      {({ hamburgerCount }) => (
        <FriesContext.Consumer>
          {({ friesCount }) => (
            <div>
              <p>
                Great news, John - You have {hamburgerCount} {`\u{1F354}`} and{" "}
                {friesCount} {`\u{1F35F}`}
              </p>
            </div>
          )}
        </FriesContext.Consumer>
      )}
    </HamburgerContext.Consumer>
  )
}

export default App
