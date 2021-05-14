import { Then, And } from "cypress-cucumber-preprocessor/steps";

Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
})

And(`I can type {string} into the search bar`, (string) => {
  cy.get('[title="Search"]').type(string)
})