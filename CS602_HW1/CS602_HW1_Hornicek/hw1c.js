const colors = require('colors');

const ZipCodeEmitter = require('./zipCodeEmitter').ZipCodeEmitter;

const cities = new ZipCodeEmitter();

cities.on("lookUpByZipCode",(args)=> {
    console.log("Event lookUpByZipCode called!",args);
});





