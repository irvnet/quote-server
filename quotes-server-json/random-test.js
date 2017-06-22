function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

console.log("running random numbers...");
console.log(randomInt(1,6));


