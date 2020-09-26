$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Navigation.feature");
formatter.feature({
  "line": 1,
  "name": "Navigation",
  "description": "",
  "id": "navigation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Navigate back, forward and refresh",
  "description": "",
  "id": "navigation;navigate-back,-forward-and-refresh",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "That I am a Chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I access \"\u003cWebpage\u003e\" page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I can see \"\u003cWebsite\u003e\" on page title",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I access \"\u003cSecondSite\u003e\" And I can see \"\u003cWebsite2\u003e\" on page title",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I press back button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I am on \"\u003cWebsite\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "when I press forward button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can see the \"\u003cWebsite2\u003e\" on page title",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "when I press the refresh button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "also I am on \"\u003cWebsite2\u003e\" page",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "navigation;navigate-back,-forward-and-refresh;",
  "rows": [
    {
      "cells": [
        "Webpage",
        "Website",
        "SecondSite",
        "Website2"
      ],
      "line": 16,
      "id": "navigation;navigate-back,-forward-and-refresh;;1"
    },
    {
      "cells": [
        "https://www.yahoo.co.uk",
        "Yahoo",
        "https://www.HSBC.co.uk",
        "HSBC"
      ],
      "line": 17,
      "id": "navigation;navigate-back,-forward-and-refresh;;2"
    },
    {
      "cells": [
        "https://www.debenhams.com",
        "Debenhams",
        "https://www.Barclays.co.uk",
        "Barclays"
      ],
      "line": 18,
      "id": "navigation;navigate-back,-forward-and-refresh;;3"
    },
    {
      "cells": [
        "https://www.amazon.co.uk",
        "Amazon",
        "https://www.Next.co.uk",
        "Next"
      ],
      "line": 19,
      "id": "navigation;navigate-back,-forward-and-refresh;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3940452868,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Navigate back, forward and refresh",
  "description": "",
  "id": "navigation;navigate-back,-forward-and-refresh;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "That I am a Chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I access \"https://www.yahoo.co.uk\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I can see \"Yahoo\" on page title",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I access \"https://www.HSBC.co.uk\" And I can see \"HSBC\" on page title",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I press back button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I am on \"Yahoo\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "when I press forward button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can see the \"HSBC\" on page title",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "when I press the refresh button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "also I am on \"HSBC\" page",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Navigation.that_I_am_a_Chrome_user()"
});
formatter.result({
  "duration": 249808935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.yahoo.co.uk",
      "offset": 10
    }
  ],
  "location": "Navigation.i_access_page(String)"
});
formatter.result({
  "duration": 2876584670,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yahoo",
      "offset": 11
    }
  ],
  "location": "Navigation.i_can_see_on_page_title(String)"
});
formatter.result({
  "duration": 12701809,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.HSBC.co.uk",
      "offset": 10
    },
    {
      "val": "HSBC",
      "offset": 49
    }
  ],
  "location": "Navigation.i_access_And_I_can_see_on_page_title(String,String)"
});
formatter.result({
  "duration": 1345282586,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.i_press_back_button()"
});
formatter.result({
  "duration": 295147920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yahoo",
      "offset": 9
    }
  ],
  "location": "Navigation.i_am_on(String)"
});
formatter.result({
  "duration": 38793979,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.when_I_press_forward_button()"
});
formatter.result({
  "duration": 855137975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HSBC",
      "offset": 15
    }
  ],
  "location": "Navigation.i_can_see_the_on_page_title(String)"
});
formatter.result({
  "duration": 9752091,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.when_I_press_the_refresh_button()"
});
formatter.result({
  "duration": 501097864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "HSBC",
      "offset": 14
    }
  ],
  "location": "Navigation.also_I_am_on_page(String)"
});
formatter.result({
  "duration": 157058227,
  "status": "passed"
});
formatter.after({
  "duration": 94175874,
  "status": "passed"
});
formatter.before({
  "duration": 2435875437,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Navigate back, forward and refresh",
  "description": "",
  "id": "navigation;navigate-back,-forward-and-refresh;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "That I am a Chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I access \"https://www.debenhams.com\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I can see \"Debenhams\" on page title",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I access \"https://www.Barclays.co.uk\" And I can see \"Barclays\" on page title",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I press back button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I am on \"Debenhams\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "when I press forward button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can see the \"Barclays\" on page title",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "when I press the refresh button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "also I am on \"Barclays\" page",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Navigation.that_I_am_a_Chrome_user()"
});
formatter.result({
  "duration": 54821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.debenhams.com",
      "offset": 10
    }
  ],
  "location": "Navigation.i_access_page(String)"
});
formatter.result({
  "duration": 7006891948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Debenhams",
      "offset": 11
    }
  ],
  "location": "Navigation.i_can_see_on_page_title(String)"
});
formatter.result({
  "duration": 9517927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.Barclays.co.uk",
      "offset": 10
    },
    {
      "val": "Barclays",
      "offset": 53
    }
  ],
  "location": "Navigation.i_access_And_I_can_see_on_page_title(String,String)"
});
formatter.result({
  "duration": 2174655315,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.i_press_back_button()"
});
formatter.result({
  "duration": 1962819975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Debenhams",
      "offset": 9
    }
  ],
  "location": "Navigation.i_am_on(String)"
});
formatter.result({
  "duration": 5005786,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.when_I_press_forward_button()"
});
formatter.result({
  "duration": 1364999563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Barclays",
      "offset": 15
    }
  ],
  "location": "Navigation.i_can_see_the_on_page_title(String)"
});
formatter.result({
  "duration": 24093659,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.when_I_press_the_refresh_button()"
});
formatter.result({
  "duration": 55561683,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Barclays",
      "offset": 14
    }
  ],
  "location": "Navigation.also_I_am_on_page(String)"
});
formatter.result({
  "duration": 1015762424,
  "status": "passed"
});
formatter.after({
  "duration": 111361916,
  "status": "passed"
});
formatter.before({
  "duration": 3189530886,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Navigate back, forward and refresh",
  "description": "",
  "id": "navigation;navigate-back,-forward-and-refresh;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "That I am a Chrome user",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I access \"https://www.amazon.co.uk\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I can see \"Amazon\" on page title",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I access \"https://www.Next.co.uk\" And I can see \"Next\" on page title",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I press back button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I am on \"Amazon\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "when I press forward button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I can see the \"Next\" on page title",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "when I press the refresh button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "also I am on \"Next\" page",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "Navigation.that_I_am_a_Chrome_user()"
});
formatter.result({
  "duration": 69176,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.amazon.co.uk",
      "offset": 10
    }
  ],
  "location": "Navigation.i_access_page(String)"
});
formatter.result({
  "duration": 5137554731,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon",
      "offset": 11
    }
  ],
  "location": "Navigation.i_can_see_on_page_title(String)"
});
formatter.result({
  "duration": 19848354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.Next.co.uk",
      "offset": 10
    },
    {
      "val": "Next",
      "offset": 49
    }
  ],
  "location": "Navigation.i_access_And_I_can_see_on_page_title(String,String)"
});
formatter.result({
  "duration": 3707677403,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.i_press_back_button()"
});
formatter.result({
  "duration": 1240392600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amazon",
      "offset": 9
    }
  ],
  "location": "Navigation.i_am_on(String)"
});
formatter.result({
  "duration": 370251505,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.when_I_press_forward_button()"
});
formatter.result({
  "duration": 1943650099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 15
    }
  ],
  "location": "Navigation.i_can_see_the_on_page_title(String)"
});
formatter.result({
  "duration": 567693860,
  "status": "passed"
});
formatter.match({
  "location": "Navigation.when_I_press_the_refresh_button()"
});
formatter.result({
  "duration": 56382846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next",
      "offset": 14
    }
  ],
  "location": "Navigation.also_I_am_on_page(String)"
});
formatter.result({
  "duration": 1583466906,
  "status": "passed"
});
formatter.after({
  "duration": 110254487,
  "status": "passed"
});
});