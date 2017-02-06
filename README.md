# The Quantified Self Project
> This aim of this project is to begin to bring together real world fitness and health data that is _encapuslated and organized by day_ for easy tracking by the user. :chart_with_upwards_trend:

## Overview
Ultimately a user should be able to pull fitness and health data in from select sources. Additionally, they can add custom data types to track (think heart rate, blood pressure, gluccose, etc). The idea is to aggregate all data that happened in that day in a very simple and concise view. Nothing too fancy, no overload of details. Just 10,000 foot view stuff. Future ideas could include goals hit or missed. 

##  MVP and Proof of Concept

| User Stories | Status |
|--------------|--------|
| User can sign up |        |
| User can login  |        |
| User can fetch data from ~~Google Fit~~ Strava API |   |
| User can manualy input **blood pressure** and **heart rate**    |   |
| User can view all fitness and health data for a particular day       |   |
| User can logout     |   |

## Services expected to integrate with for Minimum Viable Product
- ~~[Google Fit](https://developers.google.com/fit/)~~ 
- [Strava](https://strava.github.io/api/)
- [Omron Health](https://omronhealthcare.com/api/) _If time permits_

## Anticipated technologies to use
- Passport for OAuth authentication with services (Google Fit, OMRON, etc)
- Bcrypt.js for hashing  passwords
- Mongo / Mongoose for data persistence
- Node.js for backend API 
- React library on front end
- Webpack for bundling and development
- Redux for state managemnet on front end