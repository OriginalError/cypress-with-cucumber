@focus
Feature: React Redux Generated Application

  I want to test the default generaged react/redux application
  
  Scenario: React Redux App Serves with the correct title  
    Given I open react
    Then I see "React" in the title

  Scenario: React Redux App starts at zero  
    Given I open react
    Then I see the counter
    And the counter is 0
    
  Scenario: Increment Counter
    Given I open react
    And the counter is 0
    When I press the increment button
    Then I see the counter
    And the counter is 1

  Scenario: Decrement Counter
    Given I open react
    When I press the decrement button
    Then I see the counter
    And the counter is -1

  Scenario: Both
    Given I open react
    When I press the decrement button 3 times
    And I press the increment button 5 times
    Then the counter is 2

    Scenario: Both
    Given I open react
    And I press the increment button 3 times
    When I press the decrement button 2 times
    Then the counter is 1

  Scenario Outline: Counter Manipulation
    Given I open react
    When I press the <increment or decrement> button <number> times
    Then the counter is <counter value>

    Examples:
    | increment or decrement | number | counter value |
    | increment              | 10     | 10            |
    | decrement              | 10     | -10           |
    | increment              | 20     | 20            |