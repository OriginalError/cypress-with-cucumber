Feature: React Redux Generated Application

  I want to test the react application
  
  @focus
  Scenario: React Redux App Serves with the correct title  
    # Given I open Google page
    Given I open react
    Then I see "React" in the title

  @focus
  Scenario: React Redux App starts at zero  
    # Given I open Google page
    Given I open react
    Then I see the counter
    And the counter is 0
    
  @focus  
  Scenario: Increment Counter
    Given I open react
    And the counter is 0
    When I press the increment button
    Then I see the counter
    And the counter is 1

  @focus
  Scenario: Decrement Counter
    Given I open react
    When I press the decrement button
    Then I see the counter
    And the counter is -1

  @focus
  Scenario Outline: Counter Manipulation
    Given I open react
    When I press the <increment or decrement> button <number> times
    Then the counter is <counter value>

    Examples:
    | increment or decrement | number | counter value |
    | increment              | 10     | 10            |
    | decrement              | 10     | -10           |