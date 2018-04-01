#!/bin/sh

echo Preparing to run atm-sim

echo '\t'Installing npm modules to API
npm install

echo '\t'Testing API
npm test

echo '\t'Installing npm modules to Webclient
cd webclient
npm install

echo '\t'Testing Webclient
npm test

echo '\t'Building Webclient
npm run build

echo '\t'Running the atm-sim
cd ..
npm start
