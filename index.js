// Dependencies
const mathLibrary = require('./lib/math');
const qoutesLibrary = require('./lib/qoutes');

// scaffolding
const app = {};

app.config = {
    timeBetweenQoutes: 1000,
}

app.printAQoute = function printAQoute(){
    const allQoutes = qoutesLibrary.allQoutes();

    const numberOfQoutes = allQoutes.length;

    const randomNumber = mathLibrary.getRandomNumber(1, numberOfQoutes);

    const selectedQoute = allQoutes[randomNumber - 1];
    
    console.log(selectedQoute);
}

app.indifiniteLoop = function indifiniteLoop(){
    setInterval(app.printAQoute, app.config.timeBetweenQoutes);
}

app.indifiniteLoop();