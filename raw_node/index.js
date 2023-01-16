/**
 * title: Uptime Monitoring Application
 */

// Dependencies
const http = require('http');
const url = require('url');

// module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000
}

//create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);

    server.listen(app.config.port, () => {
        console.log(`listening to port number ${app.config.port}`);
    })
}

// hanlde request and response

app.handleReqRes = (req, res) => {
    // Request handle
    // get the url and parse
    const parsedUrl = url.parse(req.url,true);
    const trimmedPath = parsedUrl.pathname.replace(/^\/+|\/+$/g,'');
    const method = req.method.toLowerCase();
    console.log(trimmedPath,method);
    // Response handle
    res.end("Hello Programmers!");
}

// start the server
app.createServer();