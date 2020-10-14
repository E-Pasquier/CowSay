const myInfos = require("./information.js");

const cowsay = require("cowsay");


console.log(
    cowsay.say({
        text : `Hello, my name is ${myInfos.name} and I am on ${myInfos.campus} campus`,
    })
);

