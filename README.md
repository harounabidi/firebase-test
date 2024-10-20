Development of a Dashboard with Firebase Authentication

## Required Features

- [x] ~Home Page~
  - [x] ~Accessible to all users~
  - [x] ~Design inspired by klark.app (I inspired by dribble.com)~
  - [x] ~Clearly visible "Login" button to access the dashboard~
- [x] ~Authentication~
  - [x] ~Use the Firebase SDK for authentication~
  - [x] ~Handle authentication errors clearly for the user~
  - [x] ~Display understandable error messages~
- [x] Login Process
  - [x] ~Successful authentication with Firebase~
  - [x] ~Retrieve Firebase token~
  - [x] ~Send the token to the endpoint~
  - [x] Receive and store the usage token, user information, and company details
- [x] ~Dashboard~
  - [x] ~Accessible only after successful authentication~
  - [x] ~Display relevant user and company information~
- [x] Unit and/or integration tests
- [x] ~Implementation of global state management (Redux, Context API, etc.)~

## Authentication

The project is a dashboard that requires authentication to access. The user must log in to access the dashboard. The user must provide an email and password to log in. The user must be able to log out of the dashboard. The user must be able to see their user information and company information on the dashboard.

in this situation it is a good practice to use middleware to check if the user is authenticated before accessing the dashboard. but in this project, I used context API to manage the global state.

## Install firebase

```
npm i
```

## Modify .env.example

```
cp .env.example .env
```

## Run

```
npm run dev
```
