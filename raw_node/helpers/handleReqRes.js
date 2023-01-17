/**
 * Title: Hanlde request response
 */

// Dependencies
const url = require('url');
const {StringDecoder} = require('string_decoder');

// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
    // Request handle
    // get the url and parse
    const parsedUrl = url.parse(req.url,true);
    const trimmedPath = parsedUrl.pathname.replace(/^\/+|\/+$/g,'');
    const method = req.method.toLowerCase();
    console.log(trimmedPath,method);
    const decoder = new StringDecoder('utf-8');
    let realData = '';
    
    req.on('data',(buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
        // Response handle
        res.end("Hello Programmers!");
    })
}

module.exports = handler;