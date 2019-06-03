import React, { useContext } from "react"
import { MenuItemsContext } from "../MenuItemsContext"
import styled from "@emotion/styled"

const MenuTotalContainer = styled.div`
  justify-content: center;
  margin: 5rem 0;
`

const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
`

const OptionsItem = styled.div`
  flex: 0 0 10%;
  border: 1px solid black;
  padding: 2.2rem;
  margin: 0 2.2rem;
  box-shadow: 20px 30px 31px -24px rgba(0, 0, 0, 0.75);

  &:active {
    box-shadow: 3px 4px 5px -2px rgba(0, 0, 0, 0.75);
    transition: 0.05s;
  }
`

const MenuTotal = () => {
  const { state, dispatch } = useContext(MenuItemsContext)
  const { hamburgerCount, friesCount, milkshakeCount } = state

  const orderTotal = hamburgerCount + friesCount + milkshakeCount

  return (
    <MenuTotalContainer>
      <h1>Your current React Burgers order...</h1>
      <h2>Hamburgers: {hamburgerCount} </h2>
      <h2>Fries: {friesCount}</h2>
      <h2>Milkshakes: {milkshakeCount}</h2>
      <h2>Total number of items: {orderTotal}</h2>

      {orderTotal > 20 && (
        <div>
          <h1>are you sure you need to order this many burgers?</h1>
          <OptionsContainer>
            <OptionsItem>Yes!</OptionsItem>
            <OptionsItem onClick={() => dispatch({ type: "resetMenu" })}>
              I guess not.
            </OptionsItem>
          </OptionsContainer>
        </div>
      )}
    </MenuTotalContainer>
  )
}

export default MenuTotal
