import { getElementByTagAndId } from "../common/getElement"

function getCounter() {
  return getElementByTagAndId("cy-test", "counter")
}

function getIncrementButton() {
  return getElementByTagAndId("cy-test", "increment")
}

function getDecrementButton() {
  return getElementByTagAndId("cy-test", "decrement")
}
  

module.exports = { getCounter, getIncrementButton, getDecrementButton }