/**
 * Title: Hanlde request response
 */

// Dependencies
const url = require('url');
const {StringDecoder} = require('string_decoder');
const routes = require('../route');
const { notFoundHandler } = require('../handlers/routehandlers/notFoundHandler');
// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
    // Request handle
    // get the url and parse
    const parsedUrl = url.parse(req.url,true);
    const trimmedPath = parsedUrl.pathname.replace(/^\/+|\/+$/g,'');
    const method = req.method.toLowerCase();
    const decoder = new StringDecoder('utf-8');
    let realData = '';
    const requestProperties = {
        parsedUrl,trimmedPath,method
    }
    
    req.on('data',(buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;
        chosenHandler(requestProperties, (statusCode, payload)=> {
            statusCode = typeof(statusCode) === 'number' ? statusCode : 500;
            payload = typeof(payload) === 'object' ? payload : {};

            const payloadString = JSON.stringify(payload);
            res.writeHead(statusCode);
            res.end(payloadString)
        });
        // Response handle
        // res.end("Hello Programmers!");
    })
}

module.exports = handler;