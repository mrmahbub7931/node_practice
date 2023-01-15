// Dependencies
const fs = require('fs');

// scafollding
const qoutes = {};

qoutes.allQoutes = function allQoutes() {
    // Read text file
    const fileContents = fs.readFileSync(`${__dirname}/qoute.txt`,'utf8');

    // Turn the string into an array 
    const arrayOfQoutes = fileContents.split(/\r?\n/);

    // return the array 
    return arrayOfQoutes;
}

module.exports = qoutes;

