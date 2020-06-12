# Noon Case Study
### High Level solution and decisions

  - Backend should be a micro service and can be deployed separately 
    * Expressjs use to create APIs
    * data-store use to store data (like images)
  - React app should be host separately
    * Use SCSS for styling 
    * Did not use state management library like Redux

### To make this production ready
*   Add backend and front-end logs for error identification. (Log files can be used for backend and third party service like splunk can be used to frontend)
*   Add swagger documentation for API
*   Add unit tests
*   Use scalable data storage
*   Performance improvements
*   Improve the security aspect of the solution (JWT, HTTPS etc.)
*   Use docker to deploy front-end and back-end
*   Code reviews
*   Configuration changing mechanism

### If I had more time

*   Lazy loading UI with infinite scroll
*   100% unit test coverage
*   Documentation for API and the solution
*   Awesome user interface
*   Use state managing mechanism
*   Optimized style
*   Code refactoring for maintain the best practices :)
*   Use Typescript

### Setup

Using good old NPM

Open terminal in solution root
```sh
$ npm run setup (install dependencies)
```

Run Server
```sh
$ npm run start_server
```
Run client

```sh
$ npm run start_client
```
