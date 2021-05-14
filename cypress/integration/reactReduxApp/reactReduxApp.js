import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

// const reactUrl = 'http://localhost:3000'
Given('I open react', () => {
  cy.visit('http://localhost:3000')
})

Then('I see the counter', () => {
  cy.get('[cy-test="counter"]')
})

Then(`the counter is {int}`, (counterNumber) => {
  cy.get('[cy-test="counter"]').contains(counterNumber)
})

When(`I press the increment button`, () => {
  cy.get('[cy-test="increment"]').click()
})

When(`I press the increment button {int} times`, (clicks) => {
  // you can use js inline for looping - simplicity
  for (let i = 0; i < clicks; i++) { 
    cy.get('[cy-test="increment"]').click()
  }
})

When(`I press the decrement button`, () => {
  cy.get('[cy-test="decrement"]').click()
})

When(`I press the decrement button {int} times`, (clicks) => {
  // you can use js inline for looping - simplicity
  for (let i = 0; i < clicks; i++) { 
    cy.get('[cy-test="decrement"]').click()
  }
})