# build_website_node_express

# Building a Node express Website

### Steps to follow:

## STEP1- Clone the repository link as above and open the code via VS Code!

Create the initial project details: Name,version,author by

### npm init

Then
Install express

- npm install express

Install nodemon

- npm install --save-dev nodemon

### Install dev dependencies as(babel for ES6 support and syntax)

- npm install --save-dev babel-cli babel-preset-env babel-preset-stage-0
  Create a file called .babelrc and paste the following:
  {
  "presets": ["env", "stage-0"]
  }

### Install eslint

- npm install --save-dev eslint
  Then to configure the eslint run
  - npx eslint --init
    And choose the matching
    This will create a eslintrc.json file

### Install prettier

- npm install --save-dev prettier
  Then create a file for .prettierrc
  {
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100
  }

### Configure Eslint to work with prettier

at eslintrc.json add
"extends": [
"airbnb-base","prettier"
],
"plugins": [
"prettier"
],

### Change the start script in the package.json

"scripts": {
"start": "nodemon ./server.js --exec babel-node -e js"

### Create the server file named server.js and put the main logic here!

### Master branch contains a simple

### with_static_files branch contains with a full static website added as a middleware

by the command
// middleware to set the static dir
app.use(express.static(STATIC_DIR_PATH));

### Do a simple test for GET request

Start using the template engine EJS

- npm install ejs
