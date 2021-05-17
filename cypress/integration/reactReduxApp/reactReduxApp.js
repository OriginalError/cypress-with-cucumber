import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { getCounter, goToPage } from "./reactReduxPage"
import { incrementCounter, decrementCounter } from "./reactReduxFlow"

Given('I open react', () => {
  goToPage()
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