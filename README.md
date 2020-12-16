# Blog Backend API Endpoint

Node.js project made with express.js which serves blogs data

### Endpoints

- [/blogs](https://blog-backend-api-endpoint.herokuapp.com/blogs) - this endpoints serves all the blogs articles
- [/blogs/:id](https://blog-backend-api-endpoint.herokuapp.com/blogs/2rvqpdbpka3n3fhf) - this endpoint serves a specific blog and takes id as an parameter

## Example

- [/blogs/2rvqpdbpka3n3fhf](https://blog-backend-api-endpoint.herokuapp.com/blogs/2rvqpdbpka3n3fhf) - this outputs a blog article with an id of 2rvqpdbpka3n3fhf

## Files and Folder

```
├── app.js
├── data
│   └── blogs.json
├── views
│   └── home.ejs
├── config.env
├── package.json
└── README.md
```

## Pre-Requisite

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) - Node Package Manager

## Run The Project

```
> npm install
```

This installs all the dependencies to your project

```
>  npm run start
```

This starts a server on http://localhost:3000 and you can now [fetch](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data) data from the api

## Deployment using Heroku

[Live-Demo](https://blog-backend-api-endpoint.herokuapp.com/)

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
$ git clone https://github.com/ialtafshaikh/todo-app-backend.git
```
Download all packages and dependencies
```
$ npm install
```
Run project on your local Machine
```
$ npm start
```

## Live Demo

[Heroku](https://todo-list-api-endpoints.herokuapp.com/)