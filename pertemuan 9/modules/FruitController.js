// import data fruits
const fruits = require("./data.js");

// Membuat fungsi index
const index = () => {
    for(const fruit of fruits) {
        console.log(fruit);
    }
};

// Membuat fungsi Store
const store = (name) => {
    fruits.push(name);
    index();
};

index()

// export method index dan store
module.exports = { index, store };