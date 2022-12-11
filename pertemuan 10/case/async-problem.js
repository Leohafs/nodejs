const persiapan = () => {
    setTimeout(() => {
        console.log("persiapan ...");
    },3000);
}

const rebusAir = () => {
    setTimeout(() => {
        console.log("Rebus air ... ");
    },7000);
}

const masak = () => {
    setTimeout(() => {
        console.log("Memasak mie ...");
        console.log("Selesai ... ");
    }, 5000);
}

const main = () => {
    persiapan();
    rebusAir();
    masak();
}
main();