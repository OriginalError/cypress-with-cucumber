Feature: Google Main Page

  I want to open a search engine
  
  @focus
  Scenario: Opening a search engine page
    Given I open Google page
    Then I see "Google" in the title

  @focus
  Scenario: I can type into the search box
    Given I open Google page
    And I can type "Ray Romano" into the search bar
    When I press enter in the search bar
    And one link is to "https://en.wikipedia.org/wiki/Ray_Romano"