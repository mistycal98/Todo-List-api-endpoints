
# Todo-List-Backend

Node.js REST API project made with express.js
and MongoDB as a backend database

## Folder Structure

```
.
├── app.js
├── config.env
├── controllers
│   └── todoControllers.js
├── models
│   └── Todo.js
├── package.json
├── package-lock.json
├── README.md
└── routes
    └── todoRoute.js
```

# Endpoints

- /todos <br>
  GET - fetch all the todos <br><br>
  POST - Create a task

```
/* body should contain */
{
    "task" : "Hello from this Server from Node.JS"
}
```

- /todos/:taskId <br>
  GET - fetch the task <br><br>
  PATCH - Updates a task

```
/* body should contain */

{
    "task" : "Hello from this Server from Postman",
    "completed" : "true"
}
```

DELETE - Delete a task


# Pre-Requisite

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) - Node Package Manager

# Clone and Runnig the Project
```
$ git clone https://github.com/mistycal98/Todo-List-api-endpoints.git
```
Download all packages and dependencies
```
$ npm install
```
Configure config.env file
```
/* create a file config.env in the root folder
include variables */

PORT = '<on which port you want to start your server/>'
DB_CONNECTION = '<your mongoDB server base-url running on your local machine or cloud Atlas/>'
```
Run project on your local Machine
```
$ npm start
```

## Live Demo

[Heroku](https://todo-list-api-endpoints.herokuapp.com/)

## Try it out with Postman
[Todo-list-backend](https://www.getpostman.com/collections/edca98ecd38b0ee668b2)