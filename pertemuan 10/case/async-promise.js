// producing
const persiapan = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Persiapan ... ")
        }, 3000);
    });
};

const rebusAir = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Rebus Air ... ")
        }, 7000);
    });
};

const masak = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Masak Mie ... ")
        }, 5000);
    });
};

// consumming promise
const main = () => {
    persiapan()
    .then((ress) => {
        console.log(ress);
        return rebusAir();
    })
    .then((ress) => {
        console.log(ress);
        return masak();
    })
    .then((ress) => {
        console.log(ress);
    });
};
main();