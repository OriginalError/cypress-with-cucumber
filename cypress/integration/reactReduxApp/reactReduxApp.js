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

When(`I press the increment button`, (counterNumber) => {
  cy.get('[cy-test="increment"]').click()
})

When(`I press the decrement button`, (counterNumber) => {
  cy.get('[cy-test="decrement"]').click()
})