# Ejemplo node restful

$ mkdir ejemplo-node

$ cd ejemplo-node

## Make package.json

$ npm init

## Install

$ npm install express --save

$ npm install express-jwt --save

$ npm install body-parser --save

$ npm install cors --save

$ npm install express-swagger-generator --save

$ npm install eslint --save-dev

$ npm install nodemon --save-dev

## Config eslint

$ ./node_modules/.bin/eslint --init

## Run application

$ npm start

## Create certifies only for develop mode

$ openssl ecparam -name secp521r1 -genkey -noout -out key.pem

$ openssl ec -in key.pem -pubout -out pub.pem

or

$ npm run cert


## Link

https://medium.com/@asfo/desarrollando-una-sencilla-api-rest-con-nodejs-y-express-cab0813f7e4b

https://www.codementor.io/@olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd

https://github.com/davidpoza/passport-jwt-example

https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/
