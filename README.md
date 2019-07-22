This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Zach's Clocktower

The year is 3009. London was bombed into dust during World War VII, but the remnants of humanity have managed to rebuild. The mysteries of analog clocks have long been forgotten and Big Ben was re-created with a giant LED display.

### notes

• The sky changes according to the time!

• I deviated from one bit of the instructions by creating inputs that would prevent the user from using the wrong format, instead of using explicit error messages.

• The tests cases from the original notes are in src/tests/dingcount.test.js and can be run using `npm run tests`.

• It works on mobile, although I only tested on my own phone, an iPhone6.

## Original KBRA notes

### User Story
As a clock enthusiast, I want to know how many times a clock tower will ring its bell between two given times, so that I can plan to sing along.
### Background
A clock tower will ring its bell every hour, on the hour, a number of times equal to the number indicated by the hours hand.
### Example
At 3pm, the clock tower will ring the bell three times. At midnight, it will ring the bell 12 times.
Technical Specification
• I should be able to input a start time and end time into the browser. Both times will be in twenty-four hour notation, such as 12:00 for noon and 15:30 for half-past three in the afternoon.
• If a user enters a number that is not in the expected format, an error message should be displayed.
• The UI should display the total number of times the clock tower will ring its bell between the two provided times.
### Notes
1. If either time is on the hour (ex. 14:00) then you should count the bell rings that would occur at that hour.
2. If both times are equal, treat it as if twenty-four hours will pass and not that the two times are the same time on the same day.
