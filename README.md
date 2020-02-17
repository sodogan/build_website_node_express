# build_website_node_express

# Building a Node express Website

### Steps to follow:

## STEP1- Clone the repository link as above and open the code via VS Code!

Create the initial project details: Name,version,author by

### npm init

Then
Install express

- npm install express

Install dev dependencies as(babel for ES6 support and syntax)

- npm install --save-dev babel-cli babel-preset-env babel-preset-stage-0

Install nodemon

- npm install --save-dev nodemon

Install eslint

- npm install --save-dev eslint
  > Then to configure the eslint run
  > npx eslint --init
  > And choose the matching
  > This will crete a eslintrc.js file

### Install prettier

> npm install --save-dev prettier
> then create a file for .prettierrc

### Create the server file named server.js

Add the static files to the folder path under static

Add the middleware support for the static pages

Do a simple test for GET request

Start using the template engine EJS
