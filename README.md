# FMSAPP - React Version

FMSAPP - Farm Management System - will be a working web app for small farmers to use to manage their farm.

### Instructions for local setup

1. npm i express dotenv mongoose colors
2. npm i -D nodemon
3. npm install bcryptjs (In second video/part 2 - jwt authentication)
4. npm install jsonwebtoken (In second video/part 2 - jwt authentication)
5. npx create-react-app@latest frontend --template redux (In third video/part 3 - frontent authentication)
6. npm i react-router-dom (In third video/part 3 - frontent authentication)
7. npm i react-icons (In third video/part 3 - frontent authentication)
8. npm i -D concurrently (In third video/part 3 - frontent authentication)
9. npm i axios react-toastify (In third video/part 3 - frontent authentication)

### Notes to self

- In package.json -> "scripts": {"start": "node backend/server.js", "server": "nodemon backend/server.js"},
- We set the api routes/url in the server.js file and in the (name)Routes.js files and contorollers
- jwt.io
- in backend package.json add in "scripts" section "client": "npm start --prefix frontend"
- When working in the frontend, make sure you cd into frontend for any package install
- We use (In third video/part 3 - frontent authentication) so that we can setup both backend and frontent running at same time (look at package.json -> scripts -> dev to see what I am talking about)
-
