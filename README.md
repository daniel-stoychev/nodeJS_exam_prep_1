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
- [x] Automatic login on register

## Login functionality

- [x] Handle login page

  - [x] Validate user
  - [x] Validate password
  - [x] Create token
  - [x] Return token to client

## Logout functionality

- [x] Add logout action
- [x] Clear cookie

## Authorization

- [x] Add `authMiddleware`
- [x] Install cookie parser
- [x] Add auth middleware
- [x] Add isAuth route guard
- [x] Add isGuest route guard

## Refactor & bind functionalities

- [x] Add Owner ID to database upon creation of Animal
- [x] List dynamic animals on homepage
- [ ] Add details functionality
  - [x] Render details
  - [x] Update guest view
  - [ ] Update user view with donations/you already donated
    - [x] Add donation service
    - [x] Update details view with donate button
    - [x] Update controller with post donate request
    - [x] Setup hasDonated check
  - [x] Update owner view

## Delete action

- [x] Create delete function at service
- [x] Update animalController with delete request
  - [x] Validate delete action (only from owner)

## Edit action

- [x] Render Edit view
- [x] Update placehoders in view
- [x] Add Edit service
- [x] Add post edit action to controller
  - [x] validate owner
- [x] Redirect to current nimal details page

## Dashboard

- [x] Render dashboard view
- [x] Load dynamic content (animals)
- [x] Fix details buttons
- [x] Redirect to animal details page

## Error handling

- [x] Hanlde register page
- [x] Handle login page
- [x] Handle add animal page

## Bonus

- [x] Refactor authController using the exercise lecture
- [x] Add better validation for registration email format
- [x] Move rePassword validation to User model
- [ ] Deny direct EDIT URL access to non-owners (from 2:20)
- [x] Save typed email to login if failure
- [ ] Search
- [ ] To check Emmet redactro (faster html code writting)
