#!/bin/sh

echo Cleaning  atm-sim

echo '\t'Removing npm modules from API
rm -Rf node_modules

echo '\t'Removing npm modules and dist files from Webclient
cd webclient
rm -Rf node_modules
rm -Rf dist

echo ALL is clean
