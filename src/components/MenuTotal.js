import React, { useContext } from "react"
import { MenuItemsContext } from "../MenuItemsContext"
import styled from "@emotion/styled"

const MenuContainer = styled.div`
  justify-content: center;
`

const MenuTotal = () => {
  const { state, dispatch } = useContext(MenuItemsContext)
  const { hamburgerCount, friesCount, milkshakeCount } = state

  const orderTotal = hamburgerCount + friesCount + milkshakeCount

  return (
    <MenuContainer>
      <h1>Your current React Burgers order...</h1>
      <h2>Hamburgers: {hamburgerCount} </h2>
      <h2>Fries: {friesCount}</h2>
      <h2>Milkshakes: {milkshakeCount}</h2>
      <h2>Total number of items: {orderTotal}</h2>

      {orderTotal > 20 && (
        <h1>are you sure you need to order this many burgers?</h1>
      )}
    </MenuContainer>
  )
}

export default MenuTotal
