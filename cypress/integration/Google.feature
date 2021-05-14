Feature: Google Main Page

  I want to open a search engine
  
  @focus
  Scenario: Opening a search engine page
    Given I open Google page
    Then I see "Google" in the title

  @focus
  Scenario: I can type into the search box
    Given I open Google page
    And I can type "I love cheese" into the search bar