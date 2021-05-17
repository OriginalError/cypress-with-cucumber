import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { getCounter } from "./reactReduxPage"
import { incrementCounter, decrementCounter } from "./reactReduxFlow"

function getElementByTagAndId(tag, id) {
  return cy.get(`[${tag}="${id}"]`)
}

// const reactUrl = 'http://localhost:3000'
Given('I open react', () => {
  cy.visit('http://localhost:3000')
})

Then('I see the counter', () => {
  getCounter()
})

Then(`the counter is {int}`, (counterNumber) => {
  getCounter()
    .contains(counterNumber)
})

When(`I press the increment button`, () => {
  incrementCounter()
})

When(`I press the increment button {int} times`, (clicks) => {
  // you can use js inline for looping - simplicity
  for (let i = 0; i < clicks; i++) { 
    incrementCounter()
  }
})

When(`I press the decrement button`, () => {
  decrementCounter()
})

When(`I press the decrement button {int} times`, (clicks) => {
  // you can use js inline for looping - simplicity
  for (let i = 0; i < clicks; i++) { 
    decrementCounter()
  }
})