import { getElementByTagAndId } from "../common/getElement"

function getCounter() {
  return getElementByTagAndId("cy-test", "counter")
}

function getDecrementButton() {
  return getElementByTagAndId("cy-test", "decrement")
}

function getIncrementButton() {
  return getElementByTagAndId("cy-test", "increment")
}

function goToPage() {
  cy.visit('http://localhost:3000')
}

module.exports = { 
      getCounter
    , getDecrementButton
    , getIncrementButton
    , goToPage 
}