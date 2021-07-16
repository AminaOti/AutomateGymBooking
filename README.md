# AutomateGymBooking

It's the pandemic, gym classes have just re-started and due to social distancing the class capacity at my tinny gym is VERY limited. What does this mean? It means that the gym class booking race has just got FAST (like really FAST) and I don't want to stay up until 00:00 staring at my phone like a socially-depraved mad women waiting for a booking to open.

Like a damsel in distress I needed something to save me, I needed Automation. So, I wrote a bit of selenium code that at the moment the clock strikes 00:00 books my gym slot (yes Cinderella you can go to the ball  *** cough ***  gym)!

Feel free to give my code a look and let me know if it has encouraged you to automate something. Also, a special thank you Dragomir Enachi for inspiring me with your project:_https://github.ibm.com/Dragomir-Enachi/lta-tennis-court-booking_

# How it works:

The code in this repository runs a Selenium E2E test which simulates the user flow of making a gym booking. A Jenkins job is then run on this repository every Monday morning at 00:00 

Note, the env file is used send the booking information such as user details, day of booking, activity, ect. from the Jenkins job to the env file.

# How to run the code locally:

1. `$ npm install `
2. `$ cp .env.local .env`
3. populate the env file
4. `$ npm test `
