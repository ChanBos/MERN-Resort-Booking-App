<h1 align="center">Welcome to MERN-Resort-Booking-App 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-16.2.0-blue.svg" />
  <img src="https://img.shields.io/badge/npm-7.19.1-blue.svg" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> A resort booking application built using the MERN Stack.

## Table of Contents:

- [System Architecture](#systemarchitecture)
    - [How did I deploy the application and why?](#howdidideploytheapplicationandwhy?)
    - [What tools did I use to style the application?](#whattoolsdidiusetostyletheapplication?)
        - [Why am I using these libraries?](#whyamiusingtheselibraries?)
- [System Requirements Specification](#systemrequirementsspecification)
    - [Analysing some existing web applications that do something similar to what I want to accomplish](#analysingsomeexistingwebapplicationsthatdosomethingsimilartowhatIwanttoaccomplish)
    - [How am I going to make my website stand out from those of my competitors?](#howamigoingtomakemywebsitestandoutfromthoseofmycompetitors?)
    - [Who will use the application and to what benefit?](#whowillusetheapplicationandtowhatbenefit?)
    - [How will the application work?](#howwilltheapplicationwork?)
    - [Functional and non-functional requirements of the web application](#functionalandnon-functionalrequirementsofthewebapplication)
    - [User stories](#userstories?)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage Instructions](#usage-instructions)
- [Run Tests](#runtests)
- [Application Security](#application-security)
- [Handling of User Credentials and Other Secure Information](#handling-of-user-credentials-and-other-secure-information)
- [Credits](#credits)
- [Author Details](#author-details)

## System Architecture

I will be making use of the 3-tier Architecture, the MERN Stack, which contains the client, server and database.

- For the client Tier (View), I will be making use of React.js (Create React App (CRA)), CSS and HTML.
- For the Business Logic Tier (Controller), I will be making use of Express.js and Node.js.
- For the Database Tier (Model), I will be making use of a NoSQL database program, MongoDB.

I have chosen this structure due to the following reasons:

- The MERN Stack facilitates open-source support: MongoDB, Express.js, React.js, Node.js.
- The application will have full functionality using the MERN Stack. It covers all of the functional requirements.
- The application will be easier to test.
- The application will be easier to deploy.
- There is sufficient support should I get stuck implementing functionality.
- The application will be scalable, fast and perform as it is intended to.
- The application will be built using only one language, JavaScript, so it is easily integrable.

### How did I deploy the application and why?

I will be deploying the application using Heroku which is an open-source platform that offers a fast and efficient way to deploy full-stack applications.

I will first push the application to GitHub and through GitHub and Heroku's integrations deploy the application via the Heroku dashboard.

Each local push that is made to GitHub will automatically update the deployed Heroku application, which in turn decreases the time updating the application on multiple platforms.

### What tools did I use to style the application?

- [Font Awesome](https://fontawesome.com/)
  - What am I using it for: Icons.
- [Sweet Alert 2](https://sweetalert2.github.io/)
  - What am I using it for: Alert pop-ups.
- [Ant Design]()
  - What am I using it for: Date picker, Tabs and Tags.
- [AOS Animate On Scroll Library]()
  - What am I using it for: Animation of elements on scroll.
- [Moment]()
  - What am I using it for: Date formatting.
- [React Bootstrap]()
  - What am I using it for: For responsive rows, columns, forms, images, navigation, dropdowns, buttons, carousels, modals, cards and containers.
- [React Stripe]()
  - What am I using it for: Payment pop-up and handling.
- [React Spinners]()
  - What am I using it for: Loading spinning animations.
- [CSS]()
  - What am I using it for: All other general styling purposes.

#### Why am I using these libraries?

The chosen libraries offers integrations that can create a convenient, exciting, user-friendly and beautiful User Interface (UI).

All the anticipated functional aspects can be satisfied with less code and in an attractive manner.

I can also bridge the gap, using CSS, to fill in the remainder of the layouts and offerings, by customising the elements to display an excitable application.

## System Requirements Specification

### Analysing some existing web applications that do something similar to what I want to accomplish

I wish to create a resort booking application like the existing TripAdvisor application, but for a standalone resort. Both of the applications require a team or individual to sign in in order to access the application functions. Both applications offer the ability for users to be able to book accommodation depending on what is available depending on to- and from dates. Admin members are able to post new accommodation options and to manage their bookings and users via their own panel.

### How am I going to make my website stand out from those of my competitors?

I am keeping the application clean and easy to navigate with little distracting features, which offers a simpler and convenient way for users, as well as for admin users to enjoy. The application is built with only open-source libraries, that makes it less costly to run and maintain.

### Who will use the application and to what benefit?

This specific application will be used by a resort to manage their clients' bookings and to convey further information about the resort and activities around it. There are a couple of reasons for a resort to have this application. These are, but are not limited to, the following:

- Having a website increases the marketing scope and increases the accessibility of the company.
- It reduces paper marketing expenses and the environmental impact on our planet.
- All of the information is kept in one place, which reduces the risk of losing important information, especially since it will be kept on a database.
- Coordinating the bookings will be made easier, as they can all be viewed from one space, instead of flipping through diaries of multiple administrators.
- The storage of clients' information is simplified and easily accessible by administrators.
- It increases the security of sensitive information as it will feature authentication and Helmet's security feature.
- ReactJS’s is component-based, which offers reusability of code that ensures faster and easier development.

### How will the application work?

The application will allow user and admin access, which will be authenticated and authorized. Once successfully logged in a user can browse available cabins and admin users can view the bookings (READ CRUD operation) that are made via their users.

Users can book accommodation by date and pay (POST CRUD operation) for it in one place, as I will be making use of Ant Design's and Stripe's functionality. They are also able to filter cabins by searching and by type. They are then able to view their bookings (GET CRUD operation) and, should they wish to do so, cancel the booking.

Admin users are able to manage bookings, rooms and users via their own panel. They can do so by adding a room (POST CRUD operation), editing a room (PUT CRUD operation) and deleting a room (DELETE CRUD operation).

### Functional and non-functional requirements of the web application

---

| Functional:                                                                                                                          | Non-functional:                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------- |
| The application should authenticate the credentials when the user signs up, in and out via Google, Facebook and the traditional way. | A user should be able to sign up/ in/ out via Google, Facebook and the traditional way to enable them to view their profile and bookings. |
| The application should be able to perform CRUD operations.                                                                           | An admin member should be able to add a new suite, see existing suites, edit an existing suite and delete suites.                         |
| The application should be able to store information on MongoDB.                                                                      | Admin/ the user should be able to access a record of the existing bookings and changes should be stored.                                  |
| The application should be properly tested.                                                                                           | Admin/ the user should have a reliable application that runs smoothly.                                                                    |
| The application should offer a search function with a filter feature to allow one to view available suites.                          | Admin/ user should be able to search for suites by filtering through the type and keywords.                                               |
| The application should offer an attractive and functional user interface.                                                            | Admin/ user should enjoy spending time on the application and experience a convenient and attractive application.                         |
| The application should be secured by Helmet to avoid breaches.                                                                       | Admin/ user should not have to worry about cyber hacking attacks and experiencing data loss whilst using the application.                 |
| The application should feature speedy responses by making use of optimized images and lightweight features.                          | Admin/ user should be able to access the task data without waiting for long periods of time.                                              |
| The application should be easily maintainable and frequent check-ups are required.                                                   | Admin/ user should always have the application ready to go without it crashing.                                                           |
| The application should be made responsive so that it can be viewed on multiple devices.                                              | Admin/ user should be able to access the application via a phone, tablet, laptop or a desktop and experience the same usability.          |
| The application should allow a convenient way to reach support.                                                                      | Should there be problems with the application, an admin member/ user should be able to reach support in a convenient manner.              |

---

### User stories

---

- | Name: | As a/ an: | I want to:                | So that I can:                                                                                                    |
  | ----- | --------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
  | 1.    | Chanelle  | Destination Seeker        | View available accommodation.                                                                                     | Make a booking and know that it is not booked already.                                                         |
  | 2.    | John      | Resort Manager            | Be informed of when guests will be expected.                                                                      | Coordinate staff to have the suite ready for arrivals.                                                         |
  | 3.    | Ross      | Business Owner            | Allow only my business team to access an application with a list of bookings and be able to adjust the offerings. | Be assured that nobody else has access to view or edit sensitive information being shared via the application. |
  | 4.    | William   | Food and Beverage Manager | View the amount of guests that are visiting.                                                                      | Make sure that the bar and restaurant is sufficiently stocked.                                                 |
  | 5.    | Sam       | Office Manager            | Be aware of when guests will be checking in and out.                                                              | Remember the suite that I have booked for future reference.                                                    |
  | 6.    | Tessa     | Holiday Maker             | View details of the booking after my visit.                                                                       | Remember the suite that I have booked for future reference.                                                    |
  | 7.    | Ann       | Business Woman            | Possibly cancel my booking.                                                                                       | Cancel should the business meeting be cancelled.                                                               |
  | 8.    | Tyron     | Event Manager             | View the bookings for the coming week.                                                                            | Arrange the entertainment offerings according to the amount guests expected.                                   |

---

## Prerequisites

- node 16.2.0
- npm 7.19.1

## Installation

To run this project, do the following:

1. Select the directory that you wish to clone the project into. Example below:

```sh
cd folder/to/clone-into/`
```

2. Enter git clone [repository_URL] into the terminal or command prompt. Code and link below:

```sh
gh repo clone ChanBos/Car-Database-App`
```

3. If you want a different folder name, simply specify it as the last parameter. Example below:

```sh
gh repo clone ChanBos/Car-Database-App`
```

This will create a new directory which will initialize a .git directory within it, pulling all of the data from this project. You will find all of the files and folders in this directory, enabling you to use and edit it to your liking.

4. Navigate to this directory from the command line interface.

```sh
cd "C:\Users\user\...
```

5. Navigate to both the server and the client's directories in the command line interface and type the following to install all of the necessary node modules:

```sh
npm install
```

7. Open the server and the client to view the application in the browser. The server runs on http://localhost:8000/search and the client on http://localhost:3000.

## Usage Instructions

In the command line interface respectively type the following to run the client and server in development mode:

- Client
```
npm start
```

- Server
```
nodemon server.js
```

## Run Tests

```sh
npm run test
```

## Application Security

Helmet.js has been utilized to increase the security of the application. Helmet is a middleware for Express applications. It sets many different HTTP headers and aims to make applications more secure.

Adding these headers can help in avoiding attacks such as Cross-Site-Scripting (XSS), clickjacking, etc.

## Handling of User Credentials and Other Secure Information

1. Created a .env file in the root of the project, outside of the src folder.
2. Added the information to this file.
3. The .env file has been added to the .gitignore file. This file stipulates what files not to upload.

Click here for more information: https://dev.to/eprenzlin/env-gitignore-and-protecting-api-keys-2b9l

## Credits

- HyperionDev - https://www.hyperiondev.com/
- Stack Overflow - https://stackoverflow.com/
- MongoDB: https://docs.mongodb.com/manual/crud/
- Mongoose.js: https://mongoosejs.com/docs/models.html
- Mongoose.js: https://mongoosejs.com/docs/queries.html
- loizenai: https://loizenai.com/react-node-js-mongodb-crud/#define-nodejs-Mongoose-model

## Author

👤 **Chanelle Bösiger**

* Github: [@ChanBos](https://github.com/ChanBos)
* LinkedIn: [@Chanelle Bösiger](https://linkedin.com/in/https:\/\/www.linkedin.com\/in\/chanelle-b%C3%B6siger-70587767\/)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_