// Import FruitController
// Melakukan destructing

const {index,store} = require("./FruitController.js");

const main = () => {
    index();
    store("Melon");
}

main()