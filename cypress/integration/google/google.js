import { Given } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'
Given('I open Google page', () => {
  cy.visit(url)
})

And(`I can type {string} into the search bar`, (string) => {
  cy.get('[title="Search"]').type(string)
})

And('I press enter in the search bar', () => {
  cy.get('[title="Search"]').type('{enter}');
})

And('one link is to {string}', (string) => {
  cy.get(`[href="${string}"]`)
})