# Globacap NodeJS technical test

Welcome to the Globacap technical test for NodeJS.

Exercise to be completed:
* Task 1 - Return a filtered list of users
* Task 2 - Return a user based on the identifier
* Task 3 - Create a user
* Task 4 - Implement sign in/out method to authentication the user and persist the session
* Task 5 - Include an authentication middleware to validate the user session

## Tasks
### 1. Return a filtered list of users

On this task will require to sort a list of users based on a query parameter that will be send on the request.

The query parameter will accept:
* `active` - Will filter users who are active

example url: `<url>/api/users?active=true`

**Note:** The route/endpoint is already created, so you will only need to generate the code to return the filtered list.

### 2. Return a user based on the identifier

On this task, will have to find a user based on an identifier.

The following user cases will be implemented:
* Return a user based on the identifier if match with the identifier sent as parameter.
* Return a Not found error in case the request identifier not match any user.

**Note:** The route/endpoint is already created, so you will only need to generate the code to return the user if found.

### 3. Create a user

On this task, will require to send the information to create a user resource.

The `user` resource will contain the following attributes:
* `name`

Will have to complete the following cases:
* Validate is will receive all the required fields
* Create a new user, persist the data, and return the created value
* When creating the new user, will have to create the user identifier as an increment of the last item.
* Return an error if attribute `name` already exists (has to be an unique value)


**Note:** The route/endpoint is already created, so you will only need to generate the code to return the user if found.

### 4. Implement sign in/out method to authentication the user and persist the session

This task will require to implement sign in and sign out methods to authenticate the user.

**Sign In Method:**
* Will receive `email` & `password` attribute in the body as user credentials
* Will need to validate if credentials are correct
* * If correct
* * * Return a success code with user information
* * * Save the user in the session for future calls
* * If incorrect
* * * Trown an 401 error with message

**Sign Out Method:**
* Will delete the user session

**Note:** A valid credentials for testing are `email@domain.com` & `password`

### 5. Include an authentication middleware to validate the user session

This task will require to create a middleware, that will validate if a token provide on the request is valid, so the user is authorized.

This task has to be match the following criteria:
* The middleware will be defined for the whole application, not for an individual route/endpoint.
* The token will be provided on the request as a header with the name of `authorization`.
* In case that the token provided is no valid, will return an Unauthorized error.


**Note:** A valid token for testing is `eyJ1c2VyIjoiam9obmR1ZSIsImlkIjoxNTE2MjM5MDIyfQ`


### Assets

This services will provide the functionalities that will be required to complete the tasks.
##### User services

The service will provide the following methods to manage the user resource:

*  `getAll`
> **Params:**
>```
> n/a
> ```
> **Return:**
> `Promise(Array(User))`

* `findOne`
>
> **Params:**
> ```
> id - number
> ```
> **Return:** `Promise(User)`

*  `create`
> **Params:**
> ```
> name - string
> ```
> **Return:**
> `Promise(User)`
##### Auth services
This serve will provide a method to validate is the authentication token is valid:
* `isTokenValid`
> This method will validate if a token is valid or not
>
> **Params:**
> ```
> token - string
> ```
> **Return:**
> ```boolean```
