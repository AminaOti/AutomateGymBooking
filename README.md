# Automate Gym Booking

It's the pandemic, gym classes have just re-started and due to social distancing the class capacity at my tiny gym is VERY limited. What does this mean? It means that the gym class booking race has just got FAST (like really FAST) and I don't want to stay up until 00:00 staring at my phone like a socially-deprived mad women waiting for a booking to open.

Like a damsel in distress I needed something to save me- I needed Automation. Thankfully, to the rescue came this Selenium project which books my gym slot at the moment the clock strikes 00:00 (yes Cinderella you can go to the ball  *** cough ***  gym). Praise the Lord for automation! (and pray it doesn't take my job).

Feel free to give my code a look and let me know if it has encouraged you to automate something. Also, a special thank you Dragomir Enachi for inspiring me with his project:_https://github.ibm.com/Dragomir-Enachi/lta-tennis-court-booking_

contact me on: aminaoti@outlook.com

# How it works:

The code in this repository runs a Selenium E2E test which simulates the user flow of making a gym booking. A Jenkins job is then run on this repository every Monday morning at 00:00 

Note, an env file is used to send booking information such as user details, day of booking, activity, ect. from the Jenkins job to the repositry.

## Code walk through
The main file: __ tests__/book.test.js runs through the steps of booking a gym slot by calling functions from: helpers/testHelp.js

# How to run the code locally:

1. `$ git clone https://github.com/AminaOti/AutomateGymBooking.git`
2. `$ npm install `
3. `$ cp .env.local .env`
4. populate the env file
5. `$ npm test `
