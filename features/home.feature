Feature: The Internet header

    Scenario Outline: As a user, I can check Internet header

        Given I am open the Internet page <homepageurl>
        Then I should see a header message <headermessage>

        Examples:
            | homepageurl                         | headermessage           |
            | https://the-internet.herokuapp.com/ | Welcome to the-internet |

