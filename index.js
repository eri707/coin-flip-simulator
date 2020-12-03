const myArgs = process.argv[2]
let heads = 0;
let tails = 0;

// For statement
for (let i = 0; i < myArgs; i += 1) {
    const randomNum = Math.random() * 2;
    const integer = Math.floor(randomNum);
    if (integer == 0) {
        heads += 1;
    } else {
        tails += 1;
    };
};
console.log(`Heads: ${heads}` );
console.log(`Tails: ${tails}`);
