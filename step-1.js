const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", function (line) {
    let iptArray = line.split(" ");
    let word = iptArray[0].toString();
    let num = parseInt(iptArray[1]);
    let way = iptArray[2].toString();
    let isLeft = way == "l" || way == "L";
    if (num < 0) {
        num *= -1;
        isLeft = !isLeft
    }

    let wordPart1 = num % word.length
    if (isLeft) {
        let a = word.substr(0, wordPart1)
        let b = word.substr(wordPart1, word.length)
        console.log(b + a)
    }
    else if (isLeft == false) {
        let a = word.substr(word.length - wordPart1, word.length)
        let b = word.substr(0, word.length - wordPart1)
        console.log(a + b)
    }
    rl.close();
}).on("close", function () {
    process.exit();
});

