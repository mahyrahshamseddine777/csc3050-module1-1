#2026-09-24
Day 2 Workshop
Present: Derrick Tawaih and Mahyrah Shamseddine
Scribe: Derrick Tawaih

Plan:
Goals: Create a small semantic html file and pick a pitch
Build
-Shipped goals 1 and 2
Handoff package: Basic html page
Commitments before next day 2: Do a pull request. Also test HTTP requests on webpage. 

#2026-10-08
Day 2 Workshop
Present: Derrick Tawaih and Mahyrah Shamseddine
Scribe: Derrick Tawaih

Plan: Structure a semantic HTML file that utilizes ARIA, then make it responsive using CSS, and finally make it interactive using Javascript.
Goals: Create a page that looks good and is mobile responsive, make a button that can redirect to a different website, 
Build
Shipped goals 1 and 2
Handoff package: Structured HTML file, CSS file, and JS file.
Commitments before next day 2: Do a pull request. Also test HTTP requests on webpage.

#Spotlight

## Project Description

Spotlight is a social media website for hairstylists and customers. The goal of the website is to give hairstylists a place where they can create a profile, list their specialties and services, and eventually manage their own information. Customers will be able to create an account, search for hairstylists based on their name, location or specialties, and go to the stylist's profile to see more information about them and the services they offer. 

For Milestone 1, the website is front-end only. There's no database or server connected yet.

## Current Features

- Search for hairstylists by name
- Search by location
- Search by specialty
- Dropdown search results
- Links from search results to individual stylist profile pages
- Login popup
- Registration popup
- Separate registration options for customers and hairstylists
- Responsive images for mobile, tablet, and desktop
- Mobile-friendly navigation and page layout

## Technical Reflection

When building Spotlight, we wanted the HTML to be organized in a way that would make sense as the website gets bigger. We used semantic elements such as <header>, <nav>, <main>, <section>, and <footer> instead of putting the whole page inside <div> elements. We also used actual buttons for Login and Register and forms with labels for the different input fields. The registration form lets the user choose between a customer account and a hairstylist account. Hairstylists also have fields for their business name, location, and specialties. Using these HTML elements makes the code easier for us to read and also helps with accessibility because the browser and assistive technology can better understand what each part of the page is supposed to do.

For the layout, we used Flexbox in areas where the content mainly needs to go in one direction. The navigation bar uses Flexbox because we needed the Spotlight name, navigation links, search bar, Login button, and Register button to stay organized across the top of the page. We also used Flexbox for the footer and for positioning content in different sections. We added media queries for mobile, tablet, and desktop screen sizes so that images can adjust depending on the size of the screen. 

One of the biggest challenges we had was getting the stylist search feature to work. The search uses a JavaScript array with fake stylist information. Each stylist has a name, location, list of specialties, and a link to their profile page. At first, some of the stylist objects used "specialty" while others used "specialties". The search code was expecting "specialties" to always be an array, so the search stopped working when JavaScript reached a stylist that was structured differently. We fixed it by changing every stylist to use a "specialties" array, even if they only had one specialty. After fixing that, we was able to search by the stylist's name, location, or specialty. We also added a dropdown so the results only appear when somebody searches instead of displaying all of the stylists on the homepage. This helped us understand how important it is to keep data structured consistently when different parts of the JavaScript are using it.

