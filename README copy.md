# Amina's Title:

It's the pandemic, gym classes have just re-started and due to social distancing the class capacity at my tinny gym is VERY limited. What does this mean? It means that the gym class booking race has just got FAST (like really FAST) and I don't want to stay up until 00:00 staring at my phone like a socially-depraved mad women waiting for a booking to open.

Like a damsel in distress I needed something to save me, I needed Automation. So, I wrote this sneaky selenium code that books my gym slot at the moment the clock strikes 00:00 (yes Cinderella you can go to the ball _cough_ gym) , praise the Lord for automation (and pray that it doesn't take my job)!

Feel free to give my code a look and let me know if it has encouraged you to automate something. Also, a special thank you @Dragomir for inspiring me with your project:…..

---

In an attempt to regain - some - of my sanity I created this lil sneaky selenium code that books my gym slot at the moment the clock strikes 00:00, praise the Lord for automation (and pray that it doesn't take my job)!

Selenium came to my resuce (wow I never thought I would day that) and ….

# LTA Tennis Court Booking

## Need help?

Please get in touch with me: dragomir.enachi.uk@gmail.com

## Did it save your time?

If so, please donate: http://paypal.me/dragomirenachi

## Command to Run test

1. $ npm install
2. $ npm test

## Why and how?

Tennis courts can booked 6 days in advance, the booking slot opens at midnight. Acton Park provides free courts that gets booked quickly.

Previously I had to set an alarm 23:58 to wake me up, so I have 2 minutes to login and book the court.

As I'm an automation expert, I've decided to automate booking process and never miss it (my favourite time 17:30).

The test script is using selenium, jest chromedriver and delay.

Jenkins will trigger the build each day at 23:53, Jenkins will perform setup, and the script will wait(using delay) till next hour starts (00:00:01) to continue booking.

The script will try to book court nr. 1, and if that fails (someone else booked it) - will try to book court 2 in Acton Park.
It will use username and password to login to [https://auth.clubspark.uk/account/signin](https://auth.clubspark.uk/account/signin)

[Jenkins](https://cio-london-jenkins.swg-devops.com/job/dragomir-enachi/job/lta-book-tennis-court/) build trigger set to:

TZ=Europe/London

53 23 \* \* 0,1,2,3,4,5,6,7

To reuse the script you would need to provide:

- Environment variable to login to Club Spark website LTA_USERNAME and LTA_PASSWORD
- Booking location needs to be changed from https://clubspark.lta.org.uk/ActonPark2/ to your location
- Court ids need to be adjusted in the book.test.js file to match your booking location
