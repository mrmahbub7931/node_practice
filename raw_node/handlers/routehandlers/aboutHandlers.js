// Module scaffolding
const handler = {};

handler.aboutHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(200, {
        message: "This is about url!"
    })
}

module.exports = handler;