# Angular frontend for [https://renner.id](https://renner.id) [![CircleCI](https://circleci.com/gh/NiklasRenner/website-frontend.svg?style=svg)](https://circleci.com/gh/NiklasRenner/website-frontend)

Personal project for personal website. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. 
Run `ng serve --host 0.0.0.0` to bind to all interfaces, instead of localhost only, if you wanna be able to reach the site from something like a phone on the same wifi.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Update dependencies

```bash
npm install -g npm-check-updates
ncu -u
npm install
``` 
