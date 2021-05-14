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
    