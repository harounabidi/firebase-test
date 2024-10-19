Development of a Dashboard with Firebase Authentication

## Required Features

- [x] ~Home Page~
  - [x] ~Accessible to all users~
  - [x] ~Design inspired by klark.app (I inspired by dribble.com)~
  - [x] ~Clearly visible "Login" button to access the dashboard~
- [] Authentication
  - [x] ~Use the Firebase SDK for authentication~
  - [] Handle authentication errors clearly for the user
  - [] Display understandable error messages
- [] Login Process
  - [x] ~Successful authentication with Firebase~
  - [x] ~Retrieve Firebase token~
  - [] Send the token to the endpoint
  - [] Receive and store the usage token, user information, and company details
- [] Dashboard
  - [] Accessible only after successful authentication
  - [] Display relevant user and company information
- [] Unit and/or integration tests
- [] Implementation of global state management (Redux, Context API, etc.)

## Install firebase

```
npm install firebase
```

## Modify .env.example

```
cp .env.example .env
```

## Run

```
npm run dev
```
