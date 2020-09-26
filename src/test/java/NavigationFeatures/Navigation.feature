Feature: Navigation

  Scenario Outline: Navigate back, forward and refresh
    Given That I am a Chrome user
    When I access "<Webpage>" page
    Then I can see "<Website>" on page title
    Then I access "<SecondSite>" And I can see "<Website2>" on page title
    When I press back button
    Then I am on "<Website>"
    And when I press forward button
    Then I can see the "<Website2>" on page title
    And when I press the refresh button
    Then also I am on "<Website2>" page

    Examples:
      | Webpage                   | Website   | SecondSite                 | Website2 |
      | https://www.yahoo.co.uk   | Yahoo     | https://www.HSBC.co.uk     | HSBC     |
      | https://www.debenhams.com | Debenhams | https://www.Barclays.co.uk | Barclays |
      | https://www.amazon.co.uk  | Amazon    | https://www.Next.co.uk     | Next     |
