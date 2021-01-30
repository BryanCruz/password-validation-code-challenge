# Itaú Challenge

Simple API to validate passwords with a given policy.

## Requirements

- [Node 10.x](https://nodejs.org/en/)
- [Yarn 1.x](https://yarnpkg.com/)

## Instructions

- `yarn install` to install dependencies;
- Check the config file and change any variables that you wish (more info: [#Configuration](#configuration));
- `yarn start:dev` to start application in dev mode with auto raeload;
- `yarn start` to start application;
- `yarn test` to execute unit tests.

## Routes

The application will start by default in port 3000 and the following routes will be available:

- GET /
- - A simple "Hello World"
- - expected return: `Hello World`
- GET /health
- - Application health check
- - expected return: `{"status": "healthy"}`
- POST /password/check
- - Check if a given password is valid
- - Expected request body: `{"password": "thisISpWORD!%10"}`
- - Expected return: `{"isValid": false}` or `{"isValid": true}`

Example of a request with cURL to check the password `thisISpWORD!%10`: `curl -XPOST -H 'Content-Type: application/json' -d '{"password": "thisISpWORD!%10"}' localhost:3000/password/check`

### Configuration

The config file is `src/config.ts`. You can change the following variables in it:

- appPort (default: `3000`): the port in which the api will be available
- passwordPolicy:
- - hasNoSpaces (`true`): the password should not have any spaces
- - hasNoRepeatedCharacters (`true`): the password should not have repeated characters
- - hasAtLeastNCharacters (`9`): minimum number of characters
- - hasAtLeastNDigits (`1`): minimum number of digits
- - hasAtLeastNUppercase (`1`): minimum number of uppercase letters
- - hasAtLeastNLowercase (`1`): minimum number of lowercase letters
- - hasAtLeastNSpecialCharacters (`1`): minimum number of special characters (`!@#$%^&*()-+`)

### Assumptions

- The default password policy does not allow blank spaces because of the following requirement: "Nota: Espaços em branco não devem ser considerados como caracteres válidos.".
- Uppercase letters and lowercase letters are treated as different characters. This means that a password that contains both "a" and "A" could be valid.

## Authors

- [Bryan Bialokur da Cruz](https://github.com/BryanCruz)
