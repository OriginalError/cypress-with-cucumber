import { Given } from "cypress-cucumber-preprocessor/steps";

// const reactUrl = 'http://localhost:3000'
Given('I open react', () => {
  cy.visit('http://localhost:3000')
})

Given('I see the counter', () => {
  cy.get('[cy-test="counter"]')
})

Given(`the counter is {int}`, (counterNumber) => {
  cy.get('[cy-test="counter"]').contains(counterNumber)
})