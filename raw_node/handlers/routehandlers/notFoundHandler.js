// Module scaffolding
const handler = {}

handler.notFoundHandler = (requestProperties,callback) => {
    callback(404, {
        message: "This requested url was not found!"
    })
}

module.exports = handler;