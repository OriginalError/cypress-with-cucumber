import { getIncrementButton, getDecrementButton } from "./reactReduxPage"

function incrementCounter() {
  getIncrementButton()
    .click()
}

function decrementCounter() {
  getDecrementButton()
    .click()
}

module.exports = { 
      incrementCounter
    , decrementCounter 
}