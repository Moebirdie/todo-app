# Simple Daily Planner
Calendar apps can be very basic or rather intricate depending on the use case of the app.  This project is specifically very basic by design to display the use of third party APIs, specifically Days.js, the Web Storage API and JQuery.  Days.js is a JavaScript library that focuses on manipulating date and time, while the Web Storage API provides the means for browsers to store data in a key/pair structure. In this case we are focusing on local storage which allows the data to persist even after the browser closes. JQuery is a Javascript library that makes various JavaScript functions more succinct.

Although the calendar page only displays the hours 8am to 8pm, the code was written to accept any/all hours based on a 24 hour day.  The only change necessary would be an update to the HTML where a one hour time block could be copied and the id updated to the appropriate 24 hour integer. No additional updates are needed.  This HTML block is marked in the index.html file for ease of updating.


## Installation
This is a browser based app which requires no installation, only a url to access.

Github Repository:  https://github.com/Moebirdie/daily-planner  
Live URL: https://moebirdie.github.io/daily-planner/


## Usage
When opened by the user for the first time, a one page calendar is shown with the current date and time displayed in the header.  An empty calendar renders below with hourly time blocks to enter and save data.  The expected behavior using this calendar is as follows:

* As a user, I can visually see the day of the week, and time of day in the header of my calendar. This data updates each second so the current time is displayed.  
* As a user, I can visually see the state of each hourly time block, whether they are in the past, present or future, based on their color.  
* As a user, if I keep my calendar open and the time moves to the next hour, within 10 mins my calendar will update the coloring to reflect the current state of the time blocks.
* As a user, I can enter data into a time block and click the save button; That data will persist.  
* As a user, if I refresh my page, the data will persist.  
* As a user, if I close my browser and reopen the webpage, the data I saved will repopulate when the page displays.  
* As a user, I can edit the data in any time block, including removing the data, save it and that changed data will persist.  
* As a user, I can navigate to the bottom of the calendar and click the clear all button; All data is permanently removed from the time blocks and I am left with a blank calendar.  
    
## Visual Description

**Initial page load of calendar.  Displays current date and time, and color coded time blocks reflecting their state, either past, present or future.**

![image](https://github.com/Moebirdie/daily-planner/assets/93432701/02d4d80c-6d54-4115-9fcd-878c6fdd4fd9)

  
**Updated time block of information that has been saved.**

![image](https://github.com/Moebirdie/daily-planner/assets/93432701/743d0dc8-07ac-46f3-92b9-bb7b134108fe)

  
  
**Page view after closing browser and reopening calendar page.**

![image](https://github.com/Moebirdie/daily-planner/assets/93432701/d0ce54ab-debb-4db2-9c2e-33eed9fdfaa5)

  
  
**Clear all button - clears page.  Not required but simple addition.**

![image](https://github.com/Moebirdie/daily-planner/assets/93432701/f13d1c27-3ade-4397-a6f9-428b77b93745)

  
  
**Page view after clear all button clicked.**
    
![image](https://github.com/Moebirdie/daily-planner/assets/93432701/81a001b3-34b0-40cc-97bf-c721a223db47)


  
  
## License
[MIT](https://choosealicense.com/licenses/mit/)



