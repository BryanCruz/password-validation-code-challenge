# Itaú Challenge

Simple API to validate passwords with a given policy.

## Requirements

- [Node 10.x](https://nodejs.org/en/)
- [Yarn 1.x](https://yarnpkg.com/)

## Instructions

- `yarn install` to install dependencies;
- Check the config file and change any variables that you wish (more info: [#Configuration](#configuration));
- `yarn start:dev` to start application in dev mode with auto reload;
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

Example of a request with cURL to check the password `thisISpWORD!%10`:

`curl -XPOST -H 'Content-Type: application/json' -d '{"password": "thisISpWORD!%10"}' localhost:3000/password/check`

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

### About the solution

I created the REST API using the [TypeScript](https://www.typescriptlang.org/) language, the [Express](https://expressjs.com/) framework, [Jest](https://jestjs.io/) for unit testing and functional programming concepts to structure the code.

It has the entrypoint `index.ts` that starts the application, the app initial configuration at `app.ts` and the service routes at `routes.ts`.

The router uses a controller (`controller.ts`) to control the available services, althought we only have one, available at `service.ts`.

The service has the business logic, that is to say, it has the password policy checkers. I created a checker for each requirement specified in the challenge description and let each of them as simple as possible and with customizable params to be changed at any time using the config file.

The config file is available at `config.ts` and its explained [above](#configuration).

The unit tests are available inside the `__tests__` folder. I made sure that the code coverage was at 100% and focused in making many tests for `isPasswordValid` function of the service.

## Authors

- [Bryan Bialokur da Cruz](https://github.com/BryanCruz)
