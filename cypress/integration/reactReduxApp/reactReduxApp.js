import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

function getElementByTagAndId(tag, id) {
  return cy.get(`[${tag}="${id}"]`)
}

function getCounter() {
  return getElementByTagAndId("cy-test", "counter")
}

function getIncrementButton() {
  return getElementByTagAndId("cy-test", "increment")
}

function getDecrementButton() {
  return getElementByTagAndId("cy-test", "decrement")
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
  getIncrementButton()
    .click()
})

When(`I press the increment button {int} times`, (clicks) => {
  // you can use js inline for looping - simplicity
  for (let i = 0; i < clicks; i++) { 
    getIncrementButton()
      .click()
  }
})

When(`I press the decrement button`, () => {
  getDecrementButton()
    .click()
})

When(`I press the decrement button {int} times`, (clicks) => {
  // you can use js inline for looping - simplicity
  for (let i = 0; i < clicks; i++) { 
    getDecrementButton()
      .click()
  }
})