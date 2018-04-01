# atm-sim

## Objective
`
The object of this project is to simulate a ATM and it interaction with a user, for demo purposes.

## Subprojects

The project is dividade into 2 subprojects:

1. /api: the API was made in nodejs and have no persistence:
1.1. /api/helper: general use helpers;
1.2. /api/models: atm model;
1.3. /api/tests: tests for atm model and api requests;
2. /webclient: a Angular front end that render the user interface:
2.1. /webclient/src: source for webclient;
2.2. /webclient/dist: created on build, hold the webclient to be delivered to user internet browser;

## Requirements

The system was contructec to fullfill the following requirements:

* Always deliver the lowest number of possible notes;
* It’s possible to get the amount requested with available notes;
* The client balance is infinite;
* Amount of notes is infinite;
* Available notes $ 100,00; $ 50,00; $ 20,00 e $ 10,00

## Install, Test, Build and Run

### Install

1. Copy the folder to somewhere in yor computer;
2. Go to /  and `npm install`;
3. Go to /webclient and `npm install`;
That's it

### Test

There is 2 sets of tests in this project:
1. Back end tests: on / folder, use `npm test`;
2. Fron end tests: on /webclient, use `npm test`;

### Build

Once installed, only the webclient must be build:
1. Go to /webclient and `npm build`;

### Run

Once installed and build, there is only one step to run the system:
1. Go to / and `npm start`;
...and the system can be accessed on **http://localhost:3000**.

## Architecture

* The API:
** Made using *nodejs* and *express*;
** The tests are made using *mocha*;
** The atm model is low coupled from API, improving reusability;
** The API catch any Exception from model and translates it to valid HTTP responses. In this way, any client can handle exception cases;

* The Webclient:
** Made using Angular 5 and Angular/CLI;
** The tests use *jasmine*;
** A AtmService is implemented to handle the API, lowering the coupling from the rest of the system;