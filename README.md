# NodeJS Exam prep 1

## Setup

- [x] initialize project
- [x] setup debuging
- [x] install & config Express
- [x] make firts commit
- [x] install & config Mongoose (MongoDB)
- [x] add resources
- [x] install & config Handlebars & static files
- [x] render homePage

### Render pages

- [x] create layout
- [x] create routes
- [x] dashboard
- [x] searach
- [x] login
- [x] register
- [x] add homeController
  - [x] update routes
    - [x] home
    - [x] search
- [] Setup pages names for browser tab
- []
- []

## Add animal page

- [x] Fix create.html & update form
- [x] Render add animal page
  - [x] Add animal controller
  - [x] Add route to routes.js
- [x] Add animal model
- [x] Add animal service & save animal collection to database
- [x] Redirect to dashboard page
- [x] Add required validations to model

## Register functionality

- [x] Add new controller `authController`
  - [x] update routes
    - [x] login
    - [x] register
  - [x] add urlencoded() to index
- [x] Add User model
  - [x] Add password hashing
- [x] Add User service
- [x] Handle registration (create user in database)
- [x] RePassword must match

## Login functionality

- [x] Handle login page

  - [x] Validate user
  - [x] Validate password
  - [x] Create token
  - [x] Return token to client

  ## Logout functionality

  - [x] Add logout action
  - [x] Clear cookie
