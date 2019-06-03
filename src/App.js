//App.js
import React, { useContext } from "react"
import { MenuItemsContext } from "./MenuItemsContext"
import MenuTotal from "./components/MenuTotal"
import styled from "@emotion/styled"

const Container = styled.div`
  text-align: center;
`

const FoodItemsWrapper = styled.div`
  display: flex;
  margin: 10rem 2.2rem 10rem 2.2rem;
  flex-wrap: wrap;
`

const FoodItem = styled.div`
  border: 1px solid black;
  box-shadow: 20px 30px 31px -24px rgba(0, 0, 0, 0.75);

  padding: 2.2rem;
  flex: 1 1 25%;
  margin: 2.2rem;
  text-align: center;
  p {
    font-size: 60px;
    cursor: pointer;
  }
  h1 {
    font-size: 100px;
    cursor: pointer;
  }

  &:active {
    box-shadow: 3px 4px 5px -2px rgba(0, 0, 0, 0.75);
    transition: 0.05s;
  }
`

function App() {
  const { state, dispatch } = useContext(MenuItemsContext)
  const { hamburgerCount, friesCount, milkshakeCount } = state

  return (
    <Container>
      <h1>
        <p>Great news, John - This is how much food you have...</p>
      </h1>
      <FoodItemsWrapper>
        <FoodItem onClick={() => dispatch({ type: "incrementHamburgers" })}>
          <p>{`\u{1F354}`} </p>
          <p>{hamburgerCount}</p>
        </FoodItem>

        <FoodItem onClick={() => dispatch({ type: "incrementFries" })}>
          <p>{`\u{1F35F}`} </p>
          <p>{friesCount}</p>
        </FoodItem>

        <FoodItem onClick={() => dispatch({ type: "incrementMilkshake" })}>
          <p>
            <p>{`\u{1F95B}`}</p>
            <p> {milkshakeCount}</p>
          </p>
        </FoodItem>
      </FoodItemsWrapper>
      <MenuTotal />
    </Container>
  )
}

export default App
