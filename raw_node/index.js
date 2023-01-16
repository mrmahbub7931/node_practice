/**
 * title: Uptime Monitoring Application
 */

// Dependencies
const http = require('http');

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
    // Response handle
    res.end("Hello Programmers!");
}

// start the server
app.createServer();