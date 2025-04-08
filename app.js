const http = require('http');
const url = require('url');

const port = process.env.PORT || 3000;

// note that typically the variables here are `req` and `res` but we are using `request` and `response` for clarity
// modify the server code to look like this
const server = http.createServer(function(request, response) {
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({ text: 'hi', number: [1, 2, 3] }));
  });