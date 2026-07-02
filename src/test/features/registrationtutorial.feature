@tutreg
Feature: register

        Background:

            Given user navigate to the tutorialsninja website
              And user click the register link

        @smoke
        Scenario: validRegister
             When user enter the first name as "kp"
              And user enter the last name as "b"
              And user enter the register email as "bksachjgcg2@gmail.com"
              And user enter the telephone as "8989897652"
              And user enter the register password as "125678@"
              And user enter the confirm password as "125678@"
              And user select the privacy policy checkbox
              And user click the continue button
             Then user should see the register success message "Your Account Has Been Created!"
